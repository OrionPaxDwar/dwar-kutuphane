const kaynakPath = "../../assents/images/kaynaklar/";
const madalyonPath = "../../assents/images/madalyonlar/"
function item(name, amount, image) {
    return {
        name: name,
        amount: amount,
        image: kaynakPath + image
    };
}
function comboResource(name, oneAmount, totalAmount, image) {
    return {
        name: name,
        amount: oneAmount + " / " + totalAmount,
        image: kaynakPath + image
    };
}

function comboSection(title, comboName, comboImage, cubeName, cubeImage, info, resources) {
    return {
        title: title,
        comboItem: {
            name: comboName,
            image: kaynakPath + comboImage,
            amount: "1 / 13"
        },
        cubeItem: {
            name: cubeName,
            image: kaynakPath + cubeImage,
            amount: "4 / 52"
        },
        info: info,
        items: resources
    };
}

function getComboCubeSections() {
    return [
        comboSection(
            "Şeytani Kombo-Kübü",
            "Şeytani Kombo-Kübü",
            "seytani-kombo-kubu.png",
            "Şeytani Cin Küpü",
            "seytani-cin-kupu.png",
            "1 kombo küpü 4 cin küpü verir. 13 kombo küpü 52 cin küpü verir.",
            [
                comboResource("Deve Dikeni Karışımı", "100", "1300", "deve-dikeni-karisimi.png"),
                comboResource("Ökse Otu Karışımı", "100", "1300", "okse-otu-karisimi.png"),
                comboResource("Yonca Karışımı", "100", "1300", "yonca-karisimi.png"),
                comboResource("Akik Taşı Tozu", "1000", "13000", "akik-tasi-tozu.png"),
                comboResource("Akuamarin Taşı Tozu", "1000", "13000", "akuamarin-tasi-tozu.png"),
                comboResource("Firuze Taşı Tozu", "1000", "13000", "firuze-tasi-tozu.png"),
                comboResource("Küçük Işıldayan Kristal", "10", "130", "kucuk-isildayan-kristal.png")
            ]
        ),

        comboSection(
            "İblis Kombo-Kübü",
            "İblis Kombo-Kübü",
            "iblis-kombo-kubu.png",
            "İblis Cin Küpü",
            "iblis-cin-kupu.png",
            "1 kombo küpü 4 cin küpü verir. 13 kombo küpü 52 cin küpü verir.",
            [
                comboResource("Sihirli Kırmızı Mürekkep", "300", "3900", "sihirli-kirmizi-murekkep.png"),
                comboResource("Sihirli Yeşil Mürekkep", "300", "3900", "sihirli-yesil-murekkep.png"),
                comboResource("Binbiryaprak Otu Karışımı", "100", "1300", "binbiryaprak-otu-karisimi.png"),
                comboResource("Ametist Taşı Tozu", "1000", "13000", "ametist-tasi-tozu.png"),
                comboResource("Işıldayan Kristal", "10", "130", "isildayan-kristal.png")
            ]
        ),

        comboSection(
            "Mührik İblis Kombo-Kübü",
            "Mührik İblis Kombo-Kübü",
            "muhrik-iblis-kombo-kubu.png",
            "Mührik İblis Cin Küpü",
            "muhrik-iblis-cin-kupu.png",
            "1 kombo küpü 4 cin küpü verir. 13 kombo küpü 52 cin küpü verir.",
            [
                comboResource("Sihirli Mavi Mürekkep", "200", "2600", "sihirli-mavi-murekkep.png"),
                comboResource("Zümrüt Tozu", "1000", "13000", "zumrut-tozu.png"),
                comboResource("Topaz Tozu", "1000", "13000", "topaz-tozu.png"),
                comboResource("Anemon Çiçeği Karışımı", "10", "130", "anemon-cicegi-karisimi.png"),
                comboResource("Adamotu Karışımı", "10", "130", "adamotu-karisimi.png")
            ]
        )
    ];
}

function getMercenaryRequirements() {
    return [
        item("Şeytani Cin Küpü", "50", "seytani-cin-kupu.png"),
        item("İblis Cin Küpü", "50", "iblis-cin-kupu.png"),
        item("Mührik İblis Cin Küpü", "50", "muhrik-iblis-cin-kupu.png")
    ];
}
const fanQuests = [
   {
    id: "sans-avcilari-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Şans Avcıları",
    questName: "Şans Avcıları Hayran Görevi",
    level: 5,
    icon: madalyonPath + "sanshayran.gif",
    npc: "Poker / Cathala",
    location: "Taverna / Maria'nın Yeri",
    shortInfo: "Hayran görevi için 1000 adet Olağanüstü Kum Tanesi teslim edilir.",

    requirementsTitle: "İstenen Kaynak",

    requirements: [
        item("Olağanüstü Kum Tanesi", "1000", "olaganustu-kum-tanesi.png")
    ],

    sectionsTitle: "Kum Tanesi Üretim Hesabı",

    sections: [
        {
            title: "1 Ufalama İşlemi",
            info: "25 Harika Cam + 1 Ufalama Tomarı kullanılır. Sonuç olarak 1 - 3 adet Olağanüstü Kum Tanesi elde edilir.",
            items: [
                item("Harika Cam", "25", "harika-cam.png"),
                item("Ufalama Tomarı", "1", "ufalama-tomari.png"),
                item("Olağanüstü Kum Tanesi", "1 - 3", "olaganustu-kum-tanesi.png")
            ]
        },

        {
            title: "1000 Kum Tanesi İçin En İyi İhtimal",
            info: "Her işlemde 3 adet kum tanesi gelirse yaklaşık 334 Ufalama Tomarı ve 8350 Harika Cam gerekir.",
            items: [
                item("Harika Cam", "8350", "harika-cam.png"),
                item("Ufalama Tomarı", "334", "ufalama-tomari.png"),
                item("Olağanüstü Kum Tanesi", "1000", "olaganustu-kum-tanesi.png")
            ]
        },

        {
            title: "1000 Kum Tanesi İçin En Kötü İhtimal",
            info: "Her işlemde 1 adet kum tanesi gelirse 1000 Ufalama Tomarı ve 25000 Harika Cam gerekir.",
            items: [
                item("Harika Cam", "25000", "harika-cam.png"),
                item("Ufalama Tomarı", "1000", "ufalama-tomari.png"),
                item("Olağanüstü Kum Tanesi", "1000", "olaganustu-kum-tanesi.png")
            ]
        }
    ],

    notesTitle: "Üretim Notları",

    notes: [
        {
            title: "Görevde İstenen Asıl Kaynak",
            text: "Şans Avcıları hayran görevi için teslim edilmesi gereken asıl kaynak sadece 1000 adet Olağanüstü Kum Tanesi'dir."
        },
        {
            title: "Kum Tanesi Üretimi",
            text: "25 Harika Cam ve 1 Ufalama Tomarı kullanıldığında 1 - 3 adet Olağanüstü Kum Tanesi elde edilir."
        },
        {
            title: "Ufalama Tomarı Maliyeti",
            text: "Her Ufalama Tomarı 75 gümüştür."
        },
        {
            title: "Altın Maliyeti",
            text: "1000 kum tanesi için en iyi ihtimalde yaklaşık 334 tomar gerekir ve bu yaklaşık 250 altın eder. En kötü ihtimalde 1000 tomar gerekir ve bu 750 altın eder."
        },
        {
            title: "Harika Cam Aralığı",
            text: "1000 kum tanesi için en iyi ihtimalde 8350 Harika Cam, en kötü ihtimalde 25000 Harika Cam gerekir."
        }
    ]
},

    {
        id: "sans-avcilari-yucelik",
        medal: "yucelik",
        medalLabel: "Yücelik Madalyonu",
        reputation: "Şans Avcıları",
        questName: "Şans Avcıları Yücelik Görevi",
        level: 5,
        icon: madalyonPath+ "sansyücelik.gif",
        npc: "Birden fazla NPC",
        location: "Farklı bölgeler",
        shortInfo: "15 ayrı NPC/kaynak tesliminden oluşan Yücelik görevi.",
        sections: [
            {
                title: "Büyücü Hadwin / Büyücü Aldich",
                location: "Gornd Bölgesi / Aldatış Yamacı",
                items: [
                    item("Göksel Alev Kıvılcımı", "30", "goksel-alev-kivilcimi.png")
                ]
            },
            {
                title: "Pleanko / Fanatik Atamie",
                location: "Yabancılaşma Çölü / Bozkır Tarafı",
                items: [
                    item("Ölü Savaşçının Kafatası", "5000", "olu-savascinin-kafatasi.png"),
                    item("Öfkeli Göz", "3500", "ofkeli-goz.png")
                ]
            },
            {
                title: "Hırsız Canutei / Dolandırıcı Gaetan",
                location: "Hayaller Çayırı / Aldatış Yamacı",
                items: [
                    item("Ateş Çiçeği", "1500", "ates-cicegi.png"),
                    item("Keder Çiçeği", "1000", "keder-cicegi.png")
                ]
            },
            {
                title: "Akvarius",
                location: "Flaungard Sarayı",
                items: [
                    item("Deniz Midyesi", "2000", "deniz-midyesi.png")
                ]
            },
            {
                title: "Köy Bilgini Volody / Köy Bilgini Boryent",
                location: "Sartnog Şehir Meydanı / De'Larisa Şehir Meydanı",
                items: [
                    item("Edal", "50", "edal.png")
                ]
            },
            {
                title: "Glivens / Dilber Maria",
                location: "Verdanya Bölgesi Taverna / Barmila Vilayeti Maria'nın Yeri",
                items: [
                    item("Harika Cam", "10000", "harika-cam.png")
                ]
            },
            {
                title: "Zanaatçı Sayen / Zanaatçı Oberon",
                location: "Ateş Meydanı / Işık Meydanı",
                items: [
                    item("Kabarcıklı Metal", "2000", "kabarcikli-metal.png"),
                    item("Ragtihron'un Derisi", "2000", "ragtihronun-derisi.png")
                ]
            },
            {
                title: "Bares / Vito",
                location: "Finyer Bölgesi / Grenfalt Bölgesi",
                items: [
                    item("Öfkeli Göz", "2500", "ofkeli-goz.png"),
                    item("Şeytani Kombo-Kübü", "300", "seytani-kombo-kubu.png"),
                    item("İblis Kombo-Kübü", "200", "iblis-kombo-kubu.png"),
                    item("Mührik İblis Kombo-Kübü", "150", "muhrik-iblis-kombo-kubu.png")
                ]
            },
            {
                title: "Kâhin Vitaliya / Kâhin Bedelia",
                location: "Avgrelon Kasabası / Yabani Otlar Toprakları",
                items: [
                    item("Krofdor'ların El Yazıları", "150", "krofdorlarin-el-yazilari.png"),
                    item("Eldiv'lerin El Yazıları", "150", "eldivlerin-el-yazilari.png"),
                    item("Elf'lerin El Yazıları", "100", "elflerin-el-yazilari.png"),
                    item("Dağ Sakinleri El Yazıları", "75", "dag-sakinleri-el-yazilari.png")
                ]
            },
            {
                title: "Kaveru / Kara Büyücü Nacorai",
                location: "Hanlık Mezarlığı / Karanlık Türbe",
                items: [
                    item("Ludiyal Zincir Halkası", "500", "ludiyal-zincir-halkasi.png")
                ]
            },
            {
                title: "Antikacı Manley / Antikacı Setoni",
                location: "Alevli Vadi / Klerve Kasabası Civarı",
                items: [
                    item("Seyrek Kemik", "750", "seyrek-kemik.png")
                ]
            },
            {
                title: "Bekçi Valderei / Koruyucu Sangred",
                location: "Cehennem Geçidi / Dağ Kenarı",
                items: [
                    item("Kristal Kömürü", "500", "kristal-komuru.png"),
                    item("Gerçeklik Kristali", "75000", "gerceklik-kristali.png")
                ]
            },
            {
                title: "Balıkçı Verniz / Balıkçı Nealon",
                location: "Muntarya Dağlıkları / Karat Dağlıkları",
                items: [
                    item("Sihirli Mavi Mürekkep", "1500", "sihirli-mavi-murekkep.png"),
                    item("Kırmızı Şabut Balığı", "3000", "kirmizi-sabut-baligi.png")
                ]
            },
            {
                title: "Krefile / Kuyumcu Efrosi",
                location: "Zanaatçılar Birliği",
                items: [
                    item("Obsidyen", "1500", "obsidyen.png"),
                    item("Safir", "1500", "safir.png"),
                    item("Elmas", "3000", "elmas.png")
                ]
            },
            {
                title: "Simyacı Volody / Simyager Kosta",
                location: "Zanaatçılar Birliği",
                items: [
                    item("Adamotu", "500", "adamotu.png"),
                    item("Anemon", "500", "anemon.png"),
                    item("Lotus", "2000", "lotus.png"),
                    item("Güzelavratotu", "3000", "guzelavratotu.png")
                ]
            }
        ],
        notes: [
            "Yücelik görevine istenilen bir kısımdan başlanabilir.",
            "İlk sıradan başlamak şart değildir."
        ]
    },

    {
        id: "kotuluk-yapanlar-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Kötülük Yapanlar Birliği",
        questName: "Kötülük Yapanlar Hayran Görevi",
        level: 5,
        icon: madalyonPath + "kötülükhayran.png",
        npc: "Yobaz Vilmos",
        location: "Tutulma Koruluğu / Kafatası Çölü",
        shortInfo: "Öfkeli Göz teslimi.",
        requirements: [ 
            
            item("Öfkeli Göz", "500", "ofkeli-goz.png")
        ],
        notes: []
    },

    {
        id: "iyilik-yapanlar-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "İyilik Kardeşliği Birliği",
        questName: "İyilik Yapanlar Hayran Görevi",
        level: 5,
        icon: madalyonPath + "iyilik-hayran.png",
        npc: "Nearak Derbog",
        location: "Vukrimah Malikanesi / Airgond Malikanesi",
        shortInfo: "İyilik Emanasyonu teslimi.",
        requirements: [
            item("İyilik Emanasyonu", "15000", "emanasyon.gif")
        ],
        notes: []
    },

    {
        id: "eski-nesne-arayicilari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Eski Nesne Arayıcıları",
        questName: "Eski Nesne Arayıcıları Hayran Görevi",
        level: 5,
        icon: madalyonPath + "eskinesne-hayran.png",
        npc: "Antikacı Manley / Antikacı Setoni",
        location: "Alevli Vadi / Klerve Kasabası Civarı",
        shortInfo: "Antikacıya özel kaynak teslimleri.",
        requirements: [
            item("Ateş Çiçeği", "1000", "ates-cicegi.png"),
            item("Keder Çiçeği", "500", "keder-cicegi.png"),
            item("Dehşet Maskesi", "10", "dehset-maskesi.png"),
            item("Kabir Kasırga", "3", "kabir-kasirga.png"),
            item("Badduh'un Kupası", "1", "badduhun-kupasi.png")
        ],
        notes: []
    },

  {
    id: "kaosla-savasanlar-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Kaosla Savaşanlar Birliği",
    questName: "Kaosla Savaşanlar Hayran Görevi",
    level: 5,
    icon: madalyonPath + "kaos-hayran.gif",
    npc: "Nöbetçi Rutendam / Kaptan Beckly",
    location: "Kuzey Karakolu / Güney Karakolu",
shortInfo: "Kaos madalyonları, iksirler, UyarrMO parçaları ve zorlu aşamalı dövüşler.",

requirements: [],

sections: [
    {
        title: "1. Aşama",
        type: "step",
        items: [
            item("Kaos Emlidir Madalyonu", "20", "kaos-emlidir-madalyonu.png"),
            item("Kaos Emşeliyi Madalyonu", "10", "kaos-emseliyi-madalyonu.png")
        ]
    },

    {
        title: "2. Aşama",
        type: "step",
        items: [
            item("Kaos Çüg İksiri", "400", "kaos-cug-iksiri.png"),
            item("Kaos Ripmav İksiri", "300", "kaos-ripmav-iksiri.png"),
            item("Kaos Nak İksiri", "100", "kaos-nak-iksiri.png")
        ]
    },

    {
        title: "3. Aşama",
        type: "step",
        items: [
            item("Kaos Tayah İksiri", "300", "kaos-tayah-iksiri.png")
        ]
    },

    {
        title: "4. Aşama",
        type: "step",
        items: [
            item("Kaos Ved İksiri", "150", "kaos-ved-iksiri.png")
        ]
    },

    {
        title: "5. Aşama",
        type: "step",
        items: [
            item("Kaos Dokart İksiri", "25", "kaos-dokart-iksiri.png")
        ]
    },

    {
        title: "6. Aşama",
        type: "step",
        items: [
            item("UyarrMO Kılıcı", "1", "uyarrmo-kilici.png"),
            item("UyarrMO Kalkanı", "1", "uyarrmo-kalkani.png")
        ]
    },

    {
        title: "7. Aşama",
        type: "step",
        items: [
            item("UyarrMO Miğferi", "1", "uyarrmo-migferi.png"),
            item("UyarrMO Omuzlukları", "1", "uyarrmo-omuzluklari.png")
        ]
    }
],

notesTitle: "Aşama Notları",

notes: [
    {
        title: "Genel Uyarı",
        text: "Dövüşler oldukça zor olabilir. Özellikle son dövüşlerde birçok karakter size yardım edecek olsa bile, iyi hazırlanmış olmanız daha güvenlidir."
    },
    {
        title: "Ölürsen Ne Olur?",
        text: "Dövüşlerden birinde ölürseniz dövüş sona erer. Tekrar başlamak için verilen Işınlanma Parşömenini kullanmanız gerekir. İkinci kez kaynak teslim etmeniz gerekmez."
    },
    {
        title: "1. Aşama",
        text: "20 Kaos Emlidir Madalyonu ve 10 Kaos Emşeliyi Madalyonu teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır ve Koruyucu GunglHO [9] öldürülür."
    },
    {
        title: "2. Aşama",
        text: "400 Kaos Çüg İksiri, 300 Kaos Ripmav İksiri ve 100 Kaos Nak İksiri teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır ve 5 adet zayıflatılmış Koruyucu KarartıcıDO [10] öldürülür. Rukham / Bakhasha savaşta yardım eder."
    },
    {
        title: "3. Aşama",
        text: "300 Kaos Tayah İksiri teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır ve 4 adet zayıflatılmış Koruyucu KarartıcıHO [12] öldürülür. Rukham / Bakhasha savaşta yardım eder."
    },
    {
        title: "4. Aşama",
        text: "150 Kaos Ved İksiri teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır ve 3 adet zayıflatılmış Koruyucu General UyarrMO [12] öldürülür. Şifacı, savaşçı ve Rukham / Bakhasha savaşta yardım eder."
    },
    {
        title: "5. Aşama",
        text: "25 Kaos Dokart İksiri teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır ve zayıflatılmış Koruyucu Büyük Egnu [16] öldürülür. Egnu savaşta 4 KarartıcıDO, 4 KarartıcıHO ve 4 GunglHO çağırır. Çağrılan yaratıklar önceki dövüşlerde olduğu gibi zayıflatılmış olur. Şifacı, savaşçı, Rukham / Bakhasha ve Sheara yardım eder."
    },
    {
        title: "6. Aşama",
        text: "1 UyarrMO Kılıcı ve 1 UyarrMO Kalkanı teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır. 1 zayıflatılmış Koruyucu Lord Egnu [18], 1 Büyük Egnu, 3 KarartıcıHO ve 5 KarartıcıDO öldürülür. Hepsi önceki dövüşlerde olduğu gibi zayıflatılmış olur. 2 savaşçı, 2 şifacı, Rukham / Bakhasha ve Sheara yardım eder."
    },
    {
        title: "7. Aşama",
        text: "1 UyarrMO Miğferi ve 1 UyarrMO Omuzlukları teslim edilir. Ardından verilen Işınlanma Parşömeni kullanılır. 10’ar tane Lord Egnu, Büyük Egnu, General UyarrMO, KarartıcıHO, KarartıcıDO ve GunglHO öldürülür. Hepsi önceki dövüşlerde olduğu gibi zayıflatılmış olur. Şifacı, savaşçı, Rukham / Bakhasha ve Sheara yardım eder."
    }
]
},

  {
    id: "geceleyin-sizanlar-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Geceleyin Sızanlar Birliği",
    questName: "Geceleyin Sızanlar Hayran Görevi",
    level: 5,
    icon: madalyonPath + "geceleyin-hayran.gif",
    npc: "Pleanko / Korkusuz Kaleo",
    location: "Yabancılaşma Çölü / Bozkır Tarafı",
    shortInfo: "Cin küpleri ve kombo küp dönüşüm kaynakları.",
    requirementsTitle: "İstenen Cin Küpleri",
    requirements: getMercenaryRequirements(),
    sectionsTitle: "Kombo Küp Hesapları",
    sections: getComboCubeSections(),
    notesTitle: "Görev İpuçları",
    notes: [
        {
            title: "Cin Küpü Mantığı",
            text: "Görevde 50’şer adet cin küpü istenir. Her 1 Kombo-Kübü 4 adet cin küpü verdiği için 13 Kombo-Kübü 52 adet cin küpü verir."
        },
        {
            title: "İki Hayran İçin İpucu",
            text: "İki hayran görevi yapılacaksa her cin küpü türünden toplam 100 adet gerekir. 25’er Kombo-Kübü açmak iki hayran için yeterlidir."
        },
        {
            title: "Paralı Birlik Geçişi",
            text: "Geceleyin Sızanlar hayran görevi yapıldıktan sonra diğer paralı birlik tarafına geçmek mümkündür. Aksi halde tekrar mevcut paralı itibarı 3000 yapmak gerekmektedir. "
        },
        {
            title: "Paralı Not İpucu",
            text: "Paralı Birlik Olayında Paralı Asekerleri Keserek Düşüen Notları Biriktirerek Diğer paralı birlik itibarı 60 adet Paralı Not ile doğrudan 3000 itibara getirilebilir."
        }
    ]
},

{
    id: "tas-lotosu-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Taş Lotosu",
    questName: "Taş Lotosu Hayran Görevi",
    level: 5,
    icon: madalyonPath + "tas-lotosu-hayran.gif",
    npc: "Korkunç Lothar",
    location: "Aldatış Yamacı",
    shortInfo: "Cin küpleri ve kombo küp dönüşüm kaynakları.",
    requirementsTitle: "İstenen Cin Küpleri",
    requirements: getMercenaryRequirements(),
    sectionsTitle: "Kombo Küp Hesapları",
    sections: getComboCubeSections(),
    notesTitle: "Görev İpuçları",
    notes: [
        {
            title: "Irk Bilgisi",
            text: "Taş Lotosu insan tarafındaki paralı birliktir. Magmar tarafındaki karşılığı Kırmızı Baltalar olarak düşünülür."
        },
        {
            title: "Cin Küpü Mantığı",
            text: "Görevde 50’şer adet cin küpü istenir. Her 1 Kombo-Kübü 4 adet cin küpü verdiği için 13 Kombo-Kübü 52 adet cin küpü verir."
        },
        {
            title: "İki Hayran İçin İpucu",
            text: "Diğer paralı birlik hayranı da yapılacaksa 25’er Kombo-Kübü hazırlamak yeterlidir. Böylece ikinci görev için fazladan kaynak takaslamaya gerek kalmaz."
        },
        {
            title: "Paralı Not İpucu",
            text: "Diğer paralı birlik itibarı 60 adet Paralı Not ile doğrudan 3000 itibara getirilebilir."
        }
    ]
},

{
    id: "kirmizi-baltalar-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Kırmızı Baltalar",
    questName: "Kırmızı Baltalar Hayran Görevi",
    level: 5,
    icon: madalyonPath + "kirmizi-baltalar-hayran.gif",
    npc: "Kana Susamış Herb",
    location: "Karanlık Tepeler",
    shortInfo: "Cin küpleri ve kombo küp dönüşüm kaynakları.",
    requirementsTitle: "İstenen Cin Küpleri",
    requirements: getMercenaryRequirements(),
    sectionsTitle: "Kombo Küp Hesapları",
    sections: getComboCubeSections(),
    notesTitle: "Görev İpuçları",
    notes: [
        {
            title: "Irk Bilgisi",
            text: "Kırmızı Baltalar Magmar tarafındaki paralı birliktir. İnsan tarafındaki karşılığı Taş Lotosu olarak düşünülür."
        },
        {
            title: "Cin Küpü Mantığı",
            text: "Görevde 50’şer adet cin küpü istenir. Her 1 Kombo-Kübü 4 adet cin küpü verdiği için 13 Kombo-Kübü 52 adet cin küpü verir."
        },
        {
            title: "İki Hayran İçin İpucu",
            text: "Diğer paralı birlik hayranı da yapılacaksa 25’er Kombo-Kübü hazırlamak yeterlidir. Böylece ikinci görev için fazladan kaynak takaslamaya gerek kalmaz."
        },
        {
            title: "Paralı Not İpucu",
            text: "Diğer paralı birlik itibarı 60 adet Paralı Not ile doğrudan 3000 itibara getirilebilir."
        }
    ]
},
{
    id: "yeralti-sovalyeleri-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Yeraltı Şövalyeleri",
    questName: "Yeraltı Şövalyeleri Hayran Görevi",
    level: 5,
    icon: madalyonPath + "yeralti-hayran.gif",
    npc: "Bekçi Valderei / Koruyucu Sangred",
    location: "Cehennem Geçidi / Dağ Kenarı",
    shortInfo: "Görev 3 sertifika aşamasından oluşur.",

    requirements: [],
    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama",
            location: "Yeraltı Şövalyeleri'nin İlk Sertifikası için 250 adet Kristal Kömürü teslim edilir.",
            items: [
                item("Kristal Kömürü", "250", "kristal-komuru.png"),
                {
        type: "separator",
        text: "➡️"
    },
                item("Yeraltı Şövalyeleri'nin İlk Sertifikası","" ,"yeralti-sertifikasi.png")
            ]
        },

        {
            title: "2. Aşama",
            location: "Yeraltı Şövalyeleri'nin İkinci Sertifikası için 10 adet Geçmiş Kristal Mağarası Zaferi gerekir. Alternatif olarak 100 adet Göksel Alev Kıvılcımı kullanılabilir.",
            items: [
                
                      
                item("10 Geçmiş Kristal Mağarası Zaferi", "", "gecmis-kristal-magarasi-zaferi.png"), 
                  {
        type: "separator",
        text: "veya",
    },
                item("Göksel Alev Kıvılcımı", "100", "goksel-alev-kivilcimi.png"),
                   {
        type: "separator",
        text: " "
    },
                item("Yeraltı Şövalyeleri'nin İkinci Sertifikası","" , "yeralti-sertifikasi.png")
            ]
        },

        {
            title: "3. Aşama",
            location: "Yeraltı Şövalyeleri'nin Üçüncü Sertifikası için 50 adet Savaş Sertifikası teslim edilir.",
            items: [
                item("Savaş Sertifikası", "50", "savas-sertifikasi.png"),{
        type: "separator",
        text: "➡️"
    },
                item("Yeraltı Şövalyeleri'nin Üçüncü Sertifikası", "", "yeralti-sertifikasi.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "2. Aşama Alternatifi",
            text: "Her 10 adet Göksel Alev Kıvılcımı, 1 adet Geçmiş Kristal Mağarası Zaferi ilerletir. Bu nedenle 10 zafer yerine toplam 100 adet Göksel Alev Kıvılcımı teslim edilebilir."
        },
        {
            title: "3. Aşama Hesabı",
            text: "Her 1 adet Savaş Sertifikası için 10 adet Kafa Derisi teslim edilir. Bu yüzden 50 adet Savaş Sertifikası için toplam 500 adet Kafa Derisi gerekir."
        },
        {
            title: "Savaş Sertifikası",
            text: "Savaş Sertifikası, hayran olmadan önce diğer oyuncularla alınıp satılabilir. Hayran olduktan sonra ticareti kapanır."
        }
    ]
},

    {
        id: "kaderin-hukumdarlari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Kaderin Hükümdarları",
        questName: "Kaderin Hükümdarları Hayran Görevi",
        level: 5,
        icon: madalyonPath + "kaderin-hükümdarları-hayran.gif",
        npc: "Güncellenecek",
        location: "Güncellenecek",
        shortInfo: "Forumda güncellenecek olarak bırakılmış.",
        requirements: [],
        notes: [
            "Kaderin Hükümdarları Hayran görevi geldiğinde daha sonra güncellenecektir."
        ]
    },

    {
        id: "flaundin-sualti-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Flaudin Sualtı",
        questName: "Flaudin Sualtı Hayran Görevi",
        level: 6,
        icon: madalyonPath + "flaudin-hayran.gif",
        npc: "Akvarius",
        location: "Flaungard Sarayı",
        shortInfo: "Deniz Midyesi ve Boş Efril Çoğaltıcı teslimi.",
        requirements: [
            item("Deniz Midyesi", "550", "deniz-midyesi.png"),
            item("Boş Efril Çoğaltıcı", "", "bos-efril-cogaltici.png")
        ],
        notes: [
            "Boş Efril Makinesi Eski Nesne Arayıcıları mağazasından alınabilir.",
            "Yeterli onur yoksa Hayaller Çayırı / Aldatış Yamacı NPC'sinden 60 altına alınabilir."
        ]
    },

{
    id: "yaratik-avcilari-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Yaratık Avcıları",
    questName: "Yaratık Avcıları Hayran Görevi",
    level: 7,
    icon: madalyonPath + "yaratik-avcilari-hayran.gif",
    npc: "Paladin Shimon",
    location: "Hükümdarlar Mezarlığı / Kraliçe Mezarlığı",
    shortInfo: "Kara Cin elde edilip Paladin Shimon'a teslim edilir.",

    requirementsTitle: "Görev Hedefi",

    requirements: [
        item("Kara Cin", "1", "kara-cin.png")
    ],

    sectionsTitle: "Görev Akışı",

    sections: [
        {
            title: "1. Görevi Al",
            location: "Paladin Shimon",
            info: "Görev Paladin Shimon'dan alınır. Amaç Kara Cin'i bulup ona teslim etmektir.",
            items: [
                item("Kara Cin", "1", "kara-cin.png")
            ]
        },
        {
            title: "2. Giriş İçin Meşale Al",
            location: "Yeraltı İni / Yeraltı Mezarlığı girişi",
            info: "Yeraltı İni'ne girebilmek için Meşale gerekir. Meşaleyi sadece en az 500 Paralı Birlik Onuru olan oyuncular alabilir.",
            items: [
                item("Meşale", "1", "mesale.png")
            ]
        },
        {
            title: "3. Kadehe Tıklamadan Önce Ölümileri Temizle",
            location: "Yeraltı İni içi",
            info: "Kadehe tıklamadan önce konumdaki Ölümileri kesmek işi kolaylaştırır. Eğer Ölümileri önceden kesmediyseniz Kara Tutulma Tomarı ile rahatça temizleyebilirsiniz.",
            items: [
                item("Kara Tutulma Tomarı", "1 cep", "kara-tutulma-tomari.png")
            ]
        },
        {
    title: "4. Kadehe Tıkla ve Dövüşü Başlat",
    location: "Yeraltı İni'ndeki kadeh",
    info: "Ölümiler temizlendikten sonra kadehe tıklanır ve Öfkeli Ejderha dövüşü başlatılır.",
    previewImage: kaynakPath + "kadeh.png",
    previewAlt: "Yeraltı İni Kadehi",
    
},
        {
    title: "5. Öfkeli Ejderha'yı Kes",
    location: "Dövüş alanı",
    info: "Öfkeli Ejderha'yı rahat kesmek için 1 cep Korkusuzluk İksiri ve 1 cep Kara Büyüleri İndiren Tomar önerilir. Eğer avlandaki Ölümiler kesilmediyse Kara Tutulma Tomarı da yardımcı olur.",
    previewImage: kaynakPath + "ofkeli-ejderha.png",
    previewAlt: "Öfkeli Ejderha",
    items: [
        item("Korkusuzluk İksiri", "1 cep", "korkusuzluk-iksiri.png"),
        item("Kara Büyüleri İndiren Tomar", "1 cep", "kara-buyuleri-indiren-tomar.png"),
        item("Kara Tutulma Tomarı", "1 cep", "kara-tutulma-tomari.png")
    ]
},
        {
            title: "6. Kara Cin'i Elde Et",
            location: "Dövüş sonu",
            info: "Öfkeli Ejderha kesildikten sonra Kara Cin düşer. Kara Cin görevin teslim nesnesidir.",
            items: [
                item("Kara Cin", "1", "kara-cin.png")
            ]
        },
        {
            title: "7. Gerekirse Tekrar Çağırma",
            location: "Yeraltı İni",
            info: "Öfkeli Ejderha 30 dakika sonra yeniden doğar. Dövüş kaybedilirse tekrar çağırmak için Ölü Savaşçının Kafatası gerekir.",
            items: [
                item("Ölü Savaşçının Kafatası", "100", "olu-savascinin-kafatasi.png")
            ]
        }
    ],

    notesTitle: "Önemli Notlar",

    notes: [
        {
            title: "Görevin Asıl Amacı",
            text: "Amaç Öfkeli Ejderha dövüşünden Kara Cin'i elde edip Paladin Shimon'a teslim etmektir."
        },
        {
            title: "Meşale Şartı",
            text: "Yeraltı İni'ne / Yeraltı Mezarlığı'na giriş için Meşale gerekir. Meşale, en az 500 Paralı Birlik Onuru olan oyuncular tarafından alınabilir."
        },
        {
            title: "Ölümileri Önceden Kesmek",
            text: "Kadehe tıklamadan önce konumdaki Ölümiler kesilirse dövüş daha rahat olur. Ölümiler kesilmediyse Kara Tutulma Tomarı ile daha kolay temizlenebilir."
        },
        {
            title: "Öfkeli Ejderha",
            text: "Öfkeli Ejderha'yı rahat kesmek için 1 cep Korkusuzluk İksiri ve 1 cep Kara Büyüleri İndiren Tomar önerilir."
        },
        {
            title: "Kara Cin Dağılımı",
            text: "Kara Cin en çok hasar veren oyuncuya düşer. Bu yüzden görev yardımla yapılabilir ama nesne en çok hasarı vurana gider."
        },
        {
            title: "Yeniden Doğma",
            text: "Öfkeli Ejderha 30 dakika sonra yeniden doğar."
        },
        {
            title: "Tekrar Çağırma Maliyeti",
            text: "Dövüş kaybedilirse Öfkeli Ejderha'yı tekrar çağırmak için 100 adet Ölü Savaşçının Kafatası gerekir."
        }
    ]
},
    {
        id: "aladeya-tanricasi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Aladeya Tanrıçası",
        questName: "Aladeya Tanrıçası Hayran Görevi",
        level: 7,
        icon: madalyonPath + "aledeya-hayran.gif",
        npc: "Aladeya bağlantılı karakter",
        location: "Ölüm Kanyonu / Beron Bozkırları",
        shortInfo: "Bitki ve taş kaynakları teslimi.",
        requirements: [
            item("Sümbül Çiçeği", "2875", "sumbul-cicegi.png"),
            item("Ejderha Kanı Taşının Tozu", "12660", "ejderha-kani-tasinin-tozu.png"),
            item("İşlenebilir Taş", "5340", "islenebilir-tas.png")
        ],
        notes: []
    },

    {
        id: "olulerin-lanetlilerin-tanrisi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Ölülerin ve Lanetlilerin Tanrısı",
        questName: "Ölülerin ve Lanetlilerin Tanrısı Hayran Görevi",
        level: 7,
        icon: madalyonPath + "ölülerin-lanetlerin-hayran.gif",
        npc: "Ölülerin Tanrısı bağlantılı karakter",
        location: "Terk Edilmiş Mezarlık / Karanlık Türbe",
        shortInfo: "Balık, karışım ve yaprak teslimi.",
        requirements: [
            item("Billur Mersini Balığı", "4800", "billur-mersini-baligi.png"),
            item("Sümbül Çiçeği Karışımı", "450", "sumbul-cicegi-karisimi.png"),
            item("Gümüşümsü Yaprak", "11655", "gumusumsu-yaprak.png")
        ],
        notes: []
    },

    {
        id: "ulu-ejder-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Ulu Ejder",
        questName: "Ulu Ejder Hayran Görevi",
        level: 7,
        icon: madalyonPath + "ulu-ejder-hayran.gif",
        npc: "Ulu Ejder bağlantılı karakter",
        location: "Cehennem Geçidi / Dağ Kenarı",
        shortInfo: "Ejderha Kanı, mürekkep ve Sıvı Sedef teslimi.",
        requirements: [
            item("Ejderha Kanı", "3286", "ejderha-kani.png"),
            item("Sihirli Erguvani Mürekkep", "1845", "sihirli-erguvani-murekkep.png"),
            item("Sıvı Sedef", "7890", "sivi-sedef.png")
        ],
        notes: []
    },

   {
    id: "muazzam-dovus-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Muazzam Dövüş",
    questName: "Muazzam Dövüş Hayran Görevi",
    level: 7,
    icon: madalyonPath + "muazzam-hayran.gif",
    npc: "Kumandan Gadrivei / Kumandan Darofei",
    location: "Sartnog Arenası / O'Delvays Arenası",
    shortInfo: "Muazzam Dövüş hayran görevi 4 aşamalı teslim sistemiyle ilerler.",

    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama: Zafer veya Liderlik",
            location: "Kumandan Gadrivei / Kumandan Darofei",
            info: "Kumandan sizden Muazzam Dövüşlerde 1000 zafer veya 100 adet Muazzam Liderlik ister. Bunu tamamladıktan sonra tekrar kumandana dönülür.",
            items: [
                item("Muazzam Dövüş Zaferi", "1000", "muazzam-liderlik.png"),
                item("Muazzam Liderlik", "100", "muazzam-liderlik.png")
            ]
        },

        {
            title: "2. Aşama: Eleonora ve Ejderha Teslimleri",
            location: "Eleonora / Ejderha",
            info: "Eleonora'ya kombo küpleri ve Edal teslim edilir. Ejderha'ya ise Kafa Derisi götürülür. Sonrasında tekrar kumandana dönülür.",
            items: [
                item("Şeytani Kombo-Kübü", "30", "seytani-kombo-kubu.png"),
                item("İblis Kombo-Kübü", "5", "iblis-kombo-kubu.png"),
                item("Mührik İblis Kombo-Kübü", "1", "muhrik-iblis-kombo-kubu.png"),
                item("Edal", "30", "edal.png"),
                item("Kafa Derisi", "300", "kafa-derisi.png")
            ]
        },

        {
            title: "3. Aşama: Deri ve Metal Teslimi",
            location: "Görev teslim noktası",
            info: "Bu aşamada Ragtihron'un Derisi ve Kabarcıklı Metal teslim edilir.",
            items: [
                item("Ragtihron'un Derisi", "30", "ragtihronun-derisi.png"),
                item("Kabarcıklı Metal", "30", "kabarcikli-metal.png")
            ]
        },

        {
            title: "4. Aşama: Son Teslim",
            location: "Görev teslim noktası",
            info: "Son aşamada Öfkeli Göz ve Ölü Savaşçının Kafatası teslim edilir.",
            items: [
                item("Öfkeli Göz", "100", "ofkeli-goz.png"),
                item("Ölü Savaşçının Kafatası", "300", "olu-savascinin-kafatasi.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "Zafer veya Liderlik Seçeneği",
            text: "İlk aşamada 1000 Muazzam Dövüş Zaferi veya 100 adet Muazzam Liderlik yeterlidir. İkisinden birini tamamlamak gerekir."
        },
        {
            title: "Kumandana Dönüş",
            text: "İlk aşama tamamlandıktan sonra kumandana geri dönülür. Sonraki teslimlerde de aşama ilerlemesine göre tekrar kumandana dönmek gerekebilir."
        },
        {
            title: "Eleonora ve Ejderha Aşaması",
            text: "İkinci aşamada kombo küpleri ve Edal Eleonora'ya, Kafa Derisi ise Ejderha'ya götürülür."
        },
        {
            title: "Aşamalı Görev",
            text: "Bu görev tek seferlik düz kaynak teslimi gibi değil, aşama aşama ilerleyen bir hayran görevidir."
        }
    ]
},

    {
        id: "jaggernaut-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Jaggernaut",
        questName: "Jaggernaut Hayran Görevi",
        level: 11,
        icon: madalyonPath + "jaggernaut.gif",
        npc: "de'Barguil / Büyücü Grumil",
        location: "Meantro Köyü / Vahşet Ormanı",
        shortInfo: "Kaynakta detaylı bilgi için ayrı bağlantı verilmiş.",
        requirements: [],
        notes: [
            "Forumda bu görev için detaylı bilgi bağlantısı verilmiş.",
            "Kaynak listesi ayrıca çıkarılacak."
        ]
    },

    {
        id: "eldivler-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Eldivler",
        questName: "Eldivler Hayran Görevi",
        level: 11,
        icon: madalyonPath + "eldiv-hayran.gif",
        npc: "Feeri-a-Maya / Çuli-a-Veyna",
        location: "Eldivlerin Kulesi / Öfke Toprakları",
        shortInfo: "Sentrio ve Işıkdar teslimi.",
        requirements: [
            item("Sentrio", "400", "sentrio.png"),
            item("Işıkdar", "50", "isikdar.png")
        ],
        notes: []
    },

    {
        id: "kroffdorlar-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Kroffdorlar",
        questName: "Kroffdorlar Hayran Görevi",
        level: 11,
        icon: madalyonPath + "kroffdor-hayran.gif",
        npc: "Reodora / Dimedora",
        location: "Tremor Kasabası / Krofdorların Askeri Kampı",
        shortInfo: "İnkarnum ve Alevgir teslimi.",
        requirements: [
            item("İnkarnum", "400", "inkarnum.png"),
            item("Alevgir", "50", "alevgir.png")
        ],
        notes: []
    },

{
    id: "evcil-hayvan-koruyuculari-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Evcil Hayvan Koruyucuları",
    questName: "Evcil Hayvan Koruyucuları Hayran Görevi",
    level: 11,
    icon: madalyonPath + "evcil-hayvan-hayran.gif",
    npc: "Tatlı Boniya / Tatlı Mily",
    location: "Ankrivar Köyü / Kimzala Köyü",
    shortInfo: "Evcil Hayvan Koruyucuları hayran görevi 5 aşamalı kaynak ve dövüş sistemiyle ilerler.",

    requirements: [],

    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama: Evcil Hayvan Kaynakları",
            location: "Tatlı Boniya / Tatlı Mily",
            info: "İlk aşamada evcil hayvan kaynakları teslim edilir.",
            items: [
                item("Elt Giambir Tohumları", "100", "elt-giambir-tohumlari.png"),
                item("Yavru Habus Havyarı", "100", "yavru-habus-havyari.png"),
                item("Eldoril'in Saf Kristalleri", "100", "eldorilin-saf-kristalleri.png")
            ]
        },

        {
            title: "2. Aşama: Ludiyal Zincir Halkası",
            location: "Tatlı Boniya / Tatlı Mily",
            info: "İkinci aşamada Ludiyal Zincir Halkası teslim edilir.",
            items: [
                item("Ludiyal Zincir Halkası", "50", "ludiyal-zincir-halkasi.png")
            ]
        },

        {
    title: "3. Aşama: Alternatif Teslim",
    location: "Tatlı Boniya / Tatlı Mily",
    info: "Bu aşamada 10 adet Mührik İblis Kombo-Kübü veya alternatif olarak 190 adet Kristal Kömürü teslim edilebilir.",
    items: [
        item("Mührik İblis Kombo-Kübü", "10", "muhrik-iblis-kombo-kubu.png"),
        {
            type: "separator",
            text: "veya"
        },
        item("Kristal Kömürü", "190", "kristal-komuru.png")
    ]
},

        {
            title: "4. Aşama: Hayat Cevheri",
            location: "Tatlı Boniya / Tatlı Mily",
            info: "Dördüncü aşamada Hayat Cevheri teslim edilir.",
            items: [
                item("Hayat Cevheri", "500", "hayat-cevheri.png")
            ]
        },

        {
            title: "5. Aşama: Ölü Su ve Büyücü Belinda",
            location: "Sınır Bölgesi(Bayan Günevra) /Rüzgar Toprakları (Bayan Kordalya) ve Laboratuvar",
            info: "Son aşamada 5 adet Ölümsüz Öldürücü İksir karşılığında Ölü Su alınır. Ölü Su, Laboratuvar'a girildikten sonra ceplere eklenir ve Büyücü Belinda dövüşünde kullanılır.",
            items: [
                item("Ölümsüz Öldürücü İksir", "5", "olumsuz-oldurucu-iksir.png"),
                {
        type: "separator",
        text: "➡️"
    },
                item("Ölü Su", "1", "olu-su.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "Alternatif Teslim",
            text: "Üçüncü aşamada 10 adet Mührik İblis Kombo-Kübü yerine 190 adet Kristal Kömürü teslim edilebilir."
        },
        {
            title: "Ölü Su Aşaması",
            text: "Bayan Günevra / Bayan Kordalya, Büyücü Belinda'yı kesebilmek için gerekli olan Ölü Su iksirini 5 adet Ölümsüz Öldürücü İksir karşılığında verir."
        },
        {
            title: "Laboratuvar Kullanımı",
            text: "Ölü Su alındıktan sonra Laboratuvar'a girilir. Ölü Su ceplere eklenerek Büyücü Belinda dövüşünde kullanılır."
        },
        {
            title: "Görev Tamamlama",
            text: "Büyücü Belinda aşaması tamamlandıktan sonra Evcil Hayvan Koruyucuları hayran görevi tamamlanır."
        }
    ]
},

    {
    id: "golge-avcilari-hayran",
    medal: "hayran",
    medalLabel: "Hayran Madalyonu",
    reputation: "Gölge Avcıları",
    questName: "Gölge Avcıları Hayran Görevi",
    level: 11,
    icon: madalyonPath + "golge-hayran.gif",
    npc: "Akselyan",
    location: "Beyaz Kale",
    shortInfo: "Gölge kaynakları toplanır, Maltız kullanılır ve son aşamada Halifron Ruhu yenilir.",

    requirements: [],

    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama: Gölge Kaynakları",
            location: "Akselyan / Beyaz Kale",
            info: "İlk aşamada gerekli gölge kaynakları teslim edilir.",
            items: [
                item("Kara Gölge", "100", "kara-golge.png"),
                item("Tehditkar Gölge", "30", "tehditkar-golge.png"),
                item("Ölümcül Gölge", "5", "olumcul-golge.png"),
                item("Ölü Kalp", "3", "olu-kalp.png"),
                item("Edera Çelengi", "1", "edera-celengi.png")
            ]
        },

        {
            title: "2. Aşama: Maltız Kullanımı",
            location: "Sisli Adalar",
            info: "Maltız, Sisli Adalar’daki uygun bölgelerde kullanılır. Oradaki yaratıkları yendikten sonra tekrar Akselyan’a dönülür.(Denizanası Vadisi, Daykonların Adası, Gök Mavisi Göl, Dev Kırkayak Sahilleri, Sessizlik Boğazı'nda kullanılabilir!)",
            items: [
                item("Maltız", "1", "maltiz.png")
            ]
        },

        {
            title: "3. Aşama: Halifron Ruhu",
            location: "Beyaz Kayalıklar",
            info: "Beyaz Kayalıklar’da Maltız kullanılarak Halifron Ruhu [21] çağrılır ve yenilir. Ardından tekrar Akselyan’a dönülür.(Savaşta yaratığı kolay kesebilmeniz için Gölge Avcılarının Hediyesi efekti verilecek. Savaşta kullanmak için cebinize 1 adet Mutlak Zayıflık Tozu koyabilirsiniz.)",
            items: [
                item("Maltız", "", "maltiz.png"),
                item("Mutlak Zayıflık Tozu", "1 Cep", "mutlak-zayiflik-tozu.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "Maltız'ın Kullanılabildiği Bölgeler",
            text: "Maltız; Denizanası Vadisi, Daykonların Adası, Gök Mavisi Göl, Dev Kırkayak Sahilleri ve Sessizlik Boğazı bölgelerinde kullanılabilir."
        },
        {
            title: "Halifron Ruhu Aşaması",
            text: "Beyaz Kayalıklar’da Maltız kullanılarak Halifron Ruhu [21] çağrılır ve yenilir."
        },
        {
            title: "Savaş Yardımı",
            text: "Halifron Ruhu savaşında yaratığı daha kolay kesebilmeniz için Gölge Avcılarının Hediyesi etkisi verilir."
        },
        {
            title: "Ek Yardımcı Eşya",
            text: "Savaşta kullanmak için çantanıza 1 adet Mutlak Zayıflık Tozu koyabilirsiniz."
        },
        {
            title: "Görev Tamamlama",
            text: "Halifron Ruhu yenildikten sonra Akselyan’a geri dönülür ve hayran görevi tamamlanır."
        }
    ]
},

    {
        id: "su-tanrisi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Su Tanrısı",
        questName: "Su Tanrısı Hayran Görevi",
        level: 11,
        icon: madalyonPath + "su-tanrisi-hayran.gif",
        npc: "Nimfiyus",
        location: "Denizanası Vadisi",
        shortInfo: "Karışım, toz, mürekkep, esans ve Su Küresi teslimi.",
        requirements: [
            item("Kır Çiçeği Karışımı", "500", "kir-cicegi-karisimi.png"),
            item("Septoris Karışımı", "500", "septoris-karisimi.png"),
            item("Zümrütüs Tozu", "12500", "zumrutus-tozu.png"),
            item("Dağ Lakiri Tozu", "12500", "dag-lakiri-tozu.png"),
            item("Kan Kırmızı Mürekkep", "1389", "kan-kirmizi-murekkep.png"),
            item("Şo Esansı", "1389", "so-esansi.png"),
            item("Su Küresi", "150", "su-kuresi.png"),
            item("Küçük Başarı İksiri", "20", "kucuk-basari-iksiri.png")
        ],
        notes: []
    },

    {
        id: "hava-tanrisi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Hava Tanrısı",
        questName: "Hava Tanrısı Hayran Görevi",
        level: 11,
        icon: madalyonPath + "hava-tanrisi-hayran.gif",
        npc: "Sulfiyus",
        location: "Beyaz Kayalıklar",
        shortInfo: "Karışım, toz, mürekkep, esans ve Hava Küresi teslimi.",
        requirements: [
            item("İrvis Karışımı", "500", "irvis-karisimi.png"),
            item("Tekora Karışımı", "500", "tekora-karisimi.png"),
            item("Armediyan Tozu", "12500", "armediyan-tozu.png"),
            item("Karyatit Tozu", "12500", "karyatit-tozu.png"),
            item("Deniz Mavisi Mürekkep", "1389", "deniz-mavisi-murekkep.png"),
            item("Mavi Kıskaç Esansı", "1389", "mavi-kiskac-esansi.png"),
            item("Hava Küresi", "150", "hava-kuresi.png"),
            item("Küçük Başarı İksiri", "20", "kucuk-basari-iksiri.png")
        ],
        notes: []
    },

    {
        id: "hair-koruyuculari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Hair Koruyucuları",
        questName: "Hair Koruyucuları Hayran Görevi",
        level: 11,
        icon: madalyonPath + "hair-koruyuculari-hayran.gif",
        npc: "Güncellenecek",
        location: "Güncellenecek",
        shortInfo: "Forumda güncellenecek olarak bırakılmış.",
        requirements: [],
        notes: [
            "Hayran Görevi Geldiğinde Güncellenecektir."
        ]
    },
{
        id: "ogriy-koruyuculari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Hair Koruyucuları",
        questName: "Hair Koruyucuları Hayran Görevi",
        level: 11,
        icon: madalyonPath + "ogriy-koruyuculari-hayran.gif",
        npc: "Güncellenecek",
        location: "Güncellenecek",
        shortInfo: "Forumda güncellenecek olarak bırakılmış.",
        requirements: [],
        notes: [
            "Hayran Görevi Geldiğinde Güncellenecektir."
        ]
    },

 {
    id: "mistik-gorev",
    medal: "ozel",
    medalLabel: "Özel Görev",
    reputation: "Mistik",
    questName: "Mistik Görevi",
    level: 12,
    icon: madalyonPath + "mistik-hayran.gif",
    npc: "Kari",
    location: "Avgrelon Kasabası / Yabani Otlar Toprakları",
    shortInfo: "Mistik görevi aşama aşama çoklu kaynak teslimlerinden oluşur.",

    requirements: [],

    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama: Metal ve Deri Teslimi",
            location: "Kari",
            info: "İlk aşamada Kabarcıklı Metal ve Ragtihron'un Derisi teslim edilir.",
            items: [
                item("Kabarcıklı Metal", "500", "kabarcikli-metal.png"),
                item("Ragtihron'un Derisi", "500", "ragtihronun-derisi.png")
            ]
        },

        {
            title: "2. Aşama: Uyits Tesbih Böceği",
            location: "Kari",
            info: "İkinci aşamada Uyits Tesbih Böceği teslim edilir.",
            items: [
                item("Uyits Tesbih Böceği", "15", "uyits-tesbih-bocegi.png")
            ]
        },

        {
            title: "3. Aşama: 3000'erlik Toplama Aşaması",
            location: "Kari",
            info: "Bu aşamada aşağıdaki kaynakların her birinden 3000 adet teslim edilir.",
            items: [
                item("Korganit", "3000", "korganit.png"),
                item("Armediyant", "3000", "armediyant.png"),
                item("Zümrütüs", "3000", "zumrutus.png"),
                item("Sersemletici Arakşa", "3000", "sersemletici-araksa.png"),
                item("Kır Çiçeği", "3000", "kir-cicegi.png"),
                item("Gül Pembesi İrvis", "3000", "gul-pembesi-irvis.png"),
                item("Zebra Balığı", "3000", "zebra-baligi.png"),
                item("Çizgili Melek Balığı", "3000", "cizgili-melek-baligi.png"),
                item("Çizgili Japon Balığı", "3000", "cizgili-japon-baligi.png")
            ]
        },

        {
            title: "4. Aşama: Bodurların Sikkesi",
            location: "Kari",
            info: "Dördüncü aşamada Bodurların Sikkesi teslim edilir.",
            items: [
                item("Bodurların Sikkesi", "5000", "bodurlarin-sikkesi.png")
            ]
        },

        {
            title: "5. Aşama: Kombo-Küpleri",
            location: "Kari",
            info: "Beşinci aşamada her kombo-kübü türünden 250 adet teslim edilir.",
            items: [
                item("Şeytani Kombo-Kübü", "250", "seytani-kombo-kubu.png"),
                item("İblis Kombo-Kübü", "250", "iblis-kombo-kubu.png"),
                item("Mührik İblis Kombo-Kübü", "250", "muhrik-iblis-kombo-kubu.png")
            ]
        },

        {
            title: "6. Aşama: Eski Kemik",
            location: "Kari",
            info: "Son aşamada Eski Kemik teslim edilir.",
            items: [
                item("Eski Kemik", "3000", "eski-kemik.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "Aşamalı Görev Yapısı",
            text: "Mistik görevi tek seferde verilen düz bir kaynak listesi değildir; adım adım ilerleyen bir özel görev yapısına sahiptir."
        },
        {
            title: "3000'lik Kaynak Aşaması",
            text: "Üçüncü aşamada listelenen tüm kaynakların her birinden ayrı ayrı 3000 adet teslim edilmesi gerekir."
        },
        {
            title: "Kombo-Küpü Aşaması",
            text: "Beşinci aşamada Şeytani, İblis ve Mührik İblis Kombo-Küplerinin her birinden 250 adet istenir."
        },
        {
            title: "Görev Tamamlama",
            text: "Son aşamada 3000 adet Eski Kemik teslim edildikten sonra görev tamamlanır."
        }
    ]
},

    {
    id: "korucu-gorev",
    medal: "ozel",
    medalLabel: "Özel Görev",
    reputation: "Korucu",
    questName: "Korucu Görevi",
    level: 15,
    icon: madalyonPath + "korucu-hayran.gif",
    npc: "Ormancı Haryen / Ormancı Vaslav",
    location: "Zyigolt Ormanı / Işıldayan Orman Kenarı",
    shortInfo: "Korucu görevi Avcı Ustalık Simgesi ve evcil hayvan temsilcilerine yapılan aşamalı teslimlerden oluşur.",

    requirements: [],

    sectionsTitle: "Görev Aşamaları",

    sections: [
        {
            title: "1. Aşama: Avcı Ustalık Simgesi",
            location: "Ormancı Haryen / Ormancı Vaslav",
            info: "İlk aşamada Korucuya 100 adet Avcı Ustalık Simgesi getirilir. Tamamlandıktan sonra tekrar korucuya dönülür.",
            items: [
                item("Avcı Ustalık Simgesi", "100", "avci-ustalik-simgesi.png")
            ]
        },

        {
            title: "2. Aşama: Evcil Hayvan Temsilcilerine Teslim",
            location: "Tatlı Boniya / Tatlı Mily",
            info: "İkinci aşamada ırkınızın evcil hayvan temsilcisine gerekli kaynaklar teslim edilir.",
            items: [
                item("Baharatlı Hibiskus Kökü", "12", "baharatli-hibiskus-koku.png"),
                item("Edal", "140", "edal.png"),
                item("Kalitesiz Efril", "2760", "kalitesiz-efril.png"),
                item("Öfkeli Göz", "433", "ofkeli-goz.png"),
                item("Keder Çiçeği", "4600", "keder-cicegi.png"),
                item("Ateş Çiçeği", "4650", "ates-cicegi.png")
            ]
        }
    ],

    notesTitle: "Görev Notları",

    notes: [
        {
            title: "Görevin Görünmesi",
            text: "Görevin görünmesi için çantanızda 12 adet Baharatlı Hibiskus Kökü bulunması gerekir."
        },
        {
            title: "İlk Aşama",
            text: "İlk aşamada 100 adet Avcı Ustalık Simgesi korucuya teslim edilir ve ardından tekrar görev veren NPC'ye dönülür."
        },
        {
            title: "İkinci Aşama",
            text: "İkinci aşamada ırkınızın evcil hayvan temsilcisine gerekli kaynaklar teslim edilir."
        },
        {
            title: "Teslim NPC'leri",
            text: "Magmar için Tatlı Boniya, insan ırkı için Tatlı Mily teslim noktasıdır."
        }
    ]
},
    {
        id: "zurhass-gorev",
        medal: "ozel",
        medalLabel: "Özel Görev",
        reputation: "Zurhass'ın Takipçileri",
        questName: "Zurhass'ın Takipçileri Görevi",
        level: 16,
        icon: madalyonPath + "zurhass-hayran.gif",
        npc: "Tüccar Zarrukhs",
        location: "Uzborg / Bazgaryo",
        shortInfo: "Zurhass sunağına kaynak bağışı.",
        requirements: [
            item("Maurin Madeni Parası", "333", "maurin-madeni-parasi.png"),
            item("Büyük Askeri Yazıt", "333", "buyuk-askeri-yazit.png"),
            item("Ritüel Mum", "3", "rituel-mum.png")
        ],
        notes: [
            "Ritüel Mum, Tüccar Tao Mun mağazasından alınabilir."
        ]
    },

    {
        id: "miuri-tao-gorev",
        medal: "ozel",
        medalLabel: "Özel Görev",
        reputation: "Miuri Tao",
        questName: "Miuri Tao Görevi",
        level: 16,
        icon: madalyonPath + "miuri-hayran.gif",
        npc: "Maurin İdölü",
        location: "Tempeler / Flezendal",
        shortInfo: "Miuri Tao sunağına kaynak bağışı.",
        requirements: [
            item("Zarlog Madeni Parası", "333", "zarlog-madeni-parasi.png"),
            item("Şafak Öncesi Çiy", "333", "safak-oncesi-ciy.png"),
            item("Ritüel Mum", "3", "rituel-mum.png")
        ],
        notes: [
            "Ritüel Mum, Tüccar Tao Mun mağazasından alınabilir."
        ]
    },
    {
        id: "büyü-koruyucu-hayran",
        medal: "hayran",
        medalLabel: "Özel Görev",
        reputation: "Büyü Koruyucuları",
        questName: "Büyü Koruyucuları Hayran",
        level: 16,
        icon: madalyonPath + "büyü-koruyucu-hayran.gif",
        npc: "Maurin İdölü",
        location: "Tempeler / Flezendal",
        shortInfo: "Miuri Tao sunağına kaynak bağışı.",
        requirements: [
            item("Krofdor'ların El Yazıları", "40", "krofdorlarin-el-yazilari.png"),
            item("Eldiv'lerin El Yazıları", "30", "eldivlerin-el-yazilari.png"),
            item("Elf'lerin El Yazıları", "20", "elflerin-el-yazilari.png"),
            item("Dağ Sakinleri El Yazıları", "10", "dag-sakinleri-el-yazilari.png")
        
        ],
        notes: [
            ""
        ]
    }
];