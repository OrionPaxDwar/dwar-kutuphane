const creatures = [
    {
        id: 1,
        name: "Deli Köpek",
        level: 1,
        hp: 71,
        damage: "4 - 7",
        money: "3 - 25",
        locations: [
            "De'Larisa Şehir Meydanı",
            "Barmila Vilayeti",
            "Sartnog Şehir Meydanı",
            "Favnir Vilayeti"
        ],
        image: "assents/images/creatures/deli-kopek.jpg",
        rewards: [
            {
                group: "İksirler",
                items: [
                    "Küçük Dev İksiri",
                    "Küçük Hayat İksiri",
                    "Küçük Güç İksiri"
                ]
            },
            {
                group: "Diğer Nesneler",
                items: [
                    "İçgörü armağanı",
                    "Servet Armağanı",
                    "Tutumluluk Armağanı",
                    "Uyanıklık Armağanı",
                    "Ticari mallar",
                    "Gerçeklik Kristalleri",
                    "Altın Pul",
                    "Hasat Sembolü"
                ]
            },
            {
                group: "Silah ve Zırhlar",
                items: [
                    "Kalkan",
                    "Deri Üst Dizlikler",
                    "Topuz",
                    "Deri Ceket"
                ]
            },
            {
                group: "Sandık ve Çantalar",
                items: [
                    "Kapalı Gümüş Kutu",
                    "Kapalı Altın Kutu",
                    "Kapalı Bronz Kutu",
                    "Kapalı Metal Kutu",
                    "Kapalı Altın Hazine Kutu",
                    "Kapalı Gümüş Hazine Kutu"
                ]
            },
            {
                group: "Kaynaklar",
                items: [
                    "Baskı Işık Parçası",
                    "Yansıtma Işık Parçası",
                    "Etki Işık Parçası",
                    "İrade Hava Parçası",
                    "Bilgelik Hava Parçası"
                ]
            },
            {
                group: "Madeni Para",
                items: [
                    "Lagmur Bronz Madeni Para",
                    "Krion Zorbu Bronz Madeni Para",
                    "Zift Vargahı Gümüş Madeni Para",
                    "Şankara Gümüş Madeni Para",
                    "Vahşi Jaharal Altın Madeni Para",
                    "Grumvol Altın Madeni Para"
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Krets",
        level: 1,
        hp: 71,
        damage: "4 - 7",
        money: "3 - 25",
        locations: [
            "Klerve Kasabası",
            "Gerçek Çayırı",
            "Çenyak Köyü",
            "Tüten Kraterler"
        ],
        image: "assents/images/creatures/krets.jpg",
        rewards: [
            {
                group: "İksirler",
                items: [
                    "Küçük Dev İksiri",
                    "Küçük Hayat İksiri",
                    "Küçük Güç İksiri"
                ]
            },
            {
                group: "Diğer Nesneler",
                items: [
                    "Uyanıklık Armağanı",
                    "İçgörü armağanı",
                    "Servet Armağanı",
                    "Tutumluluk Armağanı",
                    "Esir alınan Krets",
                    "Ticari mallar",
                    "Gerçeklik Kristalleri",
                    "Altın Pul",
                    "Hasat Sembolü"
                ]
            },
            {
                group: "Silah ve Zırhlar",
                items: [
                    "Kalkan",
                    "Deri Üst Dizlikler",
                    "Topuz",
                    "Deri Ceket"
                ]
            },
            {
                group: "Sandık ve Çantalar",
                items: [
                    "Kapalı Gümüş Kutu",
                    "Kapalı Altın Kutu",
                    "Kapalı Bronz Kutu",
                    "Kapalı Metal Kutu"
                ]
            },
            {
                group: "Madeni Para",
                items: [
                    "Krion Zorbu Bronz Madeni Para",
                    "Lagmur Bronz Madeni Para",
                    "Zift Vargahı Gümüş Madeni Para",
                    "Şankara Gümüş Madeni Para",
                    "Vahşi Jaharal Altın Madeni Para"
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Eşkıya Krets",
        level: 1,
        hp: 72,
        damage: "4 - 6",
        money: "4 - 70",
        locations: [
            "Klerve Kasabası",
            "Çenyak Köyü"
        ],
        image: "assents/images/creatures/eskiya-krets.jpg",
        rewards: [
            {
                group: "Tomarlar",
                items: [
                    "Zehirleme Tomarı"
                ]
            },
            {
                group: "İksirler",
                items: [
                    "Küçük Dev İksiri",
                    "Küçük Hayat İksiri",
                    "Küçük Güç İksiri",
                    "Hayat İksiri"
                ]
            },
            {
                group: "Diğer Nesneler",
                items: [
                    "İçgörü armağanı",
                    "Tutumluluk Armağanı",
                    "Uyanıklık Armağanı",
                    "Servet Armağanı",
                    "Esir alınan Krets",
                    "Altın Pul",
                    "Efril"
                ]
            },
            {
                group: "Silah ve Zırhlar",
                items: [
                    "Keten Gömlek",
                    "Deri Çizmeler",
                    "Topuz",
                    "Kalkan",
                    "Alacakaranlık Zırhı",
                    "Mamut Göğüslüğü",
                    "Cellat Yeleği"
                ]
            },
            {
                group: "Sandık ve Çantalar",
                items: [
                    "Kapalı Metal Kutu",
                    "Kapalı Bronz Kutu",
                    "Kapalı Mithril Sandığı",
                    "Mithril Anahtarı"
                ]
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const creatureGrid = document.getElementById("creatureGrid");
    const creatureSearch = document.getElementById("creatureSearch");
    const minLevel = document.getElementById("minLevel");
    const maxLevel = document.getElementById("maxLevel");
    const locationSearch = document.getElementById("locationSearch");

    const popup = document.getElementById("creaturePopup");
    const popupBackdrop = document.getElementById("popupBackdrop");
    const popupClose = document.getElementById("popupClose");

    const popupImage = document.getElementById("popupImage");
    const popupLevel = document.getElementById("popupLevel");
    const popupName = document.getElementById("popupName");
    const popupStats = document.getElementById("popupStats");
    const popupLocation = document.getElementById("popupLocation");
    const popupRewards = document.getElementById("popupRewards");

    function renderCreatures(list) {
        if (!creatureGrid) return;

        if (list.length === 0) {
            creatureGrid.innerHTML = `
                <div class="empty-result">
                    Aradığın kriterlere uygun yaratık bulunamadı.
                </div>
            `;
            return;
        }

        creatureGrid.innerHTML = list.map(creature => `
            <article class="creature-card" data-id="${creature.id}">
                <img src="${creature.image}" alt="${creature.name}">

                <h2 class="creature-card-name">${creature.name}</h2>

                <div class="creature-hover-info">
                    <h2>${creature.name}</h2>

                    <div class="creature-mini-stats">
                        <div class="creature-stat">
                            <span>Seviye</span>
                            <strong>${creature.level}</strong>
                        </div>

                        <div class="creature-stat">
                            <span>Can</span>
                            <strong>${creature.hp}</strong>
                        </div>

                        <div class="creature-stat">
                            <span>Hasar</span>
                            <strong>${creature.damage}</strong>
                        </div>

                        <div class="creature-stat">
                            <span>Para</span>
                            <strong>${creature.money}</strong>
                        </div>
                    </div>

                    <p class="creature-location">
                        <strong>Konum:</strong><br>
                        ${creature.locations.slice(0, 3).join(", ")}
                    </p>

                    <div class="creature-click-note">Ödül listesi için tıkla</div>
                </div>
            </article>
        `).join("");

        document.querySelectorAll(".creature-card").forEach(card => {
            card.addEventListener("click", () => {
                const id = Number(card.dataset.id);
                const creature = creatures.find(item => item.id === id);

                if (creature) {
                    openPopup(creature);
                }
            });
        });
    }

    function filterCreatures() {
        const nameValue = creatureSearch.value.toLowerCase().trim();
        const locationValue = locationSearch.value.toLowerCase().trim();
        const min = Number(minLevel.value) || 0;
        const max = Number(maxLevel.value) || 999;

        const filtered = creatures.filter(creature => {
            const matchName = creature.name.toLowerCase().includes(nameValue);
            const matchLevel = creature.level >= min && creature.level <= max;
            const matchLocation = creature.locations.join(" ").toLowerCase().includes(locationValue);

            return matchName && matchLevel && matchLocation;
        });

        renderCreatures(filtered);
    }

    function openPopup(creature) {
        popupImage.src = creature.image;
        popupImage.alt = creature.name;

        popupLevel.textContent = `Seviye ${creature.level}`;
        popupName.textContent = creature.name;

        popupStats.innerHTML = `
            <strong>Can:</strong> ${creature.hp}
            &nbsp; | &nbsp;
            <strong>Hasar:</strong> ${creature.damage}
            &nbsp; | &nbsp;
            <strong>Para:</strong> ${creature.money}
        `;

        popupLocation.innerHTML = `
            <strong>Konum:</strong> ${creature.locations.join(", ")}
        `;

        popupRewards.innerHTML = creature.rewards.map(group => `
            <div class="reward-group">
                <h4>${group.group}</h4>

                <div class="reward-list">
                    ${group.items.map(item => `
                        <span class="reward-item">${item}</span>
                    `).join("")}
                </div>
            </div>
        `).join("");

        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        popup.classList.remove("active");
        document.body.style.overflow = "";
    }

    [creatureSearch, minLevel, maxLevel, locationSearch].forEach(input => {
        input.addEventListener("input", filterCreatures);
    });

    popupClose.addEventListener("click", closePopup);
    popupBackdrop.addEventListener("click", closePopup);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closePopup();
        }
    });

    renderCreatures(creatures);
});