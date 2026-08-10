const augustImagePath = "../../assents/images/etkinlikler/agustos/";
const augustResourcePath = "../../assents/images/kaynaklar/";
const augustShopRewardPath = "../../assents/images/magazalar/sezonluk/agustos/";
const augustEventSteps = [
    {
        id: "baslangic",
        order: "01",
        title: "Görev Başlangıcı",
        subtitle: "Denizkızından görev alınır",
        type: "Ana Görev",
        summary: "Denizkızından Ağustos Haydi Doğaya görevi alınır. Denizkızı, Altın Balık istediğini söyler ve bizi balıkçıya yönlendirir.",

        characters: [
            {
                race: "İnsan",
                name: "Denizkızı Sabina",
                location: "Karat Dağınıkları",
                image: augustImagePath + "denizkizi-sabina.png"
            },
            {
                race: "Magron",
                name: "Denizkızı Matrona",
                location: "Konum eklenecek",
                image: augustImagePath + "denizkizi-matrona.png"
            }
        ],

        objective: "Balıkçıya git ve Altın Balık hakkında bilgi al.",

        nextTarget: {
            title: "Sonraki Aşama",
            text: "Balıkçıya git.",
            targetHuman: "Balıkçı Nealon",
            targetMagron: "Balıkçı Verniz"
        }
    },

    {
        id: "balikci-kurbaga",
        order: "02",
        title: "Balıkçı ve Bataklık Kurbağası",
        subtitle: "Balıkçı kurbağa ister",
        type: "Görev Aşaması",
        summary: "Balıkçı, Altın Balık sürecine devam edebilmek için Bataklık Kurbağası ister. Bu aşamada amaç Bataklık Kurbağasını elde etmektir.",

        characters: [
            {
                race: "İnsan",
                name: "Balıkçı Nealon",
                location: "Karat Dağınıkları",
                image: augustImagePath + "balikci-nealon.png"
            },
            {
                race: "Magron",
                name: "Balıkçı Verniz",
                location: "Konum eklenecek",
                image: augustImagePath + "balikci-verniz.png"
            }
        ],

        objective: "Bataklık Kurbağası elde et ve balıkçıya geri dön.",

        mainItem: {
            name: "Bataklık Kurbağası",
            amount: "1",
            image: augustResourcePath + "bataklik-kurbagasi.png",
            text: "Bu aşamada gereken ana nesne Bataklık Kurbağasıdır. Kurbağa elde edildikten sonra balıkçıya dönülür."
        },

        methods: [
            {
                order: "1",
                title: "Bagulf Bataklığı",
                text: "Bagulf Bataklığı instancesinde bölgeler geçilerek avlanma kısmında Bataklık Kurbağası elde edilir. İnsan tarafında instance konumu Yamaç Dibi olarak notlandı.",
                image: augustImagePath + "bagulf-batakligi.png"
            },
            {
                order: "2",
                title: "Ağustos Karakterleri",
                text: "Ağustos ayına özel karakterlerden Bataklık Kurbağası alınabilir. İnsan ve Magron tarafındaki karakterlerin konumları ayrıca eklenecek.",
                characters: [
                    {
                        race: "İnsan",
                        name: "Bataklık-Kızı Fionola",
                        location: "Konum eklenecek",
                        image: augustImagePath + "bataklik-kizi-fionola.png"
                    },
                    {
                        race: "Magron",
                        name: "Çiftçi Teo",
                        location: "Konum eklenecek",
                        image: augustImagePath + "ciftci-teo.png"
                    }
                ]
            },
            {
                order: "3",
                title: "Diğer Oyunculardan Satın Alma",
                text: "Bataklık Kurbağası diğer oyunculardan satın alınabilir veya oyuncular arasında verilebilir."
            }
        ],

        nextTarget: {
            title: "Sonraki Aşama",
            text: "Bataklık Kurbağası elde edildikten sonra balıkçıya dönülür. Balıkçı sonraki aşamada Ağ verir.",
            targetHuman: "Balıkçı Nealon",
            targetMagron: "Balıkçı Verniz"
        }
    },

    {
        id: "yavru-altin-balik",
        order: "03",
        title: "Ağ ve Yavru Altın Balık",
        subtitle: "Ağ ile yavru balığı bul",
        type: "Görev Aşaması",
        summary: "Bataklık Kurbağası balıkçıya götürüldükten sonra balıkçı bize Ağ verir. Bu Ağ ile belirli bölgelerde Yavru Altın Balık aranır. Yavru balık bulunduktan sonra denizkızına dönülür.",

        characters: [
            {
                race: "İnsan",
                name: "Balıkçı Nealon",
                location: "Karat Dağınıkları",
                image: augustImagePath + "balikci-nealon.png"
            },
            {
                race: "Magron",
                name: "Balıkçı Verniz",
                location: "Konum eklenecek",
                image: augustImagePath + "balikci-verniz.png"
            }
        ],

        objective: "Balıkçıdan alınan Ağ ile Yavru Altın Balık bul.",

        mainItem: {
            name: "Ağ",
            amount: "1",
            image: augustResourcePath + "ag.png",
            text: "Bataklık Kurbağası aşamasından sonra balıkçı tarafından verilen görev nesnesidir. Yavru Altın Balık bulmak için kullanılır."
        },

        methods: [
            {
                order: "1",
                title: "İnsan Tarafı Bölgeleri",
                text: "İnsan tarafında verilen Ağ ile aşağıdaki bölgelerde Yavru Altın Balık aranır.",
                locations: [
                    "Yasemen Toprakları",
                    "Ölü Körfez",
                    "Kurtlar Çölü",
                    "Kadim Mezarlık",
                    "Grenfalt Limanı"
                ]
            },
            {
                order: "2",
                title: "Magron Tarafı Bölgeleri",
                text: "Magron tarafındaki Yavru Altın Balık bölgeleri daha sonra eklenecek.",
                locations: [
                    "Konum eklenecek"
                ]
            }
        ],

        nextTarget: {
            title: "Sonraki Aşama",
            text: "Yavru Altın Balığı bulduktan sonra denizkızına geri dön.",
            targetHuman: "Denizkızı Sabina",
            targetMagron: "Denizkızı Matrona"
        }
    },

 {
    id: "altin-balik-besleme",
    order: "04",
    title: "Altın Balık Besleme",
    subtitle: "Sinek Sürüsü ile büyütme",
    type: "Büyütme Aşaması",
    summary: "Yavru Altın Balık bulunduktan sonra denizkızına dönülür. Denizkızı bu kez Altın Balık ister. Balığı büyütmek için Sinek Sürüsü gerekir. Sinek Sürüsü, Ağ kullanılarak toplanır ve balık saat başı beslenir.",

    characters: [
        {
            race: "İnsan",
            name: "Denizkızı Sabina",
            location: "Karat Dağınıkları",
            image: augustImagePath + "denizkizi-sabina.png"
        },
        {
            race: "Magron",
            name: "Denizkızı Matrona",
            location: "Konum eklenecek",
            image: augustImagePath + "denizkizi-matrona.png"
        }
    ],

    objective: "Sinek Sürüsü topla ve Yavru Altın Balığı saat başı besleyerek Altın Balık aşamasına ulaştır.",

    mainItem: {
        name: "Ağ",
        amount: "Sinek toplamak için kullanılır",
        image: augustResourcePath + "ag.png",
        text: "Sinek Sürüsü elde etmek için Ağ kullanılır. Toplanan Sinek Sürüleri balığı beslemek için gereklidir."
    },

    feedingSteps: [
        {
            order: "1",
            title: "Denizkızına Dönüş",
            text: "Yavru Altın Balık bulunduktan sonra denizkızına gidilir. Denizkızı, Yavru Altın Balık yerine Altın Balık ister."
        },
        {
            order: "2",
            title: "Sinek Sürüsü Nerede Bulunur?",
            text: "Sinek Sürüsü, Ağ kullanılarak toplanır. İnsan ve Magron tarafında toplama bölgesi Şehir Kapısı olarak notlandı.",
            sourceItem: {
                name: "Ağ",
                image: augustResourcePath + "ag.png"
            },
            resultItem: {
                name: "Sinek Sürüsü",
                image: augustResourcePath + "sinek-surusu.png"
            },
            locations: [
                {
                    race: "İnsan",
                    location: "Şehir Kapısı"
                },
                {
                    race: "Magron",
                    location: "Şehir Kapısı"
                }
            ]
        },
        {
            order: "3",
            title: "1-3 Sinek Sürüsü Sonrası",
            text: "Yavru Altın Balık, 1 ile 3 arası Sinek Sürüsü ile beslendikten sonra Güçlü Altın Balık olur.",
            from: {
                name: "Yavru Altın Balık",
                image: augustResourcePath + "yavru-altin-balik.png"
            },
            material: {
                name: "1-3x Sinek Sürüsü",
                image: augustResourcePath + "sinek-surusu.png"
            },
            result: {
                name: "Güçlü Altın Balık",
                image: augustResourcePath + "guclu-altin-balik.png"
            }
        },
        {
            order: "4",
            title: "6-10 Sinek Sürüsü Sonrası",
            text: "Güçlü Altın Balık, 6 ile 10 arası Sinek Sürüsü ile beslendikten sonra Büyümüş Altın Balık olur.",
            from: {
                name: "Güçlü Altın Balık",
                image: augustResourcePath + "guclu-altin-balik.png"
            },
            material: {
                name: "6-10x Sinek Sürüsü",
                image: augustResourcePath + "sinek-surusu.png"
            },
            result: {
                name: "Büyümüş Altın Balık",
                image: augustResourcePath + "buyumus-altin-balik.png"
            }
        },
        {
            order: "5",
            title: "15-20 Sinek Sürüsü Sonrası",
            text: "Büyümüş Altın Balık, 15 ile 20 arası Sinek Sürüsü ile beslendikten sonra Altın Balık olur.",
            from: {
                name: "Büyümüş Altın Balık",
                image: augustResourcePath + "buyumus-altin-balik.png"
            },
            material: {
                name: "15-20x Sinek Sürüsü",
                image: augustResourcePath + "sinek-surusu.png"
            },
            result: {
                name: "Altın Balık",
                image: augustResourcePath + "altin-balik.png"
            }
        },
        {
            order: "6",
            title: "Denizkızına Geri Dön",
            text: "Altın Balık elde edildikten sonra denizkızına geri dönülür. Sonraki aşamada denizkızı Altın Balıklı Elmas Fanus isteyecek."
        }
    ],

    nextTarget: {
        title: "Sonraki Aşama",
        text: "Altın Balık elde edildikten sonra denizkızına geri dönülür.",
        targetHuman: "Denizkızı Sabina",
        targetMagron: "Denizkızı Matrona"
    }
},

    {
    id: "altin-balikli-elmas-fanus",
    order: "05",
    title: "Altın Balıklı Elmas Fanus",
    subtitle: "Denizkızı Elmas Fanus ister",
    type: "Görev Aşaması",
    summary: "Altın Balık elde edildikten sonra denizkızına dönülür. Denizkızı normal Altın Balığı kabul etmez ve Altın Balıklı Elmas Fanus ister. Bunun için zanaatçılar birliğindeki kuyumcuya gidilir.",

    characters: [
        {
            race: "İnsan",
            name: "Kuyumcu Efrosi",
            location: "Zanaatçılar Birliği",
            image: augustImagePath + "kuyumcu-efrosi.png"
        },
        {
            race: "Magron",
            name: "Magron Kuyumcusu",
            location: "Zanaatçılar Birliği",
            image: augustImagePath + "kuyumcu-magron.png"
        }
    ],

    objective: "Elmas Akvaryum elde et, Altın Balık ile birleştir ve Altın Balıklı Elmas Fanusu denizkızına teslim et.",

    mainItem: {
        name: "Altın Balıklı Elmas Fanus",
        amount: "1",
        image: augustResourcePath + "altin-balikli-elmas-fanus.png",
        text: "Denizkızının istediği ana görev nesnesidir. Altın Balık ve Elmas Akvaryum birleştirilerek elde edilir."
    },

    fanusSteps: [
        {
            order: "1",
            title: "Denizkızı Kuyumcuya Yönlendirir",
            text: "Altın Balık elde edildikten sonra denizkızına dönülür. Denizkızı normal Altın Balığı kabul etmez ve Elmas Akvaryum için zanaatçılar birliğindeki kuyumcuya gitmeni ister."
        },
        {
            order: "2",
            title: "Kuyumcuya Git",
            text: "Her iki ırkın kuyumcusu ayrıdır. İnsan tarafında Kuyumcu Efrosi, Magron tarafında kendi kuyumcusu kullanılır.",
            locations: [
                {
                    race: "İnsan",
                    npc: "Kuyumcu Efrosi",
                    location: "Zanaatçılar Birliği",
                    image: augustImagePath + "kuyumcu-efrosi.png"
                },
                {
                    race: "Magron",
                    npc: "Magron Kuyumcusu",
                    location: "Zanaatçılar Birliği",
                    image: augustImagePath + "kuyumcu-magron.png"
                }
            ]
        },
        {
            order: "3",
            title: "Elmas Akvaryum İçin Birini Teslim Et",
            text: "Kuyumcu, Elmas Akvaryum için üç farklı kaynaktan yalnızca birini ister. Bunlardan birini teslim ettiğinde Elmas Akvaryum alınır.",
            choices: [
                {
                    name: "Kırmızı Şabut Balığı",
                    amount: "5",
                    image: augustResourcePath + "kirmizi-sabut-baligi.png"
                },
                {
                    name: "Güzelavrat Otu",
                    amount: "10",
                    image: augustResourcePath + "guzelavrat-otu.png"
                },
                {
                    name: "Elmas",
                    amount: "6",
                    image: augustResourcePath + "elmas.png"
                }
            ],
            resultItem: {
                name: "Elmas Akvaryum",
                amount: "1",
                image: augustResourcePath + "elmas-akvaryum.png"
            }
        },
        {
            order: "4",
            title: "Altın Balığı Elmas Akvaryuma Koy",
            text: "Elmas Akvaryum alındıktan sonra Altın Balık kullanılır. Altın Balık, Elmas Akvaryum içine konur ve Altın Balıklı Elmas Fanus oluşur.",
            from: {
                name: "Altın Balık",
                image: augustResourcePath + "altin-balik.png"
            },
            material: {
                name: "Elmas Akvaryum",
                image: augustResourcePath + "elmas-akvaryum.png"
            },
            result: {
                name: "Altın Balıklı Elmas Fanus",
                image: augustResourcePath + "altin-balikli-elmas-fanus.png"
            }
        },
        {
            order: "5",
            title: "Denizkızına Teslim Et",
            text: "Altın Balıklı Elmas Fanus denizkızına teslim edilir. Ana görev tamamlanır ve sürekli yapılabilen Sinek Sürüsü Takası aktif hale gelir."
        }
    ],

    nextTarget: {
        title: "Sonraki Aşama",
        text: "Ana görev tamamlandıktan sonra sürekli verilebilen Sinek Sürüsü Takası aktif olur.",
        targetHuman: "Sinek Takası",
        targetMagron: "Sinek Takası"
    }
},

    {
    id: "sinek-takasi",
    order: "06",
    title: "Sinek Takası ve Balık Kemiği",
    subtitle: "Balık Kemikleri elde etme yolları",
    type: "Etkinlik Kaynakları",
    summary: "Bu aşamada Balık Kemikleri elde etme yolları gösterilir. Sinek Sürüsü takası, Mevsim Kart Destesi, Urchi günlük ödülü ve Ağustos Çantaları bu bölümde toplanır.",

    characters: [
        {
            race: "İnsan",
            name: "Deniz Kızı Sabina",
            location: "Karat Dağınıkları",
            image: augustImagePath + "denizkizi-sabina.png"
        },
        {
            race: "Magron",
            name: "Deniz Kızı Matrona",
            location: "Konum eklenecek",
            image: augustImagePath + "denizkizi-matrona.png"
        }
    ],

    objective: "Balık Kemikleri elde etme yollarını takip et.",

    mainItem: {
        name: "Balık Kemikleri",
        amount: "Etkinlik para birimi",
        image: augustResourcePath + "balik-kemikleri.png",
        text: "Ağustos etkinliğinde fuar alanındaki ödülleri almak için kullanılan etkinlik kaynağıdır."
    },

    boneSources: [
    {
        order: "1",
        title: "Sinek Takası",
        text: "Deniz Kızı Sorena ve Deniz Kızı Maeli, Sinek Sürüleri karşılığında Balık Kemikleri verir.",
        type: "exchange",
        exchanges: [
            {
                giveName: "Sinek Sürüsü",
                giveAmount: "1",
                giveImage: augustResourcePath + "sinek-surusu.png",
                takeName: "Balık Kemikleri",
                takeAmount: "1",
                takeImage: augustResourcePath + "balik-kemikleri.png"
            },
            {
                giveName: "Sinek Sürüsü",
                giveAmount: "5",
                giveImage: augustResourcePath + "sinek-surusu.png",
                takeName: "Balık Kemikleri",
                takeAmount: "7",
                takeImage: augustResourcePath + "balik-kemikleri.png"
            },
            {
                giveName: "Sinek Sürüsü",
                giveAmount: "10",
                giveImage: augustResourcePath + "sinek-surusu.png",
                takeName: "Balık Kemikleri",
                takeAmount: "15",
                takeImage: augustResourcePath + "balik-kemikleri.png"
            }
        ]
    },
    {
        order: "2",
        title: "Mevsim Kart Destesi",
        text: "Mevsim Kart Destesi kullanılarak Balık Kemikleri elde edilir.",
        type: "source",
        sourceItem: {
            name: "Mevsim Kart Destesi",
            amount: "Günlük",
            image: augustResourcePath + "mevsim-kart-destesi.png"
        },
        resultItem: {
            name: "Balık Kemikleri",
            amount: "35",
            image: augustResourcePath + "balik-kemikleri.png"
        }
    },
    {
        order: "3",
        title: "Urchi Günlük Ödülü",
        text: "Urchi üzerinden günlük Balık Kemikleri elde edilir. Miktar netleşince buraya eklenecek.",
        type: "source",
        sourceItem: {
            name: "Urchi",
            amount: "Günlük",
            image: augustImagePath + "urchi.png"
        },
        resultItem: {
            name: "Balık Kemikleri",
            amount: "17",
            image: augustResourcePath + "balik-kemikleri.png"
        }
    },
    {
        order: "4",
        title: "Pırlı Ağustos Çantası",
        text: "Pırlı Ağustos Çantası 12 Pır karşılığında alınır ve 300 Balık Kemikleri verir.",
        type: "source",
        sourceItem: {
            name: "Pırlı Ağustos Çantası",
            amount: "12 Pır",
            image: augustResourcePath + "agustos-cantasi.png"
        },
        resultItem: {
            name: "Balık Kemikleri",
            amount: "300",
            image: augustResourcePath + "balik-kemikleri.png"
        }
    },
    {
        order: "5",
        title: "Altın Ağustos Çantası",
        text: "Altın Ağustos Çantası 15 Altın karşılığında alınır ve 300 Balık Kemikleri verir.",
        type: "source",
        sourceItem: {
            name: "Altın Ağustos Çantası",
            amount: "15 Altın",
            image: augustResourcePath + "agustos-cantasi.png"
        },
        resultItem: {
            name: "Balık Kemikleri",
            amount: "300",
            image: augustResourcePath + "balik-kemikleri.png"
        }
    }

    ],

    nextTarget: {
        title: "Sonraki Aşama",
        text: "Balık Kemikleri toplandıktan sonra fuar alanındaki ödül takaslarına geçilir.",
        targetHuman: "Ödül Takasları",
        targetMagron: "Ödül Takasları"
    }
},

   {
    id: "odul-takaslari",
    order: "07",
    title: "Ödül Takasları",
    subtitle: "Balık Kemikleri ile fuar ödülleri",
    type: "Ödül Aşaması",
    summary: "Bu bölümde Balık Kemikleri ile fuar alanından alınabilecek ödüller ve takaslar listelenir. Sandıkların ve özel ödüllerin içerikleri daha sonra detaylandırılacak.",

    characters: [],

    objective: "Balık Kemikleri ile fuar alanındaki ödülleri al.",

    mainItem: {
        name: "Balık Kemikleri",
        amount: "Takas kaynağı",
        image: augustResourcePath + "balik-kemikleri.png",
        text: "Fuar alanındaki ödülleri almak için kullanılır."
    },

    rewardGroups: [
        {
            title: "Sandıklar",
            description: "Fuar alanında Balık Kemikleri ile alınabilen sandık ödülleri.",
            rewards: [
                {
                    name: "	Balıkçının Sandığı",
                    cost: "200",
                    image: augustShopRewardPath + "balikcinin- sandigi.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: [
        {
            name: "Başarı",
            amount: "1",
            image: augustShopRewardPath + "agustos-bir-dilek-tut.png"
        },
        {
            name: "Altın Balık Kolye",
            amount: "3",
            image: augustShopRewardPath + "altin-balık-kolye.png"
        },
        {
            name: "Nehir Yosunu",
            amount: "50",
            image: augustShopRewardPath + "nehir-yosunu.png"
        },
        {
            name: "Zarar Görmezlik İksiri",
            amount: "2",
            image: augustShopRewardPath + "zarar-görmezlik.png"
        }
    ]
                },
                {
                    name: "	Ağustos Sandığı",
                    cost: "400",
                    image: augustShopRewardPath + "agustos-sandıgi.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: [
        {
            name: "	Değerli Balık Broş",
            amount: "3",
            image: augustShopRewardPath + "değerli-balik-brons.png"
        },
        {
            name: "	Nehir Yosunu",
            amount: "100",
            image: augustShopRewardPath + "nehir-yosunu.png"
        },
        {
            name: "Ağustos Kartı",
            amount: "1",
            image: augustShopRewardPath + "agustos-karti.png"
        },
        {
            name: "Savaş Ağı",
            amount: "1",
            image: augustShopRewardPath + "savas-agi.png"
        }
    ]
                },
                {
                    name: "Özel Ağustos Sandığı",
                    cost: "200",
                    image: augustShopRewardPath + "odul-7.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Parlak Ağustos Sandığı",
                    cost: "200",
                    image: augustShopRewardPath + "odul-8.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                }
            ]
        },
        {
            title: "Nadir Ödüller",
            description: "Fuar alanındaki yüksek değerli özel ödüller.",
            rewards: [
                {
                    name: "Ağustos Kartı",
                    cost: "300",
                    image: augustShopRewardPath + "agustos-karti.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Korsan Şapkası (Çevikliğinizi, korumanızı, sezgilerinizi ve tüm temel büyülerden korumanızı %4 oranında geçici olarak artırır.)",
                    cost: "250",
                    image: augustShopRewardPath + "korsan-sapkasi.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Zengin Arhas Madalyonu",
                    cost: "250",
                    image: augustShopRewardPath + "zengin-arhas-madalyonu.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "	Balık Kemikleri Sancağı(5 hamle süresince alınan hasarı 10% azaltma şansını veriyor.Her 3 saatte bir kullanılabilir.)",
                    cost: "200",
                    image: augustShopRewardPath + "balik-kemikleri-sancaği.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                }
            ]
        },
        {
            title: "Hediyeler",
            description: "Daha düşük Balık Kemikleri bedeliyle alınabilen koleksiyon ve süs ödülleri.",
            rewards: [
                {
                    name: "Düş Maymunu",
                    cost: "50",
                    image: augustShopRewardPath + "düs-maymunu.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "	Meyve Tabağı",
                    cost: "50",
                    image: augustShopRewardPath + "meyve-tabagi.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Işıltılı Küçük Ejderha",
                    cost: "50",
                    image: augustShopRewardPath + "isiltili-ejderha.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "	Denizkızı Balığı",
                    cost: "50",
                    image: augustShopRewardPath + "denizkizi-baligi.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Değerli Balık Broş",
                    cost: "50",
                    image: augustShopRewardPath + "değerli-balik-brons.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Altın Balık Kolye",
                    cost: "50",
                    image: augustShopRewardPath + "altin-balık-kolye.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Kutsal Meşe Palamudu Hediyesi",
                    cost: "50",
                    image: augustShopRewardPath + "kutsal-mese.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                }
            ]
        },
        {
            title: "Diğer Takaslar",
            description: "Fuar alanındaki ek takas ödülleri.",
            rewards: [
                {
                    name: "Yeşil Bitki",
                    cost: "1",
                    image: augustShopRewardPath + "odul-16.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Maden Parçası",
                    cost: "300",
                    image: augustShopRewardPath + "odul-17.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Kırmızı Taşlı Takı",
                    cost: "150",
                    image: augustShopRewardPath + "odul-18.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Küçük Kırmızı Taşlı Takı",
                    cost: "50",
                    image: augustShopRewardPath + "odul-19.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                },
                {
                    name: "Ağustos Yiyeceği",
                    cost: "150",
                    image: augustShopRewardPath + "odul-20.png",
                    currencyImage: augustResourcePath + "balik-kemikleri.png",
                    contents: []
                }
            ]
        }
    ],

    notes: [
        "Antikalar çarşısının bitiminden sonra kalan Balık Kemikleri sadece sezonluk yiyecekler ile takas edilebilir.",
        "Sandıkların içerikleri daha sonra ayrı içerik kartları olarak eklenecek.",
        "Ödül isimleri geçici olarak düzenlendi; gerçek isimler netleşince değiştirilecek."
    ],

    nextTarget: {
        title: "Devam",
        text: "Ödül içerikleri ve gerçek ödül adları netleşince bu bölüm tamamlanacak.",
        targetHuman: "",
        targetMagron: ""
    }
}
];