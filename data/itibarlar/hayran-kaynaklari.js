const kaynakPath = "../../assents/images/kaynaklar/";
const madalyonPath = "../../assents/images/madalyonlar/"
function item(name, amount, image) {
    return {
        name: name,
        amount: amount,
        image: kaynakPath + image
    };
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
        shortInfo: "Olağanüstü Kum Tanesi teslimi.",
        requirements: [
            item("Olağanüstü Kum Tanesi", "1000", "olaganustu-kum-tanesi.png"),
            item("Harika Cam", "8350 - 25000", "harika-cam.png"),
            item("Ufalama Tomarı", "334 - 1000", "ufalama-tomari.png")
        ],
        notes: [
            "Olağanüstü Kum Tanesi elde etmek için Harika Cam ve Ufalama Tomarı gerekir.",
            "Miktarlar en iyi ve en kötü ihtimale göre değişebilir."
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
        icon: madalyonPath + "iyilikhayran.png",
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
        icon: kaynakPath + "kaos-emlidir-madalyonu.png",
        npc: "Nöbetçi Rutendam / Kaptan Beckly",
        location: "Kuzey Karakolu / Güney Karakolu",
        shortInfo: "Kaos madalyonları, iksirler, UyarrMO parçaları ve zorlu dövüşler.",
        requirements: [
            item("Kaos Emlidir Madalyonu", "20", "kaos-emlidir-madalyonu.png"),
            item("Kaos Emşeliyi Madalyonu", "10", "kaos-emseliyi-madalyonu.png"),
            item("Kaos Çüg İksiri", "400", "kaos-cug-iksiri.png"),
            item("Kaos Ripmav İksiri", "300", "kaos-ripmav-iksiri.png"),
            item("Kaos Nak İksiri", "100", "kaos-nak-iksiri.png"),
            item("Kaos Tayah İksiri", "300", "kaos-tayah-iksiri.png"),
            item("Kaos Ved İksiri", "150", "kaos-ved-iksiri.png"),
            item("Kaos Dokart İksiri", "25", "kaos-dokart-iksiri.png"),
            item("UyarrMO Kılıcı", "1", "uyarrmo-kilici.png"),
            item("UyarrMO Kalkanı", "1", "uyarrmo-kalkani.png"),
            item("UyarrMO Miğferi", "1", "uyarrmo-migferi.png"),
            item("UyarrMO Omuzlukları", "1", "uyarrmo-omuzluklari.png")
        ],
        notes: [
            "Dövüşler zorlu olabilir.",
            "Ölürsen dövüş sona erebilir.",
            "Tekrar başlamak için parşömen kullanılır; ikinci kez kaynak teslimi gerekmez."
        ]
    },

    {
        id: "geceleyin-sizanlar-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Geceleyin Sızanlar Birliği",
        questName: "Geceleyin Sızanlar Hayran Görevi",
        level: 5,
        icon: kaynakPath + "seytani-kombo-kubu.png",
        npc: "Pleanko / Korkusuz Kaleo",
        location: "Yabancılaşma Çölü / Bozkır Tarafı",
        shortInfo: "Kombo küplerinin dönüşüm kaynakları.",
        requirements: [
            item("Şeytani Kombo-Kübü", "13", "seytani-kombo-kubu.png"),
            item("İblis Kombo-Kübü", "13", "iblis-kombo-kubu.png"),
            item("Mührik İblis Kombo-Kübü", "13", "muhrik-iblis-kombo-kubu.png")
        ],
        sections: [
            {
                title: "13 Şeytani Kombo-Kübü İçin",
                location: "Dönüşüm kaynakları",
                items: [
                    item("Deve Dikeni Karışımı", "1300", "deve-dikeni-karisimi.png"),
                    item("Ökse Otu Karışımı", "1300", "okse-otu-karisimi.png"),
                    item("Yonca Karışımı", "1300", "yonca-karisimi.png"),
                    item("Akik Taşı Tozu", "13000", "akik-tasi-tozu.png"),
                    item("Akuamarin Taşı Tozu", "13000", "akuamarin-tasi-tozu.png"),
                    item("Firuze Taşı Tozu", "13000", "firuze-tasi-tozu.png"),
                    item("Küçük Işıldayan Kristal", "130", "kucuk-isildayan-kristal.png")
                ]
            },
            {
                title: "13 İblis Kombo-Kübü İçin",
                location: "Dönüşüm kaynakları",
                items: [
                    item("Sihirli Kırmızı Mürekkep", "3900", "sihirli-kirmizi-murekkep.png"),
                    item("Sihirli Yeşil Mürekkep", "3900", "sihirli-yesil-murekkep.png"),
                    item("Binbiryaprak Otu Karışımı", "1300", "binbiryaprak-otu-karisimi.png"),
                    item("Ametist Taşı Tozu", "13000", "ametist-tasi-tozu.png"),
                    item("Işıldayan Kristal", "130", "isildayan-kristal.png")
                ]
            },
            {
                title: "13 Mührik İblis Kombo-Kübü İçin",
                location: "Dönüşüm kaynakları",
                items: [
                    item("Sihirli Mavi Mürekkep", "2600", "sihirli-mavi-murekkep.png"),
                    item("Zümrüt Tozu", "13000", "zumrut-tozu.png"),
                    item("Topaz Tozu", "13000", "topaz-tozu.png"),
                    item("Anemon Çiçeği Karışımı", "130", "anemon-cicegi-karisimi.png"),
                    item("Adamotu Karışımı", "130", "adamotu-karisimi.png")
                ]
            }
        ],
        notes: [
            "Görevi bitirmek için 3000 itibara sahip olmak gerekir.",
            "Diğer paralı birlik itibarına geçildiyse tekrar 3000 itibara ulaşmak gerekebilir."
        ]
    },

    {
        id: "kirmizi-baltalar-tas-lotosu-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Kırmızı Baltalar & Taş Lotosu",
        questName: "Kırmızı Baltalar / Taş Lotosu Hayran Görevi",
        level: 5,
        icon: kaynakPath + "iblis-kombo-kubu.png",
        npc: "Kana Susamış Herb / Korkunç Lothar",
        location: "Karanlık Tepeler / Aldatış Yamacı",
        shortInfo: "Kombo küplerinin toplam dönüşüm kaynakları.",
        requirements: [
            item("Şeytani Kombo-Kübü", "13", "seytani-kombo-kubu.png"),
            item("İblis Kombo-Kübü", "13", "iblis-kombo-kubu.png"),
            item("Mührik İblis Kombo-Kübü", "13", "muhrik-iblis-kombo-kubu.png")
        ],
        sections: [
            {
                title: "13 Şeytani Kombo-Kübü İçin",
                location: "Toplam dönüşüm kaynakları",
                items: [
                    item("Deve Dikeni Karışımı", "1300", "deve-dikeni-karisimi.png"),
                    item("Ökse Otu Karışımı", "1300", "okse-otu-karisimi.png"),
                    item("Yonca Karışımı", "1300", "yonca-karisimi.png"),
                    item("Akik Taşı Tozu", "13000", "akik-tasi-tozu.png"),
                    item("Akuamarin Taşı Tozu", "13000", "akuamarin-tasi-tozu.png"),
                    item("Firuze Taşı Tozu", "13000", "firuze-tasi-tozu.png"),
                    item("Küçük Işıldayan Kristal", "130", "kucuk-isildayan-kristal.png")
                ]
            },
            {
                title: "13 İblis Kombo-Kübü İçin",
                location: "Toplam dönüşüm kaynakları",
                items: [
                    item("Sihirli Kırmızı Mürekkep", "3900", "sihirli-kirmizi-murekkep.png"),
                    item("Sihirli Yeşil Mürekkep", "3900", "sihirli-yesil-murekkep.png"),
                    item("Binbiryaprak Otu Karışımı", "1300", "binbiryaprak-otu-karisimi.png"),
                    item("Ametist Taşı Tozu", "13000", "ametist-tasi-tozu.png"),
                    item("Işıldayan Kristal", "130", "isildayan-kristal.png")
                ]
            },
            {
                title: "13 Mührik İblis Kombo-Kübü İçin",
                location: "Toplam dönüşüm kaynakları",
                items: [
                    item("Sihirli Mavi Mürekkep", "2600", "sihirli-mavi-murekkep.png"),
                    item("Zümrüt Tozu", "13000", "zumrut-tozu.png"),
                    item("Topaz Tozu", "13000", "topaz-tozu.png"),
                    item("Anemon Çiçeği Karışımı", "130", "anemon-cicegi-karisimi.png"),
                    item("Adamotu Karışımı", "130", "adamotu-karisimi.png")
                ]
            }
        ],
        notes: [
            "Görevi bitirmek için 3000 itibara sahip olmak gerekir."
        ]
    },

    {
        id: "yeralti-sovalyeleri-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Yeraltı Şövalyeleri",
        questName: "Yeraltı Şövalyeleri Hayran Görevi",
        level: 5,
        icon: kaynakPath + "kristal-komuru.png",
        npc: "Bekçi Valderei / Koruyucu Sangred",
        location: "Cehennem Geçidi / Dağ Kenarı",
        shortInfo: "Üç sertifika üzerinden ilerler.",
        requirements: [
            item("Kristal Kömürü", "250", "kristal-komuru.png"),
            item("Geçmiş Kristal Mağarası Zaferi", "10", "gecmis-kristal-magarasi-zaferi.png"),
            item("Göksel Alev Kıvılcımı", "100", "goksel-alev-kivilcimi.png"),
            item("Savaş Sertifikası", "50", "savas-sertifikasi.png"),
            item("Kafa Derisi", "500", "kafa-derisi.png")
        ],
        notes: [
            "10 Göksel Alev Kıvılcımı 1 zafer ilerletir.",
            "10 Kafa Derisi 1 Savaş Sertifikası verir.",
            "Savaş Sertifikası diğer oyunculardan satın alınabilir."
        ]
    },

    {
        id: "kaderin-hukumdarlari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Kaderin Hükümdarları",
        questName: "Kaderin Hükümdarları Hayran Görevi",
        level: 5,
        icon: kaynakPath + "guncellenecek.png",
        npc: "Güncellenecek",
        location: "Güncellenecek",
        shortInfo: "Forumda güncellenecek olarak bırakılmış.",
        requirements: [],
        notes: [
            "Kaynakta bu görev henüz güncellenecek olarak görünüyor."
        ]
    },

    {
        id: "flaundin-sualti-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Flaudin Sualtı",
        questName: "Flaudin Sualtı Hayran Görevi",
        level: 6,
        icon: kaynakPath + "deniz-midyesi.png",
        npc: "Akvarius",
        location: "Flaungard Sarayı",
        shortInfo: "Deniz Midyesi ve Boş Efril Çoğaltıcı teslimi.",
        requirements: [
            item("Deniz Midyesi", "550", "deniz-midyesi.png"),
            item("Boş Efril Çoğaltıcı", "1", "bos-efril-cogaltici.png")
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
        icon: kaynakPath + "kara-cin.png",
        npc: "Paladin Shimon",
        location: "Hükümdarlar Mezarlığı / Kraliçe Mezarlığı",
        shortInfo: "Kara Cin, Meşale ve Öfkeli Ejderha dövüşü.",
        requirements: [
            item("Kara Cin", "1", "kara-cin.png"),
            item("Meşale", "1", "mesale.png"),
            item("Ölü Savaşçının Kafatası", "100", "olu-savascinin-kafatasi.jpg"),
            item("Korkusuzluk İksiri", "1 cep", "korkusuzluk-iksiri.png"),
            item("Kara Büyüleri İndiren Tomar", "1 cep", "kara-buyuleri-indiren-tomar.png"),
            item("Kara Tutulma Tomarı", "1 cep", "kara-tutulma-tomari.png")
        ],
        notes: [
            "Kara Cin en çok hasar veren oyuncuya düşer; nesne devirlidir.",
            "Dövüş kaybedilirse Öfkeli Ejderha'yı tekrar çağırmak için 100 kafatası gerekir.",
            "Yeraltı Mezarlığı'na girmek için Meşale gerekir."
        ]
    },

    {
        id: "aladeya-tanricasi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Aladeya Tanrıçası",
        questName: "Aladeya Tanrıçası Hayran Görevi",
        level: 7,
        icon: kaynakPath + "sumbul-cicegi.png",
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
        icon: kaynakPath + "billur-mersini-baligi.png",
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
        icon: kaynakPath + "ejderha-kani.png",
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
        icon: kaynakPath + "muazzam-dovus-zaferi.png",
        npc: "Kumandan Gadrivei / Kumandan Darofei",
        location: "Sartnog Arenası / O'Delvays Arenası",
        shortInfo: "Zafer/liderlik, kombo küpleri ve savaş kaynakları.",
        requirements: [
            item("Muazzam Dövüş Zaferi", "1000", "muazzam-dovus-zaferi.png"),
            item("Muazzam Liderlik", "100", "muazzam-liderlik.png"),
            item("Şeytani Kombo-Kübü", "30", "seytani-kombo-kubu.png"),
            item("İblis Kombo-Kübü", "5", "iblis-kombo-kubu.png"),
            item("Mührik İblis Kombo-Kübü", "1", "muhrik-iblis-kombo-kubu.png"),
            item("Edal", "30", "edal.png"),
            item("Kafa Derisi", "300", "kafa-derisi.png"),
            item("Ragtihron'un Derisi", "30", "ragtihronun-derisi.png"),
            item("Kabarcıklı Metal", "30", "kabarcikli-metal.png"),
            item("Öfkeli Göz", "100", "ofkeli-goz.png"),
            item("Ölü Savaşçının Kafatası", "300", "olu-savascinin-kafatasi.jpg")
        ],
        notes: [
            "1000 zafer veya 100 Muazzam Liderlik yeterlidir."
        ]
    },

    {
        id: "jaggernaut-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Jaggernaut",
        questName: "Jaggernaut Hayran Görevi",
        level: 11,
        icon: kaynakPath + "jaggernaut.png",
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
        icon: kaynakPath + "sentrio.png",
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
        icon: kaynakPath + "inkarnum.png",
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
        icon: kaynakPath + "elt-giambir-tohumlari.png",
        npc: "Tatlı Boniya / Tatlı Mily",
        location: "Ankrivar Köyü / Kimzala Köyü",
        shortInfo: "Evcil hayvan kaynakları ve son aşamada Ölü Su iksiri.",
        requirements: [
            item("Elt Giambir Tohumları", "100", "elt-giambir-tohumlari.png"),
            item("Yavru Habus Havyarı", "100", "yavru-habus-havyari.png"),
            item("Eldoril'in Saf Kristalleri", "100", "eldorilin-saf-kristalleri.png"),
            item("Ludiyal Zincir Halkası", "50", "ludiyal-zincir-halkasi.png"),
            item("Mührik İblis Kombo-Kübü", "10", "muhrik-iblis-kombo-kubu.png"),
            item("Kristal Kömürü", "190", "kristal-komuru.png"),
            item("Hayat Cevheri", "500", "hayat-cevheri.png"),
            item("Ölümsüz Öldürücü İksir", "5", "olumsuz-oldurucu-iksir.png"),
            item("Ölü Su", "1", "olu-su.png")
        ],
        notes: [
            "10 Mührik İblis Kombo-Kübü veya 190 Kristal Kömürü alternatif olarak kullanılabilir.",
            "Ölü Su iksiri Büyücü Belinda dövüşü için kullanılır."
        ]
    },

    {
        id: "golge-avcilari-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Gölge Avcıları",
        questName: "Gölge Avcıları Hayran Görevi",
        level: 11,
        icon: kaynakPath + "kara-golge.png",
        npc: "Akselyan",
        location: "Beyaz Kale",
        shortInfo: "Gölge kaynakları, Maltız ve Halifron Ruhu görevi.",
        requirements: [
            item("Kara Gölge", "100", "kara-golge.png"),
            item("Tehditkar Gölge", "30", "tehditkar-golge.png"),
            item("Ölümcül Gölge", "5", "olumcul-golge.png"),
            item("Ölü Kalp", "3", "olu-kalp.png"),
            item("Edera Çelengi", "1", "edera-celengi.png"),
            item("Maltız", "1", "maltiz.png"),
            item("Mutlak Zayıflık Tozu", "1", "mutlak-zayiflik-tozu.png")
        ],
        notes: [
            "Maltız Sisli Adalar’daki uygun bölgelerde kullanılabilir.",
            "Beyaz Kayalıklar’da Halifron Ruhu çağrılır."
        ]
    },

    {
        id: "su-tanrisi-hayran",
        medal: "hayran",
        medalLabel: "Hayran Madalyonu",
        reputation: "Su Tanrısı",
        questName: "Su Tanrısı Hayran Görevi",
        level: 11,
        icon: kaynakPath + "su-kuresi.png",
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
        icon: kaynakPath + "hava-kuresi.png",
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
        icon: kaynakPath + "guncellenecek.png",
        npc: "Güncellenecek",
        location: "Güncellenecek",
        shortInfo: "Forumda güncellenecek olarak bırakılmış.",
        requirements: [],
        notes: [
            "Kaynakta bu görev henüz güncellenecek olarak görünüyor."
        ]
    },

    {
        id: "mistik-gorev",
        medal: "ozel",
        medalLabel: "Özel Görev",
        reputation: "Mistik",
        questName: "Mistik Görevi",
        level: 12,
        icon: kaynakPath + "kabarcikli-metal.png",
        npc: "Kari",
        location: "Avgrelon Kasabası / Yabani Otlar Toprakları",
        shortInfo: "Mistik görevi çoklu kaynak teslimlerinden oluşur.",
        requirements: [
            item("Kabarcıklı Metal", "500", "kabarcikli-metal.png"),
            item("Ragtihron'un Derisi", "500", "ragtihronun-derisi.png"),
            item("Uyits Tesbih Böceği", "15", "uyits-tesbih-bocegi.png"),
            item("Korganit", "3000", "korganit.png"),
            item("Armediyant", "3000", "armediyant.png"),
            item("Zümrütüs", "3000", "zumrutus.png"),
            item("Sersemletici Arakşa", "3000", "sersemletici-araksa.png"),
            item("Kır Çiçeği", "3000", "kir-cicegi.png"),
            item("Gül Pembesi İrvis", "3000", "gul-pembesi-irvis.png"),
            item("Zebra Balığı", "3000", "zebra-baligi.png"),
            item("Çizgili Melek Balığı", "3000", "cizgili-melek-baligi.png"),
            item("Çizgili Japon Balığı", "3000", "cizgili-japon-baligi.png"),
            item("Bodurların Sikkesi", "5000", "bodurlarin-sikkesi.png"),
            item("Şeytani Kombo-Kübü", "250", "seytani-kombo-kubu.png"),
            item("İblis Kombo-Kübü", "250", "iblis-kombo-kubu.png"),
            item("Mührik İblis Kombo-Kübü", "250", "muhrik-iblis-kombo-kubu.png"),
            item("Eski Kemik", "3000", "eski-kemik.png")
        ],
        notes: []
    },

    {
        id: "korucu-gorev",
        medal: "ozel",
        medalLabel: "Özel Görev",
        reputation: "Korucu",
        questName: "Korucu Görevi",
        level: 15,
        icon: kaynakPath + "avci-ustalik-simgesi.png",
        npc: "Ormancı Haryen / Ormancı Vaslav",
        location: "Zyigolt Ormanı / Işıldayan Orman Kenarı",
        shortInfo: "Avcı Ustalık Simgesi ve evcil hayvan temsilcilerine kaynak teslimi.",
        requirements: [
            item("Avcı Ustalık Simgesi", "100", "avci-ustalik-simgesi.png"),
            item("Baharatlı Hibiskus Kökü", "12", "baharatli-hibiskus-koku.png"),
            item("Edal", "140", "edal.png"),
            item("Kalitesiz Efril", "2760", "kalitesiz-efril.png"),
            item("Öfkeli Göz", "433", "ofkeli-goz.png"),
            item("Keder Çiçeği", "4600", "keder-cicegi.png"),
            item("Ateş Çiçeği", "4650", "ates-cicegi.png")
        ],
        notes: [
            "Görevin görünmesi için çantada 12 Baharatlı Hibiskus Kökü bulunmalıdır."
        ]
    },

    {
        id: "zurhass-gorev",
        medal: "ozel",
        medalLabel: "Özel Görev",
        reputation: "Zurhass'ın Takipçileri",
        questName: "Zurhass'ın Takipçileri Görevi",
        level: 16,
        icon: kaynakPath + "maurin-madeni-parasi.png",
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
        icon: kaynakPath + "zarlog-madeni-parasi.png",
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
    }
];