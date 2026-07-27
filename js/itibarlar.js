const repButtons = document.querySelectorAll(".rep-btn");
const repPopup = document.getElementById("repPopup");
const popupTitle = document.getElementById("popupTitle");
const popupContent = document.getElementById("popupContent");
const popupClose = document.getElementById("popupClose");

repButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const title = button.getAttribute("data-title");

        popupTitle.textContent = title;

        if (window.reputationData && window.reputationData[title]) {
            popupContent.innerHTML = window.reputationData[title];
        } else {
            popupContent.innerHTML = `
                <div class="rep-detail">
                    <div class="important-box">
                        <h3>Önemli Notlar</h3>
                        <p>Bu itibarın detaylarını buraya sonradan ekleyeceğiz.</p>
                    </div>
                </div>
            `;
        }

        repPopup.classList.add("active");

        if (typeof setupHonorCalculator === "function") {
            setupHonorCalculator();
        }

        if (typeof setupGoodHonorCalculator === "function") {
            setupGoodHonorCalculator();
        }

        if (typeof setupEmanationCalculator === "function") {
            setupEmanationCalculator();
        }
        if (typeof setupOldRelicCalculator === "function") {
    setupOldRelicCalculator();
}
if (typeof setupOldRelicCalculator === "function") {
    setupOldRelicCalculator();
}
    });
});

if (popupClose) {
    popupClose.addEventListener("click", function () {
        repPopup.classList.remove("active");
    });
}

if (repPopup) {
    repPopup.addEventListener("click", function (event) {
        if (event.target === repPopup) {
            repPopup.classList.remove("active");
        }
    });
}
