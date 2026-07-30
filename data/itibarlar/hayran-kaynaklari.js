const fanQuests = [
    {
        id: "kotuluk-hayrani",
        reputation: "Kötülük Yapanlar",
        questName: "Kötülük Yapanlar Hayran Görevi",
        level: 5,
        type: "kaynak",
        typeLabel: "Kaynak Teslimi",
        npc: "Sonradan eklenecek",
        location: "Sonradan eklenecek",
        shortInfo: "Kötülük itibarı için Hayran aşamasında istenen kaynak ve görevler.",
        requirements: [
            {
                name: "Öfkeli Göz",
                amount: "500",
                image: "../../assents/images/kaynaklar/ofkeli-goz.png"
            }
        ],
        creatures: [],
        notes: [
            "Bu görevde istenen kaynaklar netleştikçe buraya eklenecek.",
            "Madalyon isimleri itibar özelinde sonradan düzenlenebilir."
        ]
    },

    {
        id: "iyilik-hayrani",
        reputation: "İyilik Yapanlar",
        questName: "İyilik Yapanlar Hayran Görevi",
        level: 5,
        type: "kaynak",
        typeLabel: "Kaynak Teslimi",
        npc: "Sonradan eklenecek",
        location: "Sonradan eklenecek",
        shortInfo: "İyilik itibarı için Emanasyon ağırlıklı Hayran görevi.",
        requirements: [
            {
                name: "Emanasyon",
                amount: "15000",
                image: "../../assents/images/kaynaklar/emanasyon.jpg"
            }
        ],
        creatures: [],
        notes: [
            "Emanasyon miktarı ve görev adımları sonradan kesinleştirilecek."
        ]
    },

    {
        id: "flaundin-hayrani",
        reputation: "Flaundinler",
        questName: "Flaundinler Hayran Görevi",
        level: 6,
        type: "karisik",
        typeLabel: "Karışık Görev",
        npc: "Akvarius",
        location: "Flaungard Sarayı / Sualtı bağlantılı bölgeler",
        shortInfo: "Flaundinler Hayran aşaması için su altı kaynakları ve görev zinciri.",
        requirements: [
            {
                name: "Deniz Midyesi",
                amount: "2000",
                image: "../../assents/images/kaynaklar/deniz-midyesi.jpg"
            },
            {
                name: "Golleyd İncileri",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/golleyd-incileri.jpg"
            }
        ],
        creatures: [],
        notes: [
            "Flaundin görevlerinde su altı bölgesi ve günlük görevler önemli olabilir.",
            "Görev zinciri netleşince adım adım yazılacak."
        ]
    },

    {
        id: "yaratik-avcilari-hayrani",
        reputation: "Yaratık Avcıları",
        questName: "Yaratık Avcıları Hayran Görevi",
        level: 7,
        type: "yaratik",
        typeLabel: "Yaratık Kesme",
        npc: "Paladin Shimon",
        location: "Sonradan eklenecek",
        shortInfo: "Yaratık Avcıları Hayran aşamasında yaratık kesme ve ganimet teslimi olabilir.",
        requirements: [
            {
                name: "Yaratık Ganimeti",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/yaratik-ganimeti.jpg"
            }
        ],
        creatures: [
            {
                name: "Yaratık adı sonradan eklenecek",
                amount: "Kesilecek adet sonradan eklenecek",
                image: "../../assents/images/creatures/deli-kopek.jpg"
            }
        ],
        notes: [
            "Yaratık isimleri, kesilecek adetler ve düşen ganimetler kaynak geldikçe doldurulacak."
        ]
    },

    {
        id: "eski-nesne-hayrani",
        reputation: "Eski Nesne Arayıcıları",
        questName: "Eski Nesne Arayıcıları Hayran Görevi",
        level: 7,
        type: "kaynak",
        typeLabel: "Kaynak Teslimi",
        npc: "Antikacı Manley / Setoni",
        location: "Sonradan eklenecek",
        shortInfo: "Eski nesne teslimleri ve özel kaynaklar üzerinden ilerleyen Hayran görevi.",
        requirements: [
            {
                name: "Eski Nesne",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/eski-nesne.jpg"
            },
            {
                name: "Bodur Kutusu",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/bodur-kutusu.jpg"
            }
        ],
        creatures: [],
        notes: [
            "Görev kaynakları ve değerleri netleştikçe burası düzenlenecek."
        ]
    },

    {
        id: "kaos-hayrani",
        reputation: "Kaos İle Savaşanlar",
        questName: "Kaos İle Savaşanlar Hayran Görevi",
        level: 6,
        type: "karisik",
        typeLabel: "Karışık Görev",
        npc: "Kaptan Beckly / Nöbetçi Rutendam",
        location: "Fey-Go bağlantılı bölgeler",
        shortInfo: "Kaos yaratıkları, görevler ve özel kaynaklarla ilerleyen Hayran görevi.",
        requirements: [
            {
                name: "Kaos Parçası",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/kaos-parcasi.jpg"
            },
            {
                name: "Gungl",
                amount: "Sonradan eklenecek",
                image: "../../assents/images/kaynaklar/gungl.jpg"
            }
        ],
        creatures: [],
        notes: [
            "Kaos Hayranı görev zinciri uzun olacağı için adım adım doldurulacak."
        ]
    }
];