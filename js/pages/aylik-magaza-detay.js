const shopRoot = document.getElementById("monthlyShopRoot");

let activeShop = null;

function createRewardContents(contents) {
    if (!contents || contents.length === 0) {
        return `
            <div class="reward-modal-empty">
                Bu ödülün içerik detayı sonradan eklenecek.
            </div>
        `;
    }

    return `
        <div class="reward-modal-content-list">
            ${contents.map(function (item) {
                return `
                    <div class="reward-modal-content-item">
                        <img src="${item.image}" alt="${item.name}">

                        <div>
                            <strong>${item.name}</strong>
                            <span>${item.amount}</span>

                            ${
                                item.description
                                    ? `<p>${item.description}</p>`
                                    : ""
                            }
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function createRewardCard(reward, index, shop) {
    return `
        <button class="reward-card reward-click-card" data-reward-index="${index}" type="button">
            <div class="reward-image-wrap">
                <img src="${reward.image}" alt="${reward.name}">
            </div>

            <div class="reward-info">
                <h3>${reward.name}</h3>

                <div class="reward-cost">
                    <img src="${shop.currencyImage}" alt="${shop.currencyName}">
                    <strong>${reward.cost}</strong>
                    <span>${shop.currencyName}</span>
                </div>

                <div class="reward-open-hint">
                    Detayı Gör
                </div>
            </div>
        </button>
    `;
}

function createRewardModal() {
    return `
        <div class="reward-modal" id="rewardModal">
            <div class="reward-modal-overlay" id="closeRewardOverlay"></div>

            <div class="reward-modal-box">
                <button class="reward-modal-close" id="closeRewardModal" type="button">
                    ×
                </button>

                <div id="rewardModalContent"></div>
            </div>
        </div>
    `;
}

function openRewardModal(reward, shop) {
    const modal = document.getElementById("rewardModal");
    const modalContent = document.getElementById("rewardModalContent");

    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <div class="reward-modal-main">
            <div class="reward-modal-image">
                <img src="${reward.image}" alt="${reward.name}">
            </div>

            <div class="reward-modal-info">
                <span class="reward-modal-tag">Mağaza Ödülü</span>

                <h2>${reward.name}</h2>

                <p>${reward.description}</p>

                <div class="reward-modal-cost">
                    <img src="${shop.currencyImage}" alt="${shop.currencyName}">
                    <strong>${reward.cost}</strong>
                    <span>${shop.currencyName}</span>
                </div>
            </div>
        </div>

        <div class="reward-modal-section">
            <h3>Ödül İçeriği</h3>
            ${createRewardContents(reward.contents)}
        </div>
    `;

    modal.classList.add("active");
}

function closeRewardModal() {
    const modal = document.getElementById("rewardModal");

    if (!modal) return;

    modal.classList.remove("active");
}

function bindRewardCards(shop) {
    const rewardCards = document.querySelectorAll(".reward-click-card");

    rewardCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const rewardIndex = Number(card.getAttribute("data-reward-index"));
            const reward = shop.rewards[rewardIndex];

            openRewardModal(reward, shop);
        });
    });

    const closeBtn = document.getElementById("closeRewardModal");
    const closeOverlay = document.getElementById("closeRewardOverlay");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeRewardModal);
    }

    if (closeOverlay) {
        closeOverlay.addEventListener("click", closeRewardModal);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeRewardModal();
        }
    });
}

function renderMonthlyShop() {
    if (!shopRoot || typeof seasonalShops === "undefined" || typeof currentShopId === "undefined") return;

    const shop = seasonalShops[currentShopId];
    activeShop = shop;

    if (!shop) {
        shopRoot.innerHTML = `
            <section class="info-box">
                <h3>Mağaza bulunamadı</h3>
                <p>Bu ay için mağaza verisi henüz eklenmemiş.</p>
            </section>
        `;
        return;
    }

    document.title = shop.title + " - Dwar Kütüphane";

    shopRoot.innerHTML = `
        <section class="shop-detail-hero">

            <div class="shop-detail-cover">
                <img src="${shop.cover}" alt="${shop.title}">
            </div>

            <div class="shop-detail-intro">
                <span class="shop-detail-tag">Sezonluk Mağaza</span>

                <h1>${shop.title}</h1>

                <h2>${shop.eventName}</h2>

                <p>${shop.intro}</p>

                <div class="shop-meta-grid">
                    <div>
                        <span>Etkinlik Dönemi</span>
                        <strong>${shop.period}</strong>
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

        <section class="info-box">
            <h3>Mağaza Notları</h3>

            <ul>
                ${shop.notes.map(function (note) {
                    return `<li>${note}</li>`;
                }).join("")}
            </ul>
        </section>

        <section class="shop-rewards-section">

            <div class="section-title">
                <h2>Ödül Listesi</h2>

                <p>
                    Ödüller <strong>${shop.currencyName}</strong> karşılığında alınır.
                    Detay için ödülün üzerine tıkla.
                </p>
            </div>

            <div class="reward-grid">
                ${shop.rewards.map(function (reward, index) {
                    return createRewardCard(reward, index, shop);
                }).join("")}
            </div>

        </section>

        ${createRewardModal()}
    `;

    bindRewardCards(shop);
}

renderMonthlyShop();