function calculateEvilReputationCost(currentHonor, targetHonor) {
    const ranges = [
        {
            min: 0,
            max: 1000,
            eye: 3,
            skull: 5
        },
        {
            min: 1000,
            max: 2000,
            eye: 4,
            skull: 5
        },
        {
            min: 2000,
            max: 3000,
            eye: 5,
            skull: 5
        }
    ];

    let totalEye = 0;
    let totalSkull = 0;
    let totalCraft = 0;

    ranges.forEach(function (range) {
        const start = Math.max(currentHonor, range.min);
        const end = Math.min(targetHonor, range.max);

        if (end > start) {
            const honorAmount = end - start;
            const craftCount = Math.ceil(honorAmount / 10);

            totalCraft += craftCount;
            totalEye += craftCount * range.eye;
            totalSkull += craftCount * range.skull;
        }
    });

    return {
        craft: totalCraft,
        eye: totalEye,
        skull: totalSkull
    };
}

function setupEvilHonorCalculator() {
    const calculateBtn = document.getElementById("calculateEvilHonorBtn");
    const currentInput = document.getElementById("evilCurrentHonor");
    const targetInput = document.getElementById("evilTargetHonor");
    const resultBox = document.getElementById("evilHonorCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !resultBox) return;

    calculateBtn.addEventListener("click", function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `
                <strong>Hedef şan, mevcut şandan büyük olmalı.</strong>
            `;
            return;
        }

        const result = calculateEvilReputationCost(currentHonor, targetHonor);

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Gereken İşlem</span>
                    <strong>${result.craft}</strong>
                </div>

                <div class="result-card">
                    <span>Öfkeli Göz</span>
                    <strong>${result.eye}</strong>
                </div>

                <div class="result-card">
                    <span>Kafatası</span>
                    <strong>${result.skull}</strong>
                </div>

                <div class="result-card">
                    <span>Kazanılacak Şan</span>
                    <strong>${result.craft * 10}</strong>
                </div>
            </div>
        `;
    });
}

setupEvilHonorCalculator();