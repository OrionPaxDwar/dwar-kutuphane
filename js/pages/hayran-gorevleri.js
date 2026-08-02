const fanMenuList = document.getElementById("fanMenuList");
const fanDetailArea = document.getElementById("fanDetailArea");
const fanSearchInput = document.getElementById("fanSearchInput");
const fanLevelFilter = document.getElementById("fanLevelFilter");
const fanMedalFilter = document.getElementById("fanMedalFilter");
const fanResetBtn = document.getElementById("fanResetBtn");

let activeQuestId = null;

function normalizeText(text) {
    return String(text || "")
        .toLocaleLowerCase("tr-TR")
        .replaceAll("ç", "c")
        .replaceAll("ğ", "g")
        .replaceAll("ı", "i")
        .replaceAll("i̇", "i")
        .replaceAll("ö", "o")
        .replaceAll("ş", "s")
        .replaceAll("ü", "u")
        .replaceAll("â", "a")
        .replaceAll("î", "i")
        .replaceAll("û", "u")
        .trim();
}

function getFilteredQuests() {
    const searchValue = normalizeText(fanSearchInput.value);
    const levelValue = fanLevelFilter.value;
    const medalValue = fanMedalFilter.value;

    return fanQuests.filter(function (quest) {
        const searchableText = normalizeText(`
            ${quest.reputation}
            ${quest.questName}
            ${quest.shortInfo}
            ${quest.npc}
            ${quest.location}
            ${quest.medalLabel}
        `);

        const textMatch = searchableText.includes(searchValue);

        const levelMatch =
            levelValue === "all" ||
            String(quest.level) === levelValue;

        const medalMatch =
            medalValue === "all" ||
            quest.medal === medalValue;

        return textMatch && levelMatch && medalMatch;
    });
}

function createMenuItem(quest) {
    const activeClass = quest.id === activeQuestId ? "active" : "";

    return `
        <button class="fan-menu-item ${activeClass}" data-id="${quest.id}" type="button">
            <img src="${quest.icon}" alt="${quest.reputation}">

            <div>
                <strong>${quest.reputation}</strong>
                <span>${quest.medalLabel} · Sv${quest.level}+</span>
            </div>
        </button>
    `;
}

function createRequirementList(requirements) {
    if (!requirements || requirements.length === 0) {
        return "";
    }

    return `
        <div class="fan-resource-list">
            ${requirements.map(function (resource) {
                return `
                    <div class="fan-resource-item">
                        <img src="${resource.image}" alt="${resource.name}">

                        <div>
                            <strong>${resource.name}</strong>
                            <span>${resource.amount}</span>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function createMainRequirementsSection(quest) {
    if (!quest.requirements || quest.requirements.length === 0) {
        return "";
    }

    return `
        <section class="fan-detail-section">
            <h3>${quest.requirementsTitle || "İstenen Kaynaklar"}</h3>
            ${createRequirementList(quest.requirements)}
        </section>
    `;
}

function createSectionList(quest) {
    const sections = quest.sections;

    if (!sections || sections.length === 0) {
        return "";
    }

    return `
        <section class="fan-detail-section">
            <h3>${quest.sectionsTitle || "Teslim Noktaları"}</h3>

            <div class="fan-section-list">
                ${sections.map(function (section) {
                    return `
                        <div class="fan-section-card">
                            <h4>${section.title}</h4>

                            ${
                                section.location
                                    ? `<p class="fan-section-location">${section.location}</p>`
                                    : ""
                            }

                            ${
                                section.info
                                    ? `<p class="fan-section-info">${section.info}</p>`
                                    : ""
                            }
${
    section.previewImage
        ? `
            <div class="fan-section-preview">
                <img src="${section.previewImage}" alt="${section.previewAlt || section.title}">
            </div>
        `
        : ""
}
                            ${
                                section.comboItem || section.cubeItem
                                    ? `
                                        <div class="fan-combo-summary">
                                            ${
                                                section.comboItem
                                                    ? `
                                                        <div class="fan-combo-summary-card">
                                                            <img src="${section.comboItem.image}" alt="${section.comboItem.name}">
                                                            <div>
                                                                <strong>${section.comboItem.name}</strong>
                                                                <span>${section.comboItem.amount}</span>
                                                            </div>
                                                        </div>
                                                    `
                                                    : ""
                                            }

                                            ${
                                                section.cubeItem
                                                    ? `
                                                        <div class="fan-combo-summary-card">
                                                            <img src="${section.cubeItem.image}" alt="${section.cubeItem.name}">
                                                            <div>
                                                                <strong>${section.cubeItem.name}</strong>
                                                                <span>${section.cubeItem.amount}</span>
                                                            </div>
                                                        </div>
                                                    `
                                                    : ""
                                            }
                                        </div>
                                    `
                                    : ""
                            }

                            ${createRequirementList(section.items)}
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}
function createNotesSection(quest) {
    if (!quest.notes || quest.notes.length === 0) {
        return "";
    }

    return `
        <section class="fan-detail-section">
            <h3>${quest.notesTitle || "Notlar"}</h3>

            <div class="fan-note-list">
                ${quest.notes.map(function (note) {
                    if (typeof note === "string") {
                        return `
                            <div class="fan-note-card">
                                <p>${note}</p>
                            </div>
                        `;
                    }

                    return `
                        <div class="fan-note-card">
                            ${note.title ? `<h4>${note.title}</h4>` : ""}
                            ${note.text ? `<p>${note.text}</p>` : ""}
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function renderQuestDetail(quest) {
    if (!quest) {
        fanDetailArea.innerHTML = `
            <div class="fan-detail-empty">
                Soldan bir görev seç.
            </div>
        `;
        return;
    }

    fanDetailArea.innerHTML = `
        <article class="fan-detail-card">

            <div class="fan-detail-header">
                <div>
                    <span class="fan-detail-badge">${quest.medalLabel}</span>

                    <h2>${quest.questName}</h2>

                    <p>${quest.shortInfo}</p>
                </div>

                <div class="fan-detail-level">
                    Sv${quest.level}+
                </div>
            </div>

            <div class="fan-info-strip">
                <div>
                    <span>İtibar</span>
                    <strong>${quest.reputation}</strong>
                </div>

                <div>
                    <span>NPC</span>
                    <strong>${quest.npc}</strong>
                </div>

                <div>
                    <span>Konum</span>
                    <strong>${quest.location}</strong>
                </div>
            </div>

            ${createMainRequirementsSection(quest)}

            ${createSectionList(quest)}

            ${createNotesSection(quest)}

        </article>
    `;
}

function renderFanPage() {
    const filteredQuests = getFilteredQuests();

    if (filteredQuests.length === 0) {
        fanMenuList.innerHTML = `
            <div class="fan-empty-result">
                Aramana uygun görev bulunamadı.
            </div>
        `;

        renderQuestDetail(null);
        return;
    }

    const activeQuestExists = filteredQuests.some(function (quest) {
        return quest.id === activeQuestId;
    });

    if (!activeQuestId || !activeQuestExists) {
        activeQuestId = filteredQuests[0].id;
    }

    fanMenuList.innerHTML = filteredQuests.map(createMenuItem).join("");

    const activeQuest = filteredQuests.find(function (quest) {
        return quest.id === activeQuestId;
    });

    renderQuestDetail(activeQuest);

    document.querySelectorAll(".fan-menu-item").forEach(function (button) {
        button.addEventListener("click", function () {
            activeQuestId = button.getAttribute("data-id");
            renderFanPage();
        });
    });
}

fanSearchInput.addEventListener("input", renderFanPage);
fanLevelFilter.addEventListener("change", renderFanPage);
fanMedalFilter.addEventListener("change", renderFanPage);

fanResetBtn.addEventListener("click", function () {
    fanSearchInput.value = "";
    fanLevelFilter.value = "all";
    fanMedalFilter.value = "all";
    activeQuestId = null;

    renderFanPage();
});

renderFanPage();