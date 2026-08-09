const augustImagePath = "../../assents/images/etkinlikler/agustos/";
const augustResourcePath = "../../assents/images/kaynaklar/";
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
        image: augustResourcePath+ "ag.png",
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
        from: {
            name: "Ağ",
            image: augustResourcePath + "ag.png"
        },
        result: {
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
        title: "1. Besleme",
        text: "Yavru Altın Balık, Sinek Sürüsü ile beslendiğinde Güçlü Altın Balık olur.",
        from: {
            name: "Yavru Altın Balık",
            image: augustResourcePath + "yavru-altin-balik.png"
        },
        material: {
            name: "Sinek Sürüsü",
            image: augustResourcePath + "sinek-surusu.png"
        },
        result: {
            name: "Güçlü Altın Balık",
            image: augustResourcePath + "guclu-altin-balik.png"
        }
    },
    {
        order: "4",
        title: "6. Besleme",
        text: "Güçlü Altın Balık, 6 kez Sinek Sürüsü ile beslendikten sonra Büyümüş Altın Balık olur.",
        from: {
            name: "Güçlü Altın Balık",
            image: augustResourcePath + "guclu-altin-balik.png"
        },
        material: {
            name: "6x Sinek Sürüsü",
            image: augustResourcePath + "sinek-surusu.png"
        },
        result: {
            name: "Büyümüş Altın Balık",
            image: augustResourcePath + "buyumus-altin-balik.png"
        }
    },
      {
        order: "5",
        title: "10. Besleme",
        text: "Güçlü Altın Balık, 10 kez Sinek Sürüsü ile beslendikten sonra Büyümüş Altın Balık olur.",
        from: {
            name: "Güçlü Altın Balık",
            image: augustResourcePath + "buyumus-altin-balik.png"
        },
        material: {
            name: "10x Sinek Sürüsü",
            image: augustResourcePath + "sinek-surusu.png"
        },
        result: {
            name: "Büyümüş Altın Balık",
            image: augustResourcePath + "buyumus-altin-balik.png"
        }
        }
],

    nextTarget: {
        title: "Sonraki Aşama",
        text: "Balık son aşamada Altın Balık olduğunda denizkızına geri dönülür.",
        targetHuman: "Denizkızı Sabina",
        targetMagron: "Denizkızı Matrona"
    }
},

    {
        id: "devam",
        order: "05",
        title: "Devam Aşamaları",
        subtitle: "Sonraki bilgiler eklenecek",
        type: "Devam",
        summary: "Balık istenen aşamaya büyüdükten sonra denizkızına dönülür. Bundan sonraki görev adımları netleştikçe bu bölüme eklenecek.",

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

        objective: "Sonraki görev ekranlarına göre devam aşamalarını tamamla.",

        nextTarget: {
            title: "Sonraki Aşama",
            text: "Yeni ekran görüntüleri geldikçe eklenecek.",
            targetHuman: "",
            targetMagron: ""
        }
    }
];