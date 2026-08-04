const dwarfStoneList = document.getElementById("dwarfStoneList");
const dwarfDetailPanel = document.getElementById("dwarfDetailPanel");

let activeDwarfStoneId = dwarfStones[0]?.id || null;

function createDwarfStoneButton(stone) {
    const activeClass = stone.id === activeDwarfStoneId ? "active" : "";

    return `
        <button class="dwarf-stone-card dwarf-${stone.color} ${activeClass}" data-id="${stone.id}" type="button">
            <img src="${stone.stoneImage}" alt="${stone.name}">

            <div>
                <strong>${stone.name}</strong>
                <span>${stone.level}</span>
            </div>
        </button>
    `;
}

function createDwarfStoneGroups() {
    const firstLine = dwarfStones.filter(function (stone) {
        return stone.family === "Birinci Hat";
    });

    const secondLine = dwarfStones.filter(function (stone) {
        return stone.family === "İkinci Hat";
    });

    return `
        <div class="dwarf-line-group">
            <h3>Birinci Hat</h3>
            ${firstLine.map(createDwarfStoneButton).join("")}
        </div>

        <div class="dwarf-line-group">
            <h3>İkinci Hat</h3>
            ${secondLine.map(createDwarfStoneButton).join("")}
        </div>
    `;
}

function createItemCard(item) {
    return `
        <div class="dwarf-item-card">
            <img src="${item.image}" alt="${item.name}">

            <div>
                <strong>${item.name}</strong>
                <span>${item.amount}</span>
            </div>
        </div>
    `;
}

function createRewardList(rewards) {
    if (!rewards || rewards.length === 0) {
        return `
            <div class="dwarf-empty-box">
                Ödül bilgisi eklenecek.
            </div>
        `;
    }

    return `
        <div class="dwarf-reward-grid">
            ${rewards.map(createItemCard).join("")}
        </div>
    `;
}

function createRecipe(recipe) {
    if (!recipe) {
        return "";
    }

    return `
        <div class="dwarf-recipe-card">
            <h3>${recipe.title}</h3>

            <p>${recipe.text}</p>

            <div class="dwarf-recipe-items">
                ${recipe.items.map(function (item, index) {
                    const isLast = index === recipe.items.length - 1;

                    return `
                        ${createItemCard(item)}

                        ${
                            !isLast
                                ? `<b>${index === recipe.items.length - 2 ? "=" : "+"}</b>`
                                : ""
                        }
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function createEncounterBox(encounter) {
    if (!encounter) {
        return "";
    }

    return `
        <section class="dwarf-detail-section">
            <h3>${encounter.title || "Taşı Açarken Gelen Yaratıklar"}</h3>

            <div class="dwarf-encounter-box">
                <p>${encounter.text}</p>

                ${
                    encounter.enemies && encounter.enemies.length > 0
                        ? `
                            <div class="dwarf-enemy-grid">
                                ${encounter.enemies.map(function (enemy) {
                                    return `
                                        <div class="dwarf-enemy-card">
                                            <img src="${enemy.image}" alt="${enemy.name}">

                                            <div>
                                                <strong>${enemy.name}</strong>
                                                <span>Seviye: ${enemy.level}</span>
                                                <span>Can: ${enemy.hp}</span>
                                                <em>${enemy.note}</em>
                                            </div>
                                        </div>
                                    `;
                                }).join("")}
                            </div>
                        `
                        : `
                            <div class="dwarf-empty-box">
                                Bu taşta yaratık saldırısı yok.
                            </div>
                        `
                }
            </div>
        </section>
    `;
}

function renderDwarfDetail(stone) {
    if (!stone) {
        dwarfDetailPanel.innerHTML = "";
        return;
    }

    dwarfDetailPanel.innerHTML = `
        <article class="dwarf-detail-card dwarf-detail-${stone.color}">

            <header class="dwarf-detail-header">
                <div class="dwarf-detail-main-image">
                    <img src="${stone.stoneImage}" alt="${stone.name}">
                </div>

                <div>
                    <span>${stone.level} · ${stone.family}</span>
                    <h2>${stone.name}</h2>
                    <p>${stone.description}</p>
                </div>
            </header>

            <section class="dwarf-flow-box">
                <div>
                    <strong>Taş</strong>
                    <img src="${stone.stoneImage}" alt="${stone.name}">
                    <span>${stone.name}</span>
                </div>

                <b>+</b>

                <div>
                    <strong>Cıva</strong>
                    <img src="${dwarfResourcePath}civa.png" alt="Cıva">
                    <span>${stone.mercury}</span>
                </div>

                <b>=</b>

                <div>
                    <strong>Kutu</strong>
                    <img src="${stone.boxImage}" alt="${stone.boxName}">
                    <span>${stone.boxName}</span>
                </div>
            </section>

            <section class="dwarf-region-grid">
                <div class="dwarf-region-card magmar">
                    <span>Magi Bölgesi</span>
                    <strong>${stone.magmarRegion}</strong>
                </div>

                <div class="dwarf-region-card human">
                    <span>İnsan Bölgesi</span>
                    <strong>${stone.humanRegion}</strong>
                </div>
            </section>

            ${createEncounterBox(stone.encounter)}

            <section class="dwarf-detail-section">
                <h3>Elt Zarı Tarifleri</h3>

                <div class="dwarf-recipe-grid">
                    ${createRecipe(stone.upgrade)}
                    ${createRecipe(stone.downgrade)}
                </div>
            </section>

            <section class="dwarf-detail-section">
                <h3>Kutudan Çıkabilecek Ödüller</h3>

                ${createRewardList(stone.rewards)}
            </section>

            <section class="dwarf-trade-card">
                <h3>Zanaatçılar Birliği Takası</h3>
                <p>${stone.trade}</p>
            </section>

        </article>
    `;
}

function renderDwarfPage() {
    if (!dwarfStoneList || !dwarfDetailPanel || typeof dwarfStones === "undefined") {
        return;
    }

    dwarfStoneList.innerHTML = createDwarfStoneGroups();

    const activeStone = dwarfStones.find(function (stone) {
        return stone.id === activeDwarfStoneId;
    });

    renderDwarfDetail(activeStone);

    document.querySelectorAll(".dwarf-stone-card").forEach(function (button) {
        button.addEventListener("click", function () {
            activeDwarfStoneId = button.getAttribute("data-id");
            renderDwarfPage();
        });
    });
}

renderDwarfPage();