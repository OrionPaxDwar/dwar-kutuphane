const natureStepList = document.getElementById("natureStepList");
const natureDetailPanel = document.getElementById("natureDetailPanel");

let activeNatureStepId = null;

function createNatureStepButton(step) {
    const activeClass = step.id === activeNatureStepId ? "active" : "";

    return `
        <button class="nature-step-btn ${activeClass}" data-step="${step.id}" type="button">
            <span>${step.order}</span>

            <div>
                <strong>${step.title}</strong>
                <em>${step.subtitle}</em>
            </div>
        </button>
    `;
}

function createNatureMainItem(mainItem) {
    if (!mainItem) {
        return "";
    }

    return `
        <section class="nature-main-item">
            <img src="${mainItem.image}" alt="${mainItem.name}">

            <div>
                <span>Ana Etkinlik Kaynağı</span>
                <strong>${mainItem.name}</strong>
                <em>${mainItem.amount}</em>
                <p>${mainItem.text}</p>
            </div>
        </section>
    `;
}

function createNpcPair(humanNpc, magronNpc) {
    return `
        <div class="nature-npc-pair">
            <div class="nature-npc-card">
                <img src="${humanNpc.image}" alt="${humanNpc.name}">
                <div>
                    <span>${humanNpc.race}</span>
                    <strong>${humanNpc.name}</strong>
                    <em>${humanNpc.location}</em>
                </div>
            </div>

            <div class="nature-npc-card">
                <img src="${magronNpc.image}" alt="${magronNpc.name}">
                <div>
                    <span>${magronNpc.race}</span>
                    <strong>${magronNpc.name}</strong>
                    <em>${magronNpc.location}</em>
                </div>
            </div>
        </div>
    `;
}

function createResourceList(resources) {
    if (!resources || resources.length === 0) {
        return `
            <div class="nature-empty-box">
                Kaynaklar netleşince eklenecek.
            </div>
        `;
    }

    return `
        <div class="nature-resource-grid">
            ${resources.map(function (resource) {
                return `
                    <div class="nature-resource-card">
                        <img src="${resource.image}" alt="${resource.name}">
                        <strong>${resource.name}</strong>
                        <span>${resource.amount}</span>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function createRewardBox(reward, label) {
    if (!reward) {
        return "";
    }

    return `
        <div class="nature-reward-box">
            <span>${label}</span>
            <img src="${reward.image}" alt="${reward.name}">
            <strong>${reward.amount}</strong>
            <em>${reward.name}</em>
        </div>
    `;
}

function createProfessionExchange(exchange) {
    if (!exchange) {
        return "";
    }

    return `
        <section class="nature-section">
            <div class="nature-section-header">
                <h3>${exchange.title}</h3>

                <div class="nature-badges">
                    <span>${exchange.repeat}</span>
                    <span>${exchange.duration}</span>
                    <span>${exchange.reward.amount} Jeton</span>
                </div>
            </div>

            <div class="nature-profession-list">
                ${exchange.professions.map(function (profession) {
                    return `
                        <article class="nature-profession-card">
                            <div class="nature-profession-title">
                                <span>${profession.title}</span>
                                <p>${profession.description}</p>
                            </div>

                            ${createNpcPair(profession.humanNpc, profession.magronNpc)}

                            <div class="nature-profession-bottom">
                                <div>
                                    <h4>İstenen Kaynaklar</h4>
                                    ${createResourceList(profession.resources)}
                                </div>

                                ${createRewardBox(exchange.reward, "Takas Ödülü")}
                            </div>
                        </article>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function createWoodTask(woodTask) {
    if (!woodTask) {
        return "";
    }

    return `
        <section class="nature-section">
            <div class="nature-section-header">
                <h3>${woodTask.title}</h3>

                <div class="nature-badges">
                    <span>${woodTask.repeat}</span>
                    <span>${woodTask.reward.amount} Jeton</span>
                </div>
            </div>

            <article class="nature-wood-card">
                <p>${woodTask.description}</p>

                ${createNpcPair(woodTask.humanNpc, woodTask.magronNpc)}

                <div class="nature-wood-flow">
                    <div class="nature-resource-card large">
                        <img src="${woodTask.target.image}" alt="${woodTask.target.name}">
                        <strong>${woodTask.target.name}</strong>
                        <span>${woodTask.target.amount}</span>
                    </div>

                    <div class="nature-flow-arrow">→</div>

                    ${createRewardBox(woodTask.reward, "Görev Ödülü")}
                </div>
            </article>
        </section>
    `;
}

function createNatureNotes(notes) {
    if (!notes || notes.length === 0) {
        return "";
    }

    return `
        <section class="nature-section">
            <h3>Notlar</h3>

            <div class="nature-note-list">
                ${notes.map(function (note) {
                    return `<p>${note}</p>`;
                }).join("")}
            </div>
        </section>
    `;
}

function renderNatureDetail(step) {
    if (!step || !natureDetailPanel) {
        return;
    }

    natureDetailPanel.innerHTML = `
        <article class="nature-detail-card">
            <header class="nature-detail-header">
                <span>${step.type}</span>
                <h2>${step.title}</h2>
                <p>${step.summary}</p>
            </header>

            <section class="nature-objective-card">
                <strong>Amaç</strong>
                <p>${step.objective}</p>
            </section>

            ${createNatureMainItem(step.mainItem)}

            ${createProfessionExchange(step.professionExchange)}

            ${createWoodTask(step.woodTask)}

            ${createNatureNotes(step.notes)}
        </article>
    `;
}

function renderNaturePage() {
    if (!natureStepList || !natureDetailPanel) {
        return;
    }

    if (typeof natureEventSteps === "undefined" || !Array.isArray(natureEventSteps) || natureEventSteps.length === 0) {
        natureStepList.innerHTML = "";
        natureDetailPanel.innerHTML = "";
        return;
    }

    if (!activeNatureStepId) {
        activeNatureStepId = natureEventSteps[0].id;
    }

    natureStepList.innerHTML = natureEventSteps.map(createNatureStepButton).join("");

    const activeStep = natureEventSteps.find(function (step) {
        return step.id === activeNatureStepId;
    }) || natureEventSteps[0];

    renderNatureDetail(activeStep);

    document.querySelectorAll(".nature-step-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            activeNatureStepId = button.dataset.step;
            renderNaturePage();
        });
    });
}

renderNaturePage();