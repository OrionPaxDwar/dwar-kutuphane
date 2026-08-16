const natureCharacterPath = "../../assents/images/karakterler/";
const natureResourcePath = "../../assents/images/kaynaklar/";
const natureEventSteps = [
    {
        id: "ilk-asama",
        order: "01",
        title: "Meslek Görevleri ve Oduni Kesme",
        subtitle: "12 saatte bir tekrar eder",
        type: "İlk Aşama",
        summary: "Doğayı Kurtar etkinliğinin ilk aşamasında oyuncular kendi meslek gruplarına göre ilgili NPC'ye gider. Meslek kaynakları 12 saatte bir teslim edilir ve bu süreç 4 gün boyunca devam eder. Ayrıca ormancıdan alınan Oduni kesme göreviyle ek jeton kazanılır.",

        objective: "Meslek kaynaklarını teslim et, Doğanın Koruyucuları Jetonu kazan ve ek olarak Oduni kesme görevini tamamla.",

        mainItem: {
    name: "Doğanın Koruyucuları Jetonu",
    image: natureResourcePath + "doganin-koruyuculari-jetonu.png",
    text: "Doğayı Kurtar etkinliğinde görevlerden kazanılan jetondur."
},
        

        professionExchange: {
            title: "Meslek Kaynak Takası",
            repeat: "12 saatte bir",
            duration: "4 gün",
            reward: {
                name: "Doğanın Koruyucuları Jetonu",
                amount: "100",
                image: natureResourcePath + "doganin-koruyuculari-jetonu.png"
            },

            professions: [
                {
                    id: "jeolog",
                    title: "Jeolog",
                    description: "Jeolog mesleğine sahip oyuncular kendi ırklarının jeolog NPC'sine gider ve istenen maden kaynaklarını teslim eder.",

                    humanNpc: {
                        race: "İnsan",
                        name: "İnsan Jeolog NPC",
                        location: "Konum eklenecek",
                        image: natureCharacterPath + "jeolog-insan.png"
                    },

                    magronNpc: {
                        race: "Magron",
                        name: "Magron Jeolog NPC",
                        location: "Konum eklenecek",
                        image: natureCharacterPath + "jeolog-magron.png"
                    },

                    resources: [
                        {
                            name: "Topaz",
                            amount: "50",
                            image: natureResourcePath + "topaz.png"
                        },
                        {
                            name: "Elmas",
                            amount: "50",
                            image: natureResourcePath + "elmas.png"
                        },
                        {
                            name: "Ateş Taşı",
                            amount: "50",
                            image: natureResourcePath + "ates-tasi.png"
                        },
                        {
                            name: "Ejder Kanı",
                            amount: "50",
                            image: natureResourcePath + "ejder-kani.png"
                        }
                    ]
                },

                {
                    id: "bitkici",
                    title: "Bitkici",
                    description: "Bitkici mesleğine sahip oyuncular kendi ırklarının bitkici NPC'sine gider. İstenen kaynaklar netleşince eklenecek.",

                    humanNpc: {
                        race: "İnsan",
                        name: "İnsan Bitkici NPC",
                        location: "Konum eklenecek",
                        image: natureCharacterPath + "bitkici-insan.png"
                    },

                    magronNpc: {
                        race: "Magron",
                        name: "Magron Bitkici NPC",
                        location: "Konum eklenecek",
                        image: natureCharacterPath + "bitkici-magron.png"
                    },

                    resources: [
                        {
                            name: "Anemon Çiçeği",
                            amount: "50",
                            image: natureResourcePath + "anemon.png"
                        },
                        {
                            name: "Güzelavrat Otu",
                            amount: "50",
                            image: natureResourcePath + "guzelavrat-otu.png"
                        },
                        {
                            name: "Zambak",
                            amount: "50",
                            image: natureResourcePath + "zambak.png"
                        },
                        {
                            name: "Sümbül Çiçeği",
                            amount: "50",
                            image: natureResourcePath + "sumbul-cicegi.png"
                        }
                    ]
                },

                {
                    id: "balikci",
                    title: "Balıkçı",
                    description: "Balıkçı mesleğine sahip oyuncular kendi ırklarının balıkçı NPC'sine gider. İstenen kaynaklar netleşince eklenecek.",

                    humanNpc: {
                        race: "İnsan",
                        name: "İnsan Balıkçı Nealon",
                        location: "Karat Dağlıkları",
                        image:natureCharacterPath + "balikci-nealon.png"
                    },

                    magronNpc: {
                        race: "Magron",
                        name: "Magron Balıkçı Verniz",
                        location: "Sinsi Göl",
                        image: natureCharacterPath + "balikci-verniz.png"
                    },

                    resources: [
                        {
                            name: "Elmas Som Balığı",
                            amount: "50",
                            image: natureResourcePath + "elmas-som-baligi.png"
                        },
                        {
                            name: "Kırmızı Şabut Balığı",
                            amount: "50",
                            image: natureResourcePath + "kirmizi-sabut-baligi.png"
                        },
                        {
                            name: "Gök Mavisi Somon",
                            amount: "50",
                            image: natureResourcePath + "gok-mavisi-somon.png"
                        },
                        {
                            name: "Billur Mersin Balığı",
                            amount: "50",
                            image: natureResourcePath + "billur-mersini-baligi.png"
                        }
                    ]
                }
            ]
        },

        woodTask: {
    title: "Ek Görev: Saldırgan Oduni Kesme",
    repeat: "12 saatte bir",

    description: "Oduni kesme görevi ormancıdan alınır. Görev alındıktan sonra 3 adet Saldırgan Oduni saldırır. Her Saldırgan Oduni  seviyenize göre gelmektedir. Üçü de kesildikten sonra 50 Doğanın Koruyucuları Jetonu alınır.",

    reward: {
        name: "Doğanın Koruyucuları Jetonu",
        amount: "50",
        image: natureResourcePath + "doganin-koruyuculari-jetonu.png"
    },

    humanNpc: {
        race: "İnsan",
        name: "İnsan Ormancı",
        location: "Konum eklenecek",
        image: natureCharacterPath + "ormanci-insan.png"
    },

    magronNpc: {
        race: "Magron",
        name: "Magron Ormancı",
        location: "Konum eklenecek",
        image: natureCharacterPath + "ormanci-magron.png"
    },

    target: {
        name: "Saldırgan Oduni",
        amount: "3",
        hp: "6681",
        image: natureResourcePath + "saldirgan-oduni.png"
    }
},

        notes: [
            "Meslek kaynak takası 12 saatte bir tekrar eder.",
            "Meslek kaynak takası 4 gün boyunca devam eder.",
            "Her meslek grubu kendi meslek NPC'sine gider.",
            "Oduni kesme görevi ormancıdan alınır ve 12 saatte bir tekrar eder.",
            "Ormancıdan alınan ek görevde seviyenize göre 3 adet Saldırgan Oduni kesilir."
        ]
    }
];