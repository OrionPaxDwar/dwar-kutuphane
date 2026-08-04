const dwarfImagePath = "../../assents/images/kilavuzlar/bodur-taslari/";
const dwarfResourcePath = "../../assents/images/kaynaklar/";

function stoneItem(name, amount, image) {
    return {
        name: name,
        amount: amount,
        image: dwarfImagePath + image
    };
}

function resourceItem(name, amount, image) {
    return {
        name: name,
        amount: amount,
        image: dwarfResourcePath + image
    };
}

function dwarfEnemy(name, level, hp, note, image) {
    return {
        name: name,
        level: level,
        hp: hp,
        note: note,
        image: dwarfResourcePath + image
    };
}

function dwarfStone(data) {
    return data;
}

const dwarfStones = [
    dwarfStone({
        id: "argo",
        name: "Argo",
        family: "Birinci Hat",
        color: "gray",
        level: "Gri Taş",
        stoneImage: dwarfImagePath + "argo-bodur-tasi.png",
        boxName: "Gri Bodur Kutusu",
        boxImage: dwarfImagePath + "gri-bodur-kutusu.png",
        mercury: "30",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Argo, birinci bodur taşı hattının gri seviye taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Argo taşında yaratık saldırısı yoktur.",
            enemies: []
        },
        upgrade: {
            title: "Üst Taşa Yükseltme",
            text: "2 Argo = 1 Ezav",
            items: [
                stoneItem("Argo", "2", "argo-bodur-tasi.png"),
                stoneItem("Ezav", "1", "ezav-bodur-tasi.png")
            ]
        },
        downgrade: null,
        rewards: [],
        trade: "Gri Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "yaz",
        name: "Yaz",
        family: "İkinci Hat",
        color: "gray",
        level: "Gri Taş",
        stoneImage: dwarfImagePath + "yaz-bodur-tasi.png",
        boxName: "Gri Bodur Kutusu",
        boxImage: dwarfImagePath + "gri-bodur-kutusu.png",
        mercury: "30",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Yaz, ikinci bodur taşı hattının gri seviye taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Yaz taşında yaratık saldırısı yoktur.",
            enemies: []
        },
        upgrade:null,
        downgrade: null,
        rewards: [],
        trade: "Gri Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "ezav",
        name: "Ezav",
        family: "Birinci Hat",
        color: "green",
        level: "Yeşil Taş",
        stoneImage: dwarfImagePath + "ezav-bodur-tasi.png",
        boxName: "Yeşil Bodur Kutusu",
        boxImage: dwarfImagePath + "yesil-bodur-kutusu.png",
        mercury: "120",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Ezav, Argo taşından yükseltilen yeşil seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Ezav taşı kullanıldığında Suikastçı Minatör saldırır.",
            enemies: [
                dwarfEnemy("Suikastçı Minatör", "7", "1121", "Taş kullanıldığında saldırır.", "suikastci-minator.png")
            ]
        },
        upgrade: {
            title: "Üst Taşa Yükseltme",
            text: "2 Ezav = 1 Rayno",
            items: [
                stoneItem("Ezav", "2", "ezav-bodur-tasi.png"),
                stoneItem("Rayno", "1", "rayno-bodur-tasi.png")
            ]
        },
        downgrade: {
           title: "Yıkım Tomarı ile Düşürme",
            text: "1 Ezav + 5 Elt Zarı = 2 Argo",
            items: [
                stoneItem("Ezav", "1", "ezav-bodur-tasi.png"),
                resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
                stoneItem("Argo", "2", "argo-bodur-tasi.png")
            ]
        },
        rewards: [],
        trade: "Yeşil Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "hagann",
        name: "Hagann",
        family: "İkinci Hat",
        color: "green",
        level: "Yeşil Taş",
        stoneImage: dwarfImagePath + "hagann-bodur-tasi.png",
        boxName: "Yeşil Bodur Kutusu",
        boxImage: dwarfImagePath + "yesil-bodur-kutusu.png",
        mercury: "120",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Hagann, Yaz taşından yükseltilen yeşil seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Hagann taşı kullanıldığında Suikastçı Minatör saldırır.",
            enemies: [
                dwarfEnemy("Suikastçı Minatör", "7", "1121", "Taş kullanıldığında saldırır.", "suikastci-minator.png")
            ]
        },
        upgrade: null,

downgrade: {
    title: "Yıkım Tomarı ile Düşürme",
    text: "1 Hagann + 5 Yıkım Tomarı = 2 Argo",
    items: [
        stoneItem("Hagann", "1", "hagann-bodur-tasi.png"),
        resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
        stoneItem("Argo", "2", "argo-bodur-tasi.png")
    ]
},
        rewards: [],
        trade: "Yeşil Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "rayno",
        name: "Rayno",
        family: "Birinci Hat",
        color: "blue",
        level: "Mavi Taş",
        stoneImage: dwarfImagePath + "rayno-bodur-tasi.png",
        boxName: "Mavi Bodur Kutusu",
        boxImage: dwarfImagePath + "mavi-bodur-kutusu.png",
        mercury: "330",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Rayno, Ezav taşından yükseltilen mavi seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Rayno taşı kullanıldığında Minatörler sırayla gelir.",
            enemies: [
                dwarfEnemy("Minatör", "-", "1242", "1. Minatör.", "minator.png"),
                dwarfEnemy("Minatör", "-", "1242", "2. Minatör.", "minator.png"),
                dwarfEnemy("Minatör", "-", "1342", "3. Minatör.", "minator.png")
            ]
        },
        upgrade: {
            title: "Üst Taşa Yükseltme",
            text: "2 Rayno = 1 Fey",
            items: [
                stoneItem("Rayno", "2", "rayno-bodur-tasi.png"),
                stoneItem("Fey", "1", "fey-bodur-tasi.png")
            ]
        },
        downgrade: {
            title: "Yıkım Tomarı ile Düşürme",
            text: "1 Rayno + 5 Elt Zarı = 2 Ezav",
            items: [
                stoneItem("Rayno", "1", "rayno-bodur-tasi.png"),
                resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
                stoneItem("Ezav", "2", "ezav-bodur-tasi.png")
            ]
        },
        rewards: [],
        trade: "Mavi Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "terp",
        name: "Terp",
        family: "İkinci Hat",
        color: "blue",
        level: "Mavi Taş",
        stoneImage: dwarfImagePath + "terp-bodur-tasi.png",
        boxName: "Mavi Bodur Kutusu",
        boxImage: dwarfImagePath + "mavi-bodur-kutusu.png",
        mercury: "330",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Terp, Hagann taşından yükseltilen mavi seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Terp taşı kullanıldığında Minatörler sırayla gelir.",
            enemies: [
                dwarfEnemy("Minatör", "-", "1242", "1. Minatör.", "minator.png"),
                dwarfEnemy("Minatör", "-", "1242", "2. Minatör.", "minator.png"),
                dwarfEnemy("Minatör", "-", "1342", "3. Minatör.", "minator.png")
            ]
        },
       upgrade: null,

downgrade: {
    title: "Yıkım Tomarı ile Düşürme",
    text: "1 Terp + 5 Yıkım Tomarı = 2 Ezav",
    items: [
        stoneItem("Terp", "1", "terp-bodur-tasi.png"),
        resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
        stoneItem("Ezav", "2", "ezav-bodur-tasi.png")
    ]
},
        rewards: [],
        trade: "Mavi Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "fey",
        name: "Fey",
        family: "Birinci Hat",
        color: "purple",
        level: "Mor Taş",
        stoneImage: dwarfImagePath + "fey-bodur-tasi.png",
        boxName: "Mor Bodur Kutusu",
        boxImage: dwarfImagePath + "mor-bodur-kutusu.png",
        mercury: "930",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Fey, Rayno taşından yükseltilen mor seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Fey taşı kullanıldığında Minatör Muhafızları gelir.",
            enemies: [
                dwarfEnemy("Minatör Muhafız", "10", "1543", "1. dalga.", "minator-muhafiz.png"),
                dwarfEnemy("Minatör Muhafız", "10", "1543", "2. dalga, 2 adet.", "minator-muhafiz.png"),
                dwarfEnemy("Minatör Muhafız", "10", "1543", "3. dalga, 2 adet.", "minator-muhafiz.png")
            ]
        },
        upgrade: {
            title: "Üst Taşa Yükseltme",
            text: "5 Fey = 1 Bego",
            items: [
                stoneItem("Fey", "5", "fey-bodur-tasi.png"),
                stoneItem("Bego", "1", "bego-bodur-tasi.png")
            ]
        },
        downgrade: {
            title: "Yıkım Tomarı ile Düşürme",
            text: "1 Fey + 5 Elt Zarı = 2 Rayno",
            items: [
                stoneItem("Fey", "1", "fey-bodur-tasi.png"),
                resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
                stoneItem("Rayno", "2", "rayno-bodur-tasi.png")
            ]
        },
        rewards: [],
        trade: "Mor Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "frey",
        name: "Frey",
        family: "İkinci Hat",
        color: "purple",
        level: "Mor Taş",
        stoneImage: dwarfImagePath + "frey-bodur-tasi.png",
        boxName: "Mor Bodur Kutusu",
        boxImage: dwarfImagePath + "mor-bodur-kutusu.png",
        mercury: "930",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Frey, Terp taşından yükseltilen mor seviye bodur taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Frey taşı kullanıldığında Minatör Muhafızları gelir.",
            enemies: [
                dwarfEnemy("Minatör Muhafız", "10", "1543", "1. dalga.", "minator-muhafiz.png"),
                dwarfEnemy("Minatör Muhafız", "10", "1543", "2. dalga, 2 adet.", "minator-muhafiz.png"),
                dwarfEnemy("Minatör Muhafız", "10", "1543", "3. dalga, 2 adet.", "minator-muhafiz.png")
            ]
        },
        upgrade: null,

downgrade: {
    title: "Yıkım Tomarı ile Düşürme",
    text: "1 Frey + 5 Yıkım Tomarı = 2 Rayno",
    items: [
        stoneItem("Frey", "1", "frey-bodur-tasi.png"),
        resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
        stoneItem("Rayno", "2", "rayno-bodur-tasi.png")
    ]
},
        rewards: [],
        trade: "Mor Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "bego",
        name: "Bego",
        family: "Birinci Hat",
        color: "red",
        level: "Kırmızı Taş",
        stoneImage: dwarfImagePath + "bego-bodur-tasi.png",
        boxName: "Kırmızı Bodur Kutusu",
        boxImage: dwarfImagePath + "kirmizi-bodur-kutusu.png",
        mercury: "2700",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Bego, birinci bodur taşı hattının kırmızı seviye taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Bego taşında oda sistemi bulunur. Anahtar taşıyan Minatörler ve yardımcı Minatörler gelebilir.",
            enemies: [
                dwarfEnemy("Oda Anahtarcı Minatör", "12", "3329", "Kapı açmak için kesilir.", "oda-anahtarcisi-minator.png"),
                dwarfEnemy("Minatör", "8", "1298", "Saldırılan Minatöre yardıma gelebilir.", "minator.png"),
                dwarfEnemy("Minatör", "8", "1338", "Saldırılan Minatöre yardıma gelebilir.", "minator.png")
            ]
        },
        upgrade: null,
        downgrade: {
            title: "Yıkım Tomarı ile Düşürme",
            text: "1 Bego + 5 Elt Zarı = 2 Fey",
            items: [
                stoneItem("Bego", "1", "bego-bodur-tasi.png"),
                resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
                stoneItem("Fey", "2", "fey-bodur-tasi.png")
            ]
        },
        rewards: [],
        trade: "Kırmızı Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    }),

    dwarfStone({
        id: "anguz",
        name: "Anguz",
        family: "İkinci Hat",
        color: "red",
        level: "Kırmızı Taş",
        stoneImage: dwarfImagePath + "anguz-bodur-tasi.png",
        boxName: "Kırmızı Bodur Kutusu",
        boxImage: dwarfImagePath + "kirmizi-bodur-kutusu.png",
        mercury: "2700",
        magmarRegion: "Magi bölgesi eklenecek",
        humanRegion: "İnsan bölgesi eklenecek",
        description: "Anguz, ikinci bodur taşı hattının kırmızı seviye taşıdır.",
        encounter: {
            title: "Taşı Açarken Gelen Yaratıklar",
            text: "Anguz taşında hazine odası sistemi bulunur. Hazine odasında Hazine Bekçisi saldırır.",
            enemies: [
                dwarfEnemy("Hazine Bekçisi", "13", "3675", "Hazine odasında saldırır.", "hazine-bekcisi.png"),
                dwarfEnemy("Minatör", "8", "1298", "Saldırılan Minatöre yardıma gelebilir.", "minator.png"),
                dwarfEnemy("Minatör", "8", "1338", "Saldırılan Minatöre yardıma gelebilir.", "minator.png")
            ]
        },
        upgrade: null,

downgrade: {
    title: "Yıkım Tomarı ile Düşürme",
    text: "1 Anguz + 5 Yıkım Tomarı = 2 Fey",
    items: [
        stoneItem("Anguz", "1", "anguz-bodur-tasi.png"),
        resourceItem("Yıkım Tomarı", "5", "yikim-tomari.png"),
        stoneItem("Fey", "2", "fey-bodur-tasi.png")
    ]
},
        rewards: [],
        trade: "Kırmızı Bodur Kutusu, Zanaatçılar Birliği takaslarında kullanılabilir."
    })
];