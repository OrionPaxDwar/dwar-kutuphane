const augustStepList = document.getElementById("augustStepList");
const augustDetailPanel = document.getElementById("augustDetailPanel");

let activeAugustStepId = null;

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

function createFanusSteps(fanusSteps) {
    if (!fanusSteps || fanusSteps.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Elmas Fanus Aşamaları</h3>

            <div class="august-fanus-step-list">
                ${fanusSteps.map(function (step) {
                    return `
                        <div class="august-fanus-step-card">
                            <div class="august-fanus-step-header">
                                <span>Aşama ${step.order}</span>
                                <h4>${step.title}</h4>
                            </div>

                            <p>${step.text || ""}</p>

                            ${
                                step.locations && step.locations.length > 0
                                    ? `
                                        <div class="august-jeweler-grid">
                                            ${step.locations.map(function (item) {
                                                return `
                                                    <div class="august-jeweler-card">
                                                        <img src="${item.image}" alt="${item.npc}">
                                                        <div>
                                                            <span>${item.race}</span>
                                                            <strong>${item.npc}</strong>
                                                            <em>${item.location}</em>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join("")}
                                        </div>
                                    `
                                    : ""
                            }

                            ${
                                step.choices && step.choices.length > 0
                                    ? `
                                        <div class="august-choice-area">
                                            <div class="august-choice-title">Birini Teslim Et</div>

                                            <div class="august-choice-grid">
                                                ${step.choices.map(function (choice, index) {
                                                    return `
                                                        <div class="august-choice-card">
                                                            <img src="${choice.image}" alt="${choice.name}">
                                                            <strong>${choice.name}</strong>
                                                            <span>${choice.amount}</span>
                                                        </div>

                                                        ${
                                                            index < step.choices.length - 1
                                                                ? `<div class="august-choice-or">veya</div>`
                                                                : ""
                                                        }
                                                    `;
                                                }).join("")}
                                            </div>

                                            ${
                                                step.resultItem
                                                    ? `
                                                        <div class="august-choice-result">
                                                            <div class="august-big-flow-symbol">→</div>

                                                            <div class="august-big-flow-card">
                                                                <img src="${step.resultItem.image}" alt="${step.resultItem.name}">
                                                                <strong>${step.resultItem.name}</strong>
                                                            </div>
                                                        </div>
                                                    `
                                                    : ""
                                            }
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

function createBoneSources(boneSources) {
    if (!boneSources || boneSources.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Balık Kemikleri Elde Etme</h3>

            <div class="august-bone-source-list">
                ${boneSources.map(function (source) {
                    return `
                        <div class="august-bone-source-card">
                            <div class="august-bone-source-header">
                                <span>Aşama ${source.order}</span>
                                <h4>${source.title}</h4>
                            </div>

                            <p>${source.text || ""}</p>

                            ${
                                source.type === "exchange" && source.exchanges
                                    ? `
                                        <div class="august-exchange-table">
                                            ${source.exchanges.map(function (exchange) {
                                                return `
                                                    <div class="august-exchange-row">
                                                        <div class="august-exchange-item">
                                                            <img src="${exchange.giveImage}" alt="${exchange.giveName}">
                                                            <strong>${exchange.giveAmount}</strong>
                                                            <span>${exchange.giveName}</span>
                                                        </div>

                                                        <div class="august-exchange-arrow">→</div>

                                                        <div class="august-exchange-item">
                                                            <img src="${exchange.takeImage}" alt="${exchange.takeName}">
                                                            <strong>${exchange.takeAmount}</strong>
                                                            <span>${exchange.takeName}</span>
                                                        </div>
                                                    </div>
                                                `;
                                            }).join("")}
                                        </div>
                                    `
                                    : ""
                            }

                            ${
                                source.type === "source" && source.sourceItem && source.resultItem
                                    ? `
                                        <div class="august-bone-flow">
                                            <div class="august-bone-flow-item">
                                                <img src="${source.sourceItem.image}" alt="${source.sourceItem.name}">
                                                <strong>${source.sourceItem.amount}</strong>
                                                <span>${source.sourceItem.name}</span>
                                            </div>

                                            <div class="august-bone-flow-arrow">→</div>

                                            <div class="august-bone-flow-item">
                                                <img src="${source.resultItem.image}" alt="${source.resultItem.name}">
                                                <strong>${source.resultItem.amount}</strong>
                                                <span>${source.resultItem.name}</span>
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

function createRewardGroups(rewardGroups) {
    if (!rewardGroups || rewardGroups.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Fuar Ödülleri</h3>

            <div class="august-reward-group-list">
                ${rewardGroups.map(function (group) {
                    return `
                        <div class="august-reward-group">
                            <div class="august-reward-group-header">
                                <h4>${group.title}</h4>
                                <p>${group.description || ""}</p>
                            </div>

                            <div class="august-reward-grid">
                                ${group.rewards.map(function (reward) {
                                    return `
                                        <div class="august-reward-card">
                                            <img class="august-reward-image" src="${reward.image}" alt="${reward.name}">

                                            <strong>${reward.name}</strong>

                                            <div class="august-reward-cost">
                                                <img src="${reward.currencyImage}" alt="Balık Kemikleri">
                                                <span>${reward.cost}</span>
                                            </div>

                                            ${
                                                reward.contents && reward.contents.length > 0
                                                    ? `
                                                        <button class="august-reward-content-btn" type="button">
                                                            İçerikleri Gör
                                                        </button>

                                                        <div class="august-reward-contents">
                                                            ${reward.contents.map(function (content) {
                                                                return `
                                                                    <div class="august-reward-content-item">
                                                                        <img src="${content.image}" alt="${content.name}">
                                                                        <div>
                                                                            <strong>${content.name}</strong>
                                                                            <span>${content.amount}</span>
                                                                        </div>
                                                                    </div>
                                                                `;
                                                            }).join("")}
                                                        </div>
                                                    `
                                                    : ""
                                            }
                                        </div>
                                    `;
                                }).join("")}
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
    `;
}

function createNotes(notes) {
    if (!notes || notes.length === 0) {
        return "";
    }

    return `
        <section class="august-section">
            <h3>Notlar</h3>

            <div class="august-note-list">
                ${notes.map(function (note) {
                    return `<p>${note}</p>`;
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

function setupRewardContentButtons() {
    if (!augustDetailPanel) {
        return;
    }

    augustDetailPanel.querySelectorAll(".august-reward-content-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            const contentBox = button.nextElementSibling;

            if (!contentBox || !contentBox.classList.contains("august-reward-contents")) {
                return;
            }

            contentBox.classList.toggle("active");
            button.textContent = contentBox.classList.contains("active")
                ? "İçerikleri Gizle"
                : "İçerikleri Gör";
        });
    });
}

function renderAugustDetail(step) {
    if (!step || !augustDetailPanel) {
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

            ${createFanusSteps(step.fanusSteps)}

            ${createBoneSources(step.boneSources)}

            ${createRewardGroups(step.rewardGroups)}

            ${createNotes(step.notes)}

            ${createNextTarget(step.nextTarget)}

        </article>
    `;

    setupRewardContentButtons();
}

function renderAugustPage() {
    if (!augustStepList || !augustDetailPanel) {
        return;
    }

    if (typeof augustEventSteps === "undefined" || !Array.isArray(augustEventSteps) || augustEventSteps.length === 0) {
        augustStepList.innerHTML = "";
        augustDetailPanel.innerHTML = "";
        return;
    }

    if (!activeAugustStepId) {
        activeAugustStepId = augustEventSteps[0].id;
    }

    augustStepList.innerHTML = augustEventSteps.map(createStepButton).join("");

    const activeStep = augustEventSteps.find(function (step) {
        return step.id === activeAugustStepId;
    }) || augustEventSteps[0];

    renderAugustDetail(activeStep);

    document.querySelectorAll(".august-map-step").forEach(function (button) {
        button.addEventListener("click", function () {
            activeAugustStepId = button.dataset.step;
            renderAugustPage();
        });
    });
}

renderAugustPage();