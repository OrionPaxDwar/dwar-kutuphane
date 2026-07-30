const fanQuestList = document.getElementById("fanQuestList");
const fanSearchInput = document.getElementById("fanSearchInput");
const fanLevelFilter = document.getElementById("fanLevelFilter");
const fanTypeFilter = document.getElementById("fanTypeFilter");
const fanResetBtn = document.getElementById("fanResetBtn");

function createRequirementList(requirements) {
    if (!requirements || requirements.length === 0) {
        return `<p class="empty-text">Kaynak bilgisi sonradan eklenecek.</p>`;
    }

    return `
        <div class="fan-resource-list">
            ${requirements.map(function (item) {
                return `
                    <div class="fan-resource-item">
                        <img src="${item.image}" alt="${item.name}">

                        <div>
                            <strong>${item.name}</strong>
                            <span>${item.amount}</span>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function createCreatureList(creatures) {
    if (!creatures || creatures.length === 0) {
        return `<p class="empty-text">Yaratık kesme bilgisi yok veya sonradan eklenecek.</p>`;
    }

    return `
        <div class="fan-creature-list">
            ${creatures.map(function (creature) {
                return `
                    <div class="fan-creature-item">
                        <img src="${creature.image}" alt="${creature.name}">

                        <div>
                            <strong>${creature.name}</strong>
                            <span>${creature.amount}</span>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function createNotes(notes) {
    if (!notes || notes.length === 0) {
        return `<p class="empty-text">Not bilgisi yok.</p>`;
    }

    return `
        <ul class="fan-note-list">
            ${notes.map(function (note) {
                return `<li>${note}</li>`;
            }).join("")}
        </ul>
    `;
}

function createFanQuestItem(quest) {
    return `
        <article class="fan-quest-item" data-id="${quest.id}">
            <button class="fan-quest-head" type="button">
                <div class="fan-quest-main">
                    <span class="fan-level-badge">Sv${quest.level}+</span>

                    <div>
                        <h2>${quest.reputation} Görevi</h2>
                        <p>${quest.shortInfo}</p>
                    </div>
                </div>

                <div class="fan-quest-meta">
                    <span>${quest.typeLabel}</span>
                    <strong>Detay Aç</strong>
                </div>
            </button>

            <div class="fan-quest-body">
                <div class="fan-detail-grid">

                    <div class="fan-detail-box">
                        <h3>Görev Bilgisi</h3>

                        <p>
                            <strong>Görev:</strong> ${quest.questName}
                        </p>

                        <p>
                            <strong>İtibar:</strong> ${quest.reputation}
                        </p>

                        <p>
                            <strong>Seviye:</strong> Sv${quest.level}+
                        </p>

                        <p>
                            <strong>Tip:</strong> ${quest.typeLabel}
                        </p>
                    </div>

                    <div class="fan-detail-box">
                        <h3>NPC ve Konum</h3>

                        <p>
                            <strong>NPC:</strong> ${quest.npc}
                        </p>

                        <p>
                            <strong>Konum:</strong> ${quest.location}
                        </p>
                    </div>

                </div>

                <div class="fan-detail-box">
                    <h3>İstenen Kaynaklar</h3>
                    ${createRequirementList(quest.requirements)}
                </div>

                <div class="fan-detail-box">
                    <h3>Kesilecek Yaratıklar</h3>
                    ${createCreatureList(quest.creatures)}
                </div>

                <div class="fan-detail-box">
                    <h3>Notlar</h3>
                    ${createNotes(quest.notes)}
                </div>
            </div>
        </article>
    `;
}

function renderFanQuests() {
    const searchValue = fanSearchInput.value.toLowerCase().trim();
    const levelValue = fanLevelFilter.value;
    const typeValue = fanTypeFilter.value;

    const filteredQuests = fanQuests.filter(function (quest) {
        const textMatch =
            quest.reputation.toLowerCase().includes(searchValue) ||
            quest.questName.toLowerCase().includes(searchValue) ||
            quest.shortInfo.toLowerCase().includes(searchValue);

        const levelMatch =
            levelValue === "all" ||
            String(quest.level) === levelValue;

        const typeMatch =
            typeValue === "all" ||
            quest.type === typeValue;

        return textMatch && levelMatch && typeMatch;
    });

    if (filteredQuests.length === 0) {
        fanQuestList.innerHTML = `
            <div class="fan-empty-result">
                Aramana uygun hayran görevi bulunamadı.
            </div>
        `;
        return;
    }

    fanQuestList.innerHTML = filteredQuests.map(createFanQuestItem).join("");

    bindFanQuestItems();
}

function bindFanQuestItems() {
    const questItems = document.querySelectorAll(".fan-quest-item");

    questItems.forEach(function (item) {
        const head = item.querySelector(".fan-quest-head");

        head.addEventListener("click", function () {
            item.classList.toggle("active");

            const actionText = item.querySelector(".fan-quest-meta strong");

            if (item.classList.contains("active")) {
                actionText.textContent = "Detay Kapat";
            } else {
                actionText.textContent = "Detay Aç";
            }
        });
    });
}

fanSearchInput.addEventListener("input", renderFanQuests);
fanLevelFilter.addEventListener("change", renderFanQuests);
fanTypeFilter.addEventListener("change", renderFanQuests);

fanResetBtn.addEventListener("click", function () {
    fanSearchInput.value = "";
    fanLevelFilter.value = "all";
    fanTypeFilter.value = "all";

    renderFanQuests();
});

renderFanQuests();