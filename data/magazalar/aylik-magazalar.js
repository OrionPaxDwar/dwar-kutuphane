const kaynakPath = "../../../assents/images/kaynaklar/";
const odulPath = "../../../assents/images/magazalar/oduller/";

function reward(name, cost, image, description, contents = []) {
    return {
        name: name,
        cost: cost,
        image: odulPath + image,
        description: description,
        contents: contents
    };
}

function contentItem(name, amount, image, description = "") {
    return {
        name: name,
        amount: amount,
        image: kaynakPath + image,
        description: description
    };
}

const seasonalShops = {
    "ocak": {
        title: "Ocak Mağazası",
        eventName: "Ocak - Merhaba Soğuk!",
        currencyName: "Çelik Kalkan",
        currencyImage: kaynakPath + "celik-kalkan.png",
        period: "30 Ocak sonrası mağaza dönemi",
        level: "3. seviye ve üstü",
        cover: "../../../assents/images/magazalar/aylar/ocak-magazasi.jpg",
        source: "dwar.gen.tr/library.php?c=150",
        intro: "Ocak etkinliğinde kazanılan Çelik Kalkanlar ile sezonluk mağazadan özel ödüller alınabilir.",
        notes: [
            "Kalan Çelik Kalkan parçaları nadir nesnelerden sonra yalnızca mevsimlik yiyeceklere harcanabilir.",
            "Bazı ödüller sadece 1 kez satın alınabilir."
        ],
        rewards: [
            reward(
                "Ocak Başarı Paketi",
                100,
                "ocak/odul-01.jpg",
                "Ocak başarısı, 3 Buzdan Kartanesi ve Soğuk Ocak Kartı içerir.",
                [
                    contentItem("Buzdan Kartanesi", "3", "buzdan-kartanesi.png"),
                    contentItem("Soğuk Ocak Kartı", "1", "soguk-ocak-karti.png"),
                    contentItem("Ocak Başarısı", "1", "ocak-basarisi.png")
                ]
            ),

            reward(
                "Ocak Merhaba Soğuk Paketi",
                38,
                "ocak/odul-02.jpg",
                "Ocak etkinlik paketi, Pizza Dilimi, Noel Ağacı Kolyesi ve dönüş tomarları içerir.",
                [
                    contentItem("Pizza Dilimi", "1", "pizza-dilimi.png"),
                    contentItem("Noel Ağacı Kolyesi", "1", "noel-agaci-kolyesi.png"),
                    contentItem("Dönüş Tomarı", "Sonradan düzenlenecek", "donus-tomari.png")
                ]
            ),

            reward(
                "Mevsim Kartı",
                80,
                "ocak/odul-03.jpg",
                "Mevsim kartlarından biridir."
            ),

            reward(
                "Arhas Muskası",
                60,
                "ocak/odul-04.jpg",
                "Arhas eyerlemek ve çağırmak için kullanılan muska."
            ),

            reward(
                "Valdagor Kürk Şapkası",
                50,
                "ocak/odul-05.jpg",
                "Savaşta soğuktan ve travmalardan koruyan sıcak şapka."
            ),

            reward(
                "Sihirli Sancak",
                35,
                "ocak/odul-06.jpg",
                "Savaş sonuna kadar mevcut ve maksimum yaşamı artıran sancak."
            ),

            reward(
                "Mevsimlik Yiyecek",
                5,
                "ocak/odul-07.jpg",
                "Etkinlik yiyeceği."
            ),

            reward(
                "Kış Yiyeceği",
                1,
                "ocak/odul-08.jpg",
                "Can ve mana yenileyen yiyecek."
            ),

            reward(
                "Ocak Hediyesi 1",
                3,
                "ocak/odul-09.jpg",
                "Hediye türü sezonluk eşya."
            ),

            reward(
                "Ocak Hediyesi 2",
                3,
                "ocak/odul-10.jpg",
                "Hediye türü sezonluk eşya."
            ),

            reward(
                "Ocak Hediyesi 3",
                3,
                "ocak/odul-11.jpg",
                "Hediye türü sezonluk eşya."
            ),

            reward(
                "Ocak Hediyesi 4",
                3,
                "ocak/odul-12.jpg",
                "Hediye türü sezonluk eşya."
            ),

            reward(
                "Ocak Hediyesi 5",
                3,
                "ocak/odul-13.jpg",
                "Hediye türü sezonluk eşya."
            ),

            reward(
                "Buz Maymunu Heykelciği",
                30,
                "ocak/odul-14.jpg",
                "2020 yılının patronu olarak geçen özel heykelcik."
            ),

            reward(
                "Ocak Hediyesi 6",
                3,
                "ocak/odul-15.jpg",
                "Hediye türü sezonluk eşya."
            )
        ]
    },

    "subat": {
        title: "Şubat Mağazası",
        eventName: "Şubat - Hislerin Uyanışı!",
        currencyName: "Oymalı Kalp",
        currencyImage: kaynakPath + "oymali-kalp.png",
        period: "20 Şubat - 25 Şubat",
        level: "3. seviye ve üstü",
        cover: "../../../assents/images/magazalar/aylar/subat-magazasi.jpg",
        source: "dwar.gen.tr/library.php?c=102",
        intro: "Şubat etkinliğinde kazanılan Oymalı Kalpler ile aşk temalı sezonluk ödüller alınabilir.",
        notes: [
            "Mağazadan alışverişte ödeme seçeneği olarak yalnızca Oymalı Kalp geçerlidir.",
            "Şubat Çuvalı içinde 65 Oymalı Kalp bulunur.",
            "Bazı ödüller tek seferlik olabilir."
        ],
        rewards: [
            reward("Şubat Ödülü 1", 35, "subat/odul-01.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 2", 65, "subat/odul-02.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 3", 50, "subat/odul-03.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 4", 40, "subat/odul-04.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 5", 25, "subat/odul-05.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 6", 50, "subat/odul-06.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 7", 5, "subat/odul-07.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 8", 50, "subat/odul-08.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 9", 6, "subat/odul-09.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 10", 2, "subat/odul-10.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 11", 2, "subat/odul-11.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 12", 15, "subat/odul-12.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 13", 15, "subat/odul-13.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 14", 15, "subat/odul-14.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 15", 15, "subat/odul-15.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 16", 15, "subat/odul-16.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 17", 15, "subat/odul-17.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 18", 15, "subat/odul-18.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 19", 3, "subat/odul-19.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 20", 3, "subat/odul-20.jpg", "Şubat mağazası ödülü."),
            reward("Şubat Ödülü 21", 10, "subat/odul-21.jpg", "Şubat mağazası ödülü."),
            reward("Mevsimlik Yiyecek", 1, "subat/odul-22.jpg", "Şubat sezonluk yiyeceği."),
            
            
        ]
    },

    "mart": {
        title: "Mart Mağazası",
        eventName: "Mart - Kış Uykusundan Uyanın",
        currencyName: "Oyma Uğur Böceği",
        currencyImage: kaynakPath + "oyma-ugur-bocegi.png",
        period: "Mart etkinlik mağazası dönemi",
        level: "3. seviye ve üstü",
        cover: "../../../assents/images/magazalar/aylar/mart-magazasi.jpg",
        source: "dwar.gen.tr/library.php?c=153",
        intro: "Mart etkinliğinde kazanılan Oyma Uğur Böcekleri ile bahar temalı özel ödüller alınabilir.",
        notes: [
            "Mart Çuvalları içinde 75 adet Oyma Uğur Böceği bulunur.",
            "Bahar Ormanlarının Esansı en fazla 25 adet alınabilir.",
            "Etkinlik süresince elde edilmiş ok kılıfları ve peri eşyaları malikane depolarında saklanamaz."
        ],
        rewards: [
            reward("Mart Ödülü 1", 50, "mart/odul-01.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 2", 120, "mart/odul-02.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 3", 75, "mart/odul-03.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 4", 45, "mart/odul-04.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 5", 65, "mart/odul-05.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 6", 60, "mart/odul-06.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 7", 50, "mart/odul-07.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 8", 30, "mart/odul-08.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 9", 30, "mart/odul-09.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 10", 30, "mart/odul-10.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 11", 7, "mart/odul-11.jpg", "Mart mağazası ödülü."),
            reward("Mevsimlik Yiyecek", 1, "mart/odul-12.jpg", "Mart sezonluk yiyeceği."),
            reward("Mart Hediyesi 1", 3, "mart/odul-13.jpg", "Mart mağazası hediyesi."),
            reward("Mart Hediyesi 2", 3, "mart/odul-14.jpg", "Mart mağazası hediyesi."),
            reward("Mart Hediyesi 3", 3, "mart/odul-15.jpg", "Mart mağazası hediyesi."),
            reward("Bahar Ormanlarının Esansı", 5, "mart/odul-16.jpg", "En fazla 25 adet alınabilir."),
            reward("Mart Ödülü 17", 2, "mart/odul-17.jpg", "Mart mağazası ödülü."),
            reward("Ok Kılıfı", 15, "mart/odul-18.jpg", "Seviyeye uygun ok kılıfı elde edilir."),
            reward("Mart Hediyesi 4", 3, "mart/odul-19.jpg", "Mart mağazası hediyesi."),
            reward("Mart Hediyesi 5", 3, "mart/odul-20.jpg", "Mart mağazası hediyesi."),
            reward("Mart Ödülü 21", 15, "mart/odul-21.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 22", 15, "mart/odul-22.jpg", "Mart mağazası ödülü."),
            reward("Mart Ödülü 23", 30, "mart/odul-23.jpg", "Mart mağazası ödülü."),
            reward("Mart Hediyesi 6", 3, "mart/odul-24.jpg", "Mart mağazası hediyesi."),
            reward("Mart Hediyesi 7", 3, "mart/odul-25.jpg", "Mart mağazası hediyesi."),
            reward("Mart Hediyesi 8", 3, "mart/odul-26.jpg", "Mart mağazası hediyesi.")
        ]
    }
};