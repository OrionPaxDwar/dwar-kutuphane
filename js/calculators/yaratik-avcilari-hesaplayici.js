function setupCreatureHunterCalculator() {
    const calculateBtn = document.getElementById("calculateCreatureHunterBtn");
    const currentInput = document.getElementById("creatureCurrentHonor");
    const targetInput = document.getElementById("creatureTargetHonor");
    const valueInput = document.getElementById("creatureItemValue");
    const resultBox = document.getElementById("creatureHunterCalculatorResult");

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
                    <span>Ganimet Değeri</span>
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

setupCreatureHunterCalculator();