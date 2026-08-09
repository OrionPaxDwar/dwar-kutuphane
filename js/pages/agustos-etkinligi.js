const augustStepList = document.getElementById("augustStepList");
const augustDetailPanel = document.getElementById("augustDetailPanel");

let activeAugustStepId = augustEventSteps[0]?.id || null;

function createStepButton(step) {
    const activeClass = step.id === activeAugustStepId ? "active" : "";

    return `
        <button class="august-map-step ${activeClass}" data-step="${step.id}" type="button">
            <span>${step.order}</span>

            <div>
                <strong>${step.title}</strong>
                <em>${step.subtitle}</em>
            </div>
        </button>
    `;
}

function createCharacterCards(characters) {
    if (!characters || characters.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Karakterler ve Konumlar</h3>

            <div class="august-character-grid">
                ${characters.map(function (character) {
                    return `
                        <div class="august-character-card">
                            <img src="${character.image}" alt="${character.name}">

                            <div>
                                <span>${character.race}</span>
                                <strong>${character.name}</strong>
                                <em>${character.location}</em>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function createMainItem(mainItem) {
    if (!mainItem) {
        return "";
    }

    return `
        <section class="august-main-item-box">
            <img src="${mainItem.image}" alt="${mainItem.name}">

            <div>
                <span>Görev Nesnesi</span>
                <strong>${mainItem.name}</strong>
                <em>${mainItem.amount}</em>
                <p>${mainItem.text}</p>
            </div>
        </section>
    `;
}

function createMethods(methods) {
    if (!methods || methods.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Elde Etme / Bölge Bilgileri</h3>

            <div class="august-method-list">
                ${methods.map(function (method) {
                    return `
                        <div class="august-method-row">
                            <div class="august-method-number">${method.order || ""}</div>

                            ${
                                method.image
                                    ? `
                                        <div class="august-method-image">
                                            <img src="${method.image}" alt="${method.title}">
                                        </div>
                                    `
                                    : ""
                            }

                            <div class="august-method-content">
                                <strong>${method.title}</strong>
                                <p>${method.text || ""}</p>

                                ${
                                    method.locations && method.locations.length > 0
                                        ? `
                                            <div class="august-location-tags">
                                                ${method.locations.map(function (location) {
                                                    return `<span>${location}</span>`;
                                                }).join("")}
                                            </div>
                                        `
                                        : ""
                                }

                                ${
                                    method.characters && method.characters.length > 0
                                        ? `
                                            <div class="august-mini-character-list">
                                                ${method.characters.map(function (character) {
                                                    return `
                                                        <div class="august-mini-character">
                                                            <img src="${character.image}" alt="${character.name}">

                                                            <div>
                                                                <span>${character.race}</span>
                                                                <strong>${character.name}</strong>
                                                                <em>${character.location}</em>
                                                            </div>
                                                        </div>
                                                    `;
                                                }).join("")}
                                            </div>
                                        `
                                        : ""
                                }
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function createFeedingSteps(feedingSteps) {
    if (!feedingSteps || feedingSteps.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Besleme Aşamaları</h3>

            <div class="august-feeding-stage-list">
                ${feedingSteps.map(function (step) {
                    return `
                        <div class="august-feeding-stage">

                            <div class="august-feeding-stage-header">
                                <span class="august-feeding-stage-label">Aşama ${step.order}</span>
                                <h4>${step.title}</h4>
                            </div>

                            <p class="august-feeding-stage-text">${step.text || ""}</p>

                            ${
                                step.locations && step.locations.length > 0
                                    ? `
                                        <div class="august-region-grid">
                                            ${step.locations.map(function (item) {
                                                return `
                                                    <div class="august-region-card">
                                                        <span>${item.race}</span>
                                                        <strong>${item.location}</strong>
                                                    </div>
                                                `;
                                            }).join("")}
                                        </div>
                                    `
                                    : ""
                            }

                            ${
                                step.sourceItem && step.resultItem
                                    ? `
                                        <div class="august-big-flow">
                                            <div class="august-big-flow-card">
                                                <img src="${step.sourceItem.image}" alt="${step.sourceItem.name}">
                                                <strong>${step.sourceItem.name}</strong>
                                            </div>

                                            <div class="august-big-flow-symbol">→</div>

                                            <div class="august-big-flow-card">
                                                <img src="${step.resultItem.image}" alt="${step.resultItem.name}">
                                                <strong>${step.resultItem.name}</strong>
                                            </div>
                                        </div>
                                    `
                                    : ""
                            }

                            ${
                                step.from && step.material && step.result
                                    ? `
                                        <div class="august-big-flow">
                                            <div class="august-big-flow-card">
                                                <img src="${step.from.image}" alt="${step.from.name}">
                                                <strong>${step.from.name}</strong>
                                            </div>

                                            <div class="august-big-flow-symbol">+</div>

                                            <div class="august-big-flow-card">
                                                <img src="${step.material.image}" alt="${step.material.name}">
                                                <strong>${step.material.name}</strong>
                                            </div>

                                            <div class="august-big-flow-symbol">=</div>

                                            <div class="august-big-flow-card">
                                                <img src="${step.result.image}" alt="${step.result.name}">
                                                <strong>${step.result.name}</strong>
                                            </div>
                                        </div>
                                    `
                                    : ""
                            }

                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function createNextTarget(nextTarget) {
    if (!nextTarget) {
        return "";
    }

    const hasHumanTarget = nextTarget.targetHuman && nextTarget.targetHuman.trim() !== "";
    const hasMagronTarget = nextTarget.targetMagron && nextTarget.targetMagron.trim() !== "";

    return `
        <section class="august-next-target">
            <span>${nextTarget.title}</span>
            <p>${nextTarget.text}</p>

            ${
                hasHumanTarget || hasMagronTarget
                    ? `
                        <div class="august-next-tags">
                            ${
                                hasHumanTarget
                                    ? `<strong>İnsan: ${nextTarget.targetHuman}</strong>`
                                    : ""
                            }

                            ${
                                hasMagronTarget
                                    ? `<strong>Magron: ${nextTarget.targetMagron}</strong>`
                                    : ""
                            }
                        </div>
                    `
                    : ""
            }
        </section>
    `;
}

function renderAugustDetail(step) {
    if (!step) {
        augustDetailPanel.innerHTML = "";
        return;
    }

    augustDetailPanel.innerHTML = `
        <article class="august-quest-card">

            <header class="august-quest-header">
                <span>${step.type}</span>
                <h2>${step.title}</h2>
                <p>${step.summary}</p>
            </header>

            <section class="august-objective-card">
                <strong>Amaç</strong>
                <p>${step.objective}</p>
            </section>

            ${createMainItem(step.mainItem)}

            ${createCharacterCards(step.characters)}

            ${createMethods(step.methods)}

            ${createFeedingSteps(step.feedingSteps)}

            ${createNextTarget(step.nextTarget)}

        </article>
    `;
}

function renderAugustPage() {
    if (!augustStepList || !augustDetailPanel || typeof augustEventSteps === "undefined") {
        return;
    }

    augustStepList.innerHTML = augustEventSteps.map(createStepButton).join("");

    const activeStep = augustEventSteps.find(function (step) {
        return step.id === activeAugustStepId;
    });

    renderAugustDetail(activeStep);

    document.querySelectorAll(".august-map-step").forEach(function (button) {
        button.addEventListener("click", function () {
            activeAugustStepId = button.dataset.step;
            renderAugustPage();
        });
    });
}

renderAugustPage();