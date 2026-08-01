const guideSearchInput = document.getElementById("guideSearchInput");
const guideCards = document.querySelectorAll(".guide-card");
const guideEmptyMessage = document.getElementById("guideEmptyMessage");

function normalizeGuideText(text) {
    return String(text || "")
        .toLocaleLowerCase("tr-TR")
        .replaceAll("ç", "c")
        .replaceAll("ğ", "g")
        .replaceAll("ı", "i")
        .replaceAll("i̇", "i")
        .replaceAll("ö", "o")
        .replaceAll("ş", "s")
        .replaceAll("ü", "u")
        .trim();
}

function filterGuides() {
    const searchValue = normalizeGuideText(guideSearchInput.value);
    let visibleCount = 0;

    guideCards.forEach(function (card) {
        const title = normalizeGuideText(card.dataset.title);
        const text = normalizeGuideText(card.innerText);
        const isVisible = title.includes(searchValue) || text.includes(searchValue);

        card.style.display = isVisible ? "block" : "none";

        if (isVisible) {
            visibleCount++;
        }
    });

    if (guideEmptyMessage) {
        guideEmptyMessage.style.display = visibleCount === 0 ? "block" : "none";
    }
}

if (guideSearchInput) {
    guideSearchInput.addEventListener("input", filterGuides);
}