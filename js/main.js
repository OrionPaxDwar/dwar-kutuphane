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
function setupUpdatesPanel() {
    const latestUpdateBox = document.getElementById("latestUpdateBox");
    const updatesList = document.getElementById("updatesList");
    const openBtn = document.getElementById("openUpdatesModal");
    const modal = document.getElementById("updatesModal");
    const closeBtn = document.getElementById("closeUpdatesModal");
    const closeOverlay = document.getElementById("closeUpdatesOverlay");

    if (!latestUpdateBox || typeof siteUpdates === "undefined") return;

    const latestUpdate = siteUpdates[0];

    latestUpdateBox.innerHTML = `
        <h3>${latestUpdate.version} - ${latestUpdate.title}</h3>

        <div class="update-meta">
            Yayın tarihi: ${latestUpdate.date}
        </div>

        <ul>
            ${latestUpdate.notes.map(function (note) {
                return `<li>${note}</li>`;
            }).join("")}
        </ul>
    `;

    if (updatesList) {
        updatesList.innerHTML = siteUpdates.map(function (update) {
            return `
                <article class="update-history-item">
                    <h3>${update.version} - ${update.title}</h3>

                    <div class="update-meta">
                        Yayın tarihi: ${update.date}
                    </div>

                    <ul>
                        ${update.notes.map(function (note) {
                            return `<li>${note}</li>`;
                        }).join("")}
                    </ul>
                </article>
            `;
        }).join("");
    }

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

setupUpdatesPanel();