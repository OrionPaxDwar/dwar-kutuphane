const specialShopRoot = document.getElementById("specialShopRoot");

function createSpecialRewardRow(reward, shop) {
    return `
        <article class="armor-shop-item">
            <div class="armor-shop-image">
                <img src="${reward.image}" alt="${reward.name}">
            </div>

            <div class="armor-shop-info">
                <h3>${reward.name}</h3>

                <p>${reward.description}</p>
            </div>

            <div class="armor-shop-cost">
                <img src="${shop.currencyImage}" alt="${shop.currencyName}">
                <strong>${reward.cost}</strong>
                <span>Adet</span>
            </div>
        </article>
    `;
}

function createSpecialRewardGroups(shop) {
    return `
        <div class="armor-shop-groups">
            ${shop.groups.map(function (group) {
                return `
                    <section class="armor-shop-group">
                        <div class="armor-shop-group-header">
                            <div>
                                <h2>${group.title}</h2>
                                <p>${group.description}</p>
                            </div>
                        </div>

                        <div class="armor-shop-list">
                            ${group.rewards.map(function (reward) {
                                return createSpecialRewardRow(reward, shop);
                            }).join("")}
                        </div>
                    </section>
                `;
            }).join("")}
        </div>
    `;
}

function renderSpecialShop() {
    if (!specialShopRoot || typeof specialShops === "undefined" || typeof currentSpecialShopId === "undefined") return;

    const shop = specialShops[currentSpecialShopId];

    if (!shop) {
        specialShopRoot.innerHTML = `
            <section class="info-box">
                <h3>Mağaza bulunamadı</h3>
                <p>Bu özel mağaza verisi henüz eklenmemiş.</p>
            </section>
        `;
        return;
    }

    document.title = shop.title + " - Dwar Kütüphane";

    specialShopRoot.innerHTML = `
        <section class="shop-detail-hero armor-shop-hero">

            <div class="shop-detail-cover">
                <img src="${shop.cover}" alt="${shop.title}">
            </div>

            <div class="shop-detail-intro">
                <span class="shop-detail-tag">Özel Mağaza</span>

                <h1>${shop.title}</h1>

                <h2>${shop.eventName}</h2>

                <p>${shop.intro}</p>

                <div class="shop-meta-grid">
                    <div>
                        <span>Konum</span>
                        <strong>${shop.location}</strong>
                    </div>

                    <div>
                        <span>Seviye</span>
                        <strong>${shop.level}</strong>
                    </div>

                    <div>
                        <span>Para Birimi</span>
                        <strong>${shop.currencyName}</strong>
                    </div>
                </div>
            </div>

        </section>

        <section class="info-box armor-shop-notes">
            <h3>Mağaza Notları</h3>

            <ul>
                ${shop.notes.map(function (note) {
                    return `<li>${note}</li>`;
                }).join("")}
            </ul>
        </section>

        <section class="shop-rewards-section armor-shop-section">

            <div class="section-title">
                <h2>Ödül Listesi</h2>

                <p>
                    Zırh Mağazası ödülleri <strong>${shop.currencyName}</strong> karşılığında alınır.
                </p>
            </div>

            ${createSpecialRewardGroups(shop)}

        </section>
    `;
}

renderSpecialShop();