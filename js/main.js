console.log("Dwar Kütüphane yüklendi.");
function setupLegalModal() {
    const openBtn = document.getElementById("openLegalModal");
    const modal = document.getElementById("legalModal");
    const closeBtn = document.getElementById("closeLegalModal");
    const closeOverlay = document.getElementById("closeLegalOverlay");

    if (!openBtn || !modal || !closeBtn || !closeOverlay) return;

    openBtn.addEventListener("click", function () {
        modal.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    closeOverlay.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("active");
        }
    });
}

setupLegalModal();
