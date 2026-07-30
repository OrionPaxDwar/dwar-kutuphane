window.shopDetails = window.shopDetails || {};

window.shopDetails["agustos-magazasi"] = {
    title: "Ağustos Mağazası",
    eventName: "Ağustos - Haydi Doğaya",
    currencyName: "Balık Kemikleri",
    period: "28 Ağustos - 1 Eylül",
    level: "3. seviye ve üstü",

    intro: `
        <p>
            Ağustos etkinliğinde şehir meydanlarında açılan fuarda,
            toplanan <strong>Balık Kemikleri</strong> karşılığında özel ödüller alınabilir.
        </p>

        <p>
            Etkinlik görevleri 3. seviye ve üstü savaşçılar tarafından yapılabilir.
            Ana görev tek seferliktir ve ödül olarak <strong>Balık Kemikleri x300</strong> verir.
        </p>
    `,

    rewards: [
        {
            name: "Ödül 1",
            cost: 200,
            image: "../assents/images/magazalar/oduller/agustos/odul-01.jpg"
        },
        {
            name: "Ödül 2",
            cost: 400,
            image: "../assents/images/magazalar/oduller/agustos/odul-02.jpg"
        },
        {
            name: "Ödül 3",
            cost: 300,
            image: "../assents/images/magazalar/oduller/agustos/odul-03.jpg"
        }
    ],

    notes: [
        "Fuar şehir meydanlarında açılır.",
        "Ödüller Balık Kemikleri ile alınır.",
        "Kalan Balık Kemikleri etkinlik sonunda sezonluk yiyeceklerle takas edilebilir.",
        "Kaçakçılardan Ağustos Çantası alınabilir."
    ]
};

console.log("AĞUSTOS DATA YÜKLENDİ", window.shopDetails);