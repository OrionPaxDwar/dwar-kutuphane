function setupFlaundinCalculator() {
    const calculateBtn = document.getElementById("calculateFlaundinBtn");
    const currentInput = document.getElementById("flaundinCurrentHonor");
    const targetInput = document.getElementById("flaundinTargetHonor");
    const valueInput = document.getElementById("flaundinItemValue");
    const resultBox = document.getElementById("flaundinCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !valueInput || !resultBox) return;

    calculateBtn.addEventListener("click", function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);
        let itemValue = Number(valueInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));
        itemValue = Math.max(1, itemValue);

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `
                <strong>Hedef itibar, mevcut itibardan büyük olmalı.</strong>
            `;
            return;
        }

        const missingHonor = targetHonor - currentHonor;
        const neededItems = Math.ceil(missingHonor / itemValue);
        const gainedHonor = neededItems * itemValue;
        const overflowHonor = gainedHonor - missingHonor;

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik İtibar</span>
                    <strong>${missingHonor}</strong>
                </div>

                <div class="result-card">
                    <span>Kaynak Değeri</span>
                    <strong>${itemValue}</strong>
                </div>

                <div class="result-card">
                    <span>Gereken Adet</span>
                    <strong>${neededItems}</strong>
                </div>

                <div class="result-card">
                    <span>Fazla Gelen</span>
                    <strong>${overflowHonor}</strong>
                </div>
            </div>
        `;
    });
}

function setupFlaundinDailyCalculator() {
    const calculateBtn = document.getElementById("calculateFlaundinDailyBtn");
    const currentInput = document.getElementById("flaundinDailyCurrent");
    const targetInput = document.getElementById("flaundinDailyTarget");
    const resultBox = document.getElementById("flaundinDailyCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !resultBox) return;

    calculateBtn.addEventListener("click", function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);

        currentHonor = Math.max(0, currentHonor);
        targetHonor = Math.max(0, targetHonor);

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `
                <strong>Hedef itibar, mevcut itibardan büyük olmalı.</strong>
            `;
            return;
        }

        const missingHonor = targetHonor - currentHonor;
        const dailyGain = 5;
        const neededDays = Math.ceil(missingHonor / dailyGain);
        const gainedHonor = neededDays * dailyGain;
        const overflowHonor = gainedHonor - missingHonor;

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik İtibar</span>
                    <strong>${missingHonor}</strong>
                </div>

                <div class="result-card">
                    <span>Günlük Kazanç</span>
                    <strong>${dailyGain}</strong>
                </div>

                <div class="result-card">
                    <span>Gereken Gün</span>
                    <strong>${neededDays}</strong>
                </div>

                <div class="result-card">
                    <span>Fazla Gelen</span>
                    <strong>${overflowHonor}</strong>
                </div>
            </div>
        `;
    });
}

setupFlaundinCalculator();
setupFlaundinDailyCalculator();