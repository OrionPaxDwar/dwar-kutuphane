const shopGrid = document.getElementById("shopGrid");
const backToShopHome = document.getElementById("backToShopHome");

const shopPopup = document.getElementById("shopPopup");
const shopPopupTitle = document.getElementById("shopPopupTitle");
const shopPopupContent = document.getElementById("shopPopupContent");
const shopPopupClose = document.getElementById("shopPopupClose");

/* ANA KATEGORİLER */

const shopCategories = [
    {
        id: "sezonluk-magazalar",
        title: "Sezonluk Mağazalar",
        tag: "12 Ay",
        description: "Ocak ayından Aralık ayına kadar dönemsel mağazalar.",
        image: "../assents/images/magazalar/sezonluk-magazalar.jpg",
        type: "category",
        target: "seasonal"
    },
    {
        id: "maraton-magazalari",
        title: "Maraton Mağazaları",
        tag: "4 Mevsim",
        description: "İlkbahar, yaz, sonbahar ve kış maraton mağazaları.",
        image: "../assents/images/magazalar/maraton-magazalari.jpg",
        type: "category",
        target: "marathon"
    },
    {
        id: "etkinlik-magazalari",
        title: "Etkinlik Mağazaları",
        tag: "Etkinlik",
        description: "Belirli etkinliklere bağlı açılan özel mağazalar.",
        image: "../assents/images/magazalar/etkinlik-magazalari.jpg",
        type: "category",
        target: "event"
    },
    {
        id: "ozel-magazalar",
        title: "Özel Mağazalar",
        tag: "Özel",
        description: "Görev, bölge veya özel şartlarla erişilen satıcılar.",
        image: "../assents/images/magazalar/ozel-magazalar.jpg",
        type: "category",
        target: "special"
    }
];

/* 12 AY MAĞAZALARI */

const monthlyShops = [
    {
        id: "ocak-magazasi",
        title: "Ocak Mağazası",
        tag: "Kış",
        description: "Ocak ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/ocak-magazasi.jpg",
        type: "shop"
    },
    {
        id: "subat-magazasi",
        title: "Şubat Mağazası",
        tag: "Kış",
        description: "Şubat ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/subat-magazasi.jpg",
        type: "shop"
    },
    {
        id: "mart-magazasi",
        title: "Mart Mağazası",
        tag: "İlkbahar",
        description: "Mart ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/mart-magazasi.jpg",
        type: "shop"
    },
    {
        id: "nisan-magazasi",
        title: "Nisan Mağazası",
        tag: "İlkbahar",
        description: "Nisan ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/nisan-magazasi.jpg",
        type: "shop"
    },
    {
        id: "mayis-magazasi",
        title: "Mayıs Mağazası",
        tag: "İlkbahar",
        description: "Mayıs ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/mayis-magazasi.jpg",
        type: "shop"
    },
    {
        id: "haziran-magazasi",
        title: "Haziran Mağazası",
        tag: "Yaz",
        description: "Haziran ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/haziran-magazasi.jpg",
        type: "shop"
    },
    {
        id: "temmuz-magazasi",
        title: "Temmuz Mağazası",
        tag: "Yaz",
        description: "Temmuz ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/temmuz-magazasi.jpg",
        type: "shop"
    },
    {
        id: "agustos-magazasi",
        title: "Ağustos Mağazası",
        tag: "Yaz",
        description: "Ağustos - Haydi Doğaya etkinliğinin Balık Kemikleri mağazası.",
        image: "../assents/images/magazalar/aylar/agustos-magazasi.jpg",
        type: "shop"
    },
    {
        id: "eylul-magazasi",
        title: "Eylül Mağazası",
        tag: "Sonbahar",
        description: "Eylül ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/eylul-magazasi.jpg",
        type: "shop"
    },
    {
        id: "ekim-magazasi",
        title: "Ekim Mağazası",
        tag: "Sonbahar",
        description: "Ekim ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/ekim-magazasi.jpg",
        type: "shop"
    },
    {
        id: "kasim-magazasi",
        title: "Kasım Mağazası",
        tag: "Sonbahar",
        description: "Kasım ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/kasim-magazasi.jpg",
        type: "shop"
    },
    {
        id: "aralik-magazasi",
        title: "Aralık Mağazası",
        tag: "Kış",
        description: "Aralık ayına özel sezonluk mağaza.",
        image: "../assents/images/magazalar/aylar/aralik-magazasi.jpg",
        type: "shop"
    }
];

/* MARATON MAĞAZALARI */

const marathonShops = [
    {
        id: "ilkbahar-maraton-magazasi",
        title: "İlkbahar Maraton Mağazası",
        tag: "Maraton",
        description: "İlkbahar dönemine özel maraton mağazası.",
        image: "../assents/images/magazalar/maraton/ilkbahar-maraton.jpg",
        type: "shop"
    },
    {
        id: "yaz-maraton-magazasi",
        title: "Yaz Maraton Mağazası",
        tag: "Maraton",
        description: "Yaz dönemine özel maraton mağazası.",
        image: "../assents/images/magazalar/maraton/yaz-maraton.jpg",
        type: "shop"
    },
    {
        id: "sonbahar-maraton-magazasi",
        title: "Sonbahar Maraton Mağazası",
        tag: "Maraton",
        description: "Sonbahar dönemine özel maraton mağazası.",
        image: "../assents/images/magazalar/maraton/sonbahar-maraton.jpg",
        type: "shop"
    },
    {
        id: "kis-maraton-magazasi",
        title: "Kış Maraton Mağazası",
        tag: "Maraton",
        description: "Kış dönemine özel maraton mağazası.",
        image: "../assents/images/magazalar/maraton/kis-maraton.jpg",
        type: "shop"
    }
];

/* ETKİNLİK VE ÖZEL */

const eventShops = [
    {
        id: "etkinlik-magazasi",
        title: "Etkinlik Mağazası",
        tag: "Bağlantılı",
        description: "Etkinlikler sayfasındaki etkinliklerle bağlanacak mağaza alanı.",
        image: "../assents/images/magazalar/etkinlik/etkinlik-magazasi.jpg",
        type: "shop"
    }
];

const specialShops = [
    {
        id: "ozel-saticilar",
        title: "Özel Satıcılar",
        tag: "Özel",
        description: "Görev, bölge veya şartla erişilen özel satıcılar.",
        image: "../assents/images/magazalar/ozel/ozel-saticilar.jpg",
        type: "shop"
    }
];

/* KART OLUŞTURMA */

function createShopCard(shop) {
    return `
        <article 
            class="shop-card" 
            data-id="${shop.id || ""}"
            data-type="${shop.type || "shop"}" 
            data-target="${shop.target || ""}" 
            data-title="${shop.title}"
        >
            <img src="${shop.image}" alt="${shop.title}">

            <div class="shop-card-content">
                <span class="shop-tag">${shop.tag}</span>

                <h2>${shop.title}</h2>

                <p>${shop.description}</p>
            </div>
        </article>
    `;
}

/* ANA SAYFA */

function renderShopHome() {
    shopGrid.innerHTML = shopCategories.map(createShopCard).join("");
    backToShopHome.classList.add("hidden");
    bindShopCards();
}

/* ALT LİSTE */

function renderShopList(list) {
    shopGrid.innerHTML = list.map(createShopCard).join("");
    backToShopHome.classList.remove("hidden");
    bindShopCards();
}

/* DETAY YOKSA */

function renderEmptyShopDetail(title) {
    shopPopupContent.innerHTML = `
        <p>
            <strong>${title}</strong> ürün listesi ve detayları sonradan eklenecek.
        </p>

        <h3>Planlanan İçerik</h3>

        <ul>
            <li>Satılan ürünler</li>
            <li>Gerekli para veya etkinlik kaynağı</li>
            <li>Alınması önerilen ürünler</li>
            <li>Gereksiz harcama uyarıları</li>
            <li>Bağlı olduğu etkinlik veya dönem</li>
        </ul>
    `;
}

/* DETAY VARSA */

function renderShopDetail(shop) {
    shopPopupContent.innerHTML = `
        <div class="shop-detail-page">

            <div class="shop-info-box">
                <h3>${shop.eventName || shop.title}</h3>

                ${shop.intro || ""}

                <div class="shop-meta-grid">
                    <div>
                        <span>Dönem</span>
                        <strong>${shop.period || "Bilgi yok"}</strong>
                    </div>

                    <div>
                        <span>Gerekli Seviye</span>
                        <strong>${shop.level || "Bilgi yok"}</strong>
                    </div>

                    <div>
                        <span>Para Birimi</span>
                        <strong>${shop.currencyName || "Bilgi yok"}</strong>
                    </div>
                </div>
            </div>

            <div class="shop-reward-header">
                <h3>Ödüller</h3>

                <p>
                    Gereken miktarlar 
                    <strong>${shop.currencyName || "etkinlik kaynağı"}</strong> 
                    üzerinden verilmiştir.
                </p>
            </div>

            <div class="shop-reward-grid">
                ${(shop.rewards || []).map(function (reward) {
                    return `
                        <div class="shop-reward-card">
                            <div class="reward-image-wrap">
                                <img src="${reward.image}" alt="${reward.name}">
                            </div>

                            <div class="reward-info">
                                <h4>${reward.name}</h4>

                                <div class="reward-cost">
                                    <span>Gereken</span>
                                    <strong>${reward.cost}</strong>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>

            <div class="shop-note-box">
                <h3>Notlar</h3>

                <ul>
                    ${(shop.notes || []).map(function (note) {
                        return `<li>${note}</li>`;
                    }).join("")}
                </ul>
            </div>

        </div>
    `;
}

/* POPUP */

function openShopPopup(id, title) {
    shopPopupTitle.textContent = title;

    console.log("TIKLANAN ID:", id);
    console.log("TIKLANAN BAŞLIK:", title);
    console.log("YÜKLÜ SHOP DETAILS:", window.shopDetails);

    const shop = window.shopDetails && window.shopDetails[id];

    if (!shop) {
        shopPopupContent.innerHTML = `
            <p>
                <strong>${title}</strong> ürün listesi ve detayları sonradan eklenecek.
            </p>

            <h3>HATA KONTROL</h3>

            <ul>
                <li>Aranan ID: <strong>${id}</strong></li>
                <li>Data dosyası yüklendi mi: <strong>${window.shopDetails ? "Evet" : "Hayır"}</strong></li>
                <li>Bu ID data içinde var mı: <strong>${window.shopDetails && window.shopDetails[id] ? "Evet" : "Hayır"}</strong></li>
            </ul>
        `;

        shopPopup.classList.add("active");
        return;
    }

    shopPopupContent.innerHTML = `
        <div class="shop-detail-page">

            <div class="shop-info-box">
                <h3>${shop.eventName || shop.title}</h3>

                ${shop.intro || ""}

                <div class="shop-meta-grid">
                    <div>
                        <span>Dönem</span>
                        <strong>${shop.period || "Bilgi yok"}</strong>
                    </div>

                    <div>
                        <span>Gerekli Seviye</span>
                        <strong>${shop.level || "Bilgi yok"}</strong>
                    </div>

                    <div>
                        <span>Para Birimi</span>
                        <strong>${shop.currencyName || "Bilgi yok"}</strong>
                    </div>
                </div>
            </div>

            <div class="shop-reward-header">
                <h3>Ödüller</h3>

                <p>
                    Gereken miktarlar 
                    <strong>${shop.currencyName || "etkinlik kaynağı"}</strong> 
                    üzerinden verilmiştir.
                </p>
            </div>

            <div class="shop-reward-grid">
                ${(shop.rewards || []).map(function (reward) {
                    return `
                        <div class="shop-reward-card">
                            <div class="reward-image-wrap">
                                <img src="${reward.image}" alt="${reward.name}">
                            </div>

                            <div class="reward-info">
                                <h4>${reward.name}</h4>

                                <div class="reward-cost">
                                    <span>Gereken</span>
                                    <strong>${reward.cost}</strong>
                                </div>
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>

            <div class="shop-note-box">
                <h3>Notlar</h3>

                <ul>
                    ${(shop.notes || []).map(function (note) {
                        return `<li>${note}</li>`;
                    }).join("")}
                </ul>
            </div>

        </div>
    `;

    shopPopup.classList.add("active");
}

/* TIKLAMA */

function bindShopCards() {
    document.querySelectorAll(".shop-card").forEach(function (card) {
        card.addEventListener("click", function () {
            const id = card.getAttribute("data-id");
            const type = card.getAttribute("data-type");
            const target = card.getAttribute("data-target");
            const title = card.getAttribute("data-title");

            if (type === "category") {
                if (target === "seasonal") {
                    renderShopList(monthlyShops);
                }

                if (target === "marathon") {
                    renderShopList(marathonShops);
                }

                if (target === "event") {
                    renderShopList(eventShops);
                }

                if (target === "special") {
                    renderShopList(specialShops);
                }

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                return;
            }

            openShopPopup(id, title);
        });
    });
}

/* GERİ DÖN */

if (backToShopHome) {
    backToShopHome.addEventListener("click", function () {
        renderShopHome();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* POPUP KAPAT */

if (shopPopupClose) {
    shopPopupClose.addEventListener("click", function () {
        shopPopup.classList.remove("active");
    });
}

if (shopPopup) {
    shopPopup.addEventListener("click", function (event) {
        if (event.target === shopPopup) {
            shopPopup.classList.remove("active");
        }
    });
}

/* BAŞLAT */

renderShopHome();