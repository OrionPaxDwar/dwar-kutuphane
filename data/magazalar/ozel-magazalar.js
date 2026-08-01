const kaynakPath = "../../../assents/images/kaynaklar/";
const odulPath = "../../../assents/images/magazalar/oduller/";

function specialReward(name, cost, image, description, contents = []) {
    return {
        name: name,
        cost: cost,
        image: odulPath + image,
        description: description,
        contents: contents
    };
}

function specialContentItem(name, amount, image, description = "") {
    return {
        name: name,
        amount: amount,
        image: kaynakPath + image,
        description: description
    };
}

const specialShops = {
    "zirh-magazasi": {
        title: "Zırh Mağazası",
        eventName: "Eski Demirci'nin Sembolü Mağazası",
        currencyName: "Eski Demirci'nin Sembolü",
        currencyImage: kaynakPath + "eski-demircinin-sembolu.png",
        period: "Kaotik Zafer etkinliği / Dövüş Alanları",
        level: "6 - 10 seviye aralığı",
        location: "Leny Sahili",
        cover: "../../../assents/images/magazalar/ozel/zirh-magazasi.jpg",
        intro: "Kaotik Zaferlerden kazanılan Eski Demirci'nin Sembolü ile Leny Sahili'ndeki Zırh Mağazasından gizemli zırh setleri alınabilir.",
        notes: [
            "Mağaza Leny Sahili'nde bulunur.",
            "Kaotik Zaferlerden 40 adet Eski Demirci'nin Sembolü gelir.",
            "Eski Demirci'nin Sembolü görev nesnesidir.",
            "Mağazada Kemik Kıran, Manevracı ve Ağır Sıklet setleri bulunur."
        ],

        groups: [
            {
                title: "Kemik Kıran",
                description: "Barbar tarzı Kemik Kıran ekipmanları.",
                rewards: [
                    specialReward(
                        "Gizemli Barbar Miğferi",
                        6500,
                        "zirh-magazasi/gizemli-barbar-migferi.jpg",
                        "Kemik Kıran tarzı miğfer. Dayanıklılık 50/50. Seviye 10."
                    ),

                    specialReward(
                        "Gizemli Barbar Kollukları",
                        5400,
                        "zirh-magazasi/gizemli-barbar-kolluklari.jpg",
                        "Kemik Kıran tarzı kolluk. Dayanıklılık 50/50. Seviye 9."
                    ),

                    specialReward(
                        "Barbarların Gizemli Çizmesi",
                        4800,
                        "zirh-magazasi/barbarlarin-gizemli-cizmesi.jpg",
                        "Kemik Kıran tarzı ayakkabı. Dayanıklılık 45/45. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Barbar Hasır Zırhı",
                        4800,
                        "zirh-magazasi/gizemli-barbar-hasir-zirhi.jpg",
                        "Kemik Kıran tarzı hasır zırh. Dayanıklılık 45/45. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Barbar Baltası",
                        8400,
                        "zirh-magazasi/gizemli-barbar-baltasi.jpg",
                        "Kemik Kıran tarzı çift elli balta. Dayanıklılık 45/45. Seviye 7."
                    ),

                    specialReward(
                        "Gizemli Barbar Zırhı",
                        3600,
                        "zirh-magazasi/gizemli-barbar-zirhi.jpg",
                        "Kemik Kıran tarzı zırh. Dayanıklılık 64/64. Seviye 6."
                    ),

                    specialReward(
                        "Gizemli Barbar Üst Dizliği",
                        3600,
                        "zirh-magazasi/gizemli-barbar-ust-dizligi.jpg",
                        "Kemik Kıran tarzı dizlik. Dayanıklılık 64/64. Seviye 6."
                    )
                ]
            },

            {
                title: "Manevracı",
                description: "Krom tarzı Manevracı ekipmanları.",
                rewards: [
                    specialReward(
                        "Gizemli Krom Miğferi",
                        6500,
                        "zirh-magazasi/gizemli-krom-migferi.jpg",
                        "Manevracı tarzı miğfer. Dayanıklılık 50/50. Seviye 10."
                    ),

                    specialReward(
                        "Gizemli Krom Kollukları",
                        5400,
                        "zirh-magazasi/gizemli-krom-kolluklari.jpg",
                        "Manevracı tarzı kolluk. Dayanıklılık 48/48. Seviye 9."
                    ),

                    specialReward(
                        "Gizemli Krom Hasır Zırhı",
                        4800,
                        "zirh-magazasi/gizemli-krom-hasir-zirhi.jpg",
                        "Manevracı tarzı hasır zırh. Dayanıklılık 46/46. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Krom Çizmeleri",
                        4800,
                        "zirh-magazasi/gizemli-krom-cizmeleri.jpg",
                        "Manevracı tarzı ayakkabı. Dayanıklılık 46/46. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Hançer",
                        4200,
                        "zirh-magazasi/gizemli-hancer.jpg",
                        "Manevracı tarzı ana silah. Dayanıklılık 43/43. Seviye 7."
                    ),

                    specialReward(
                        "Gizemli Uzun Hançer",
                        4200,
                        "zirh-magazasi/gizemli-uzun-hancer.jpg",
                        "Manevracı tarzı sol el silahı. Dayanıklılık 43/43. Seviye 7."
                    ),

                    specialReward(
                        "Gizemli Krom Zırhı",
                        3600,
                        "zirh-magazasi/gizemli-krom-zirhi.jpg",
                        "Manevracı tarzı zırh. Dayanıklılık 64/64. Seviye 6."
                    ),

                    specialReward(
                        "Gizemli Krom Üst Dizliği",
                        3600,
                        "zirh-magazasi/gizemli-krom-ust-dizligi.jpg",
                        "Manevracı tarzı dizlik. Dayanıklılık 64/64. Seviye 6."
                    )
                ]
            },

            {
                title: "Ağır Sıklet",
                description: "Direnç tarzı Ağır Sıklet ekipmanları.",
                rewards: [
                    specialReward(
                        "Gizemli Direnç Miğferi",
                        6500,
                        "zirh-magazasi/gizemli-direnc-migferi.jpg",
                        "Ağır Sıklet tarzı miğfer. Dayanıklılık 50/50. Seviye 10."
                    ),

                    specialReward(
                        "Gizemli Direnç Kollukları",
                        5400,
                        "zirh-magazasi/gizemli-direnc-kolluklari.jpg",
                        "Ağır Sıklet tarzı kolluk. Dayanıklılık 48/48. Seviye 9."
                    ),

                    specialReward(
                        "Gizemli Direnç Ayakkabıları",
                        4800,
                        "zirh-magazasi/gizemli-direnc-ayakkabilari.jpg",
                        "Ağır Sıklet tarzı ayakkabı. Dayanıklılık 46/46. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Direnç Hasır Zırhı",
                        4800,
                        "zirh-magazasi/gizemli-direnc-hasir-zirhi.jpg",
                        "Ağır Sıklet tarzı hasır zırh. Dayanıklılık 46/46. Seviye 8."
                    ),

                    specialReward(
                        "Gizemli Direnç Kalkanı",
                        4200,
                        "zirh-magazasi/gizemli-direnc-kalkani.jpg",
                        "Ağır Sıklet tarzı hafif kalkan. Dayanıklılık 43/43. Seviye 7."
                    ),

                    specialReward(
                        "Gizemli Direnç Kılıcı",
                        4200,
                        "zirh-magazasi/gizemli-direnc-kilici.jpg",
                        "Ağır Sıklet tarzı ana silah. Dayanıklılık 43/43. Seviye 7."
                    ),

                    specialReward(
                        "Gizemli Direnç Göğüslüğü",
                        3600,
                        "zirh-magazasi/gizemli-direnc-goguslugu.jpg",
                        "Ağır Sıklet tarzı zırh. Dayanıklılık 64/64. Seviye 6."
                    ),

                    specialReward(
                        "Gizemli Direnç Üst Dizliği",
                        3600,
                        "zirh-magazasi/gizemli-direnc-ust-dizligi.jpg",
                        "Ağır Sıklet tarzı dizlik. Dayanıklılık 64/64. Seviye 6."
                    )
                ]
            }
        ]
    }
};