function calculateGoodReputationCost(currentHonor, targetHonor) {
    const ranges = [
        {
            min: 0,
            max: 1000,
            emanation: 70
        },
        {
            min: 1000,
            max: 2000,
            emanation: 100
        },
        {
            min: 2000,
            max: 3000,
            emanation: 130
        }
    ];

    let totalEmanation = 0;
    let totalCraft = 0;

    ranges.forEach(function (range) {
        const start = Math.max(currentHonor, range.min);
        const end = Math.min(targetHonor, range.max);

        if (end > start) {
            const honorAmount = end - start;
            const craftCount = Math.ceil(honorAmount / 10);

            totalCraft += craftCount;
            totalEmanation += craftCount * range.emanation;
        }
    });

    return {
        craft: totalCraft,
        emanation: totalEmanation
    };
}

function calculateEmanationFromItems(eyeAmount, skullAmount) {
    let remainingEyes = Math.max(0, Math.floor(eyeAmount));
    let remainingSkulls = Math.max(0, Math.floor(skullAmount));

    let emanation = 0;

    const eyePack10 = Math.floor(remainingEyes / 10);
    emanation += eyePack10 * 310;
    remainingEyes = remainingEyes % 10;

    emanation += remainingEyes * 30;

    const skullPack50 = Math.floor(remainingSkulls / 50);
    emanation += skullPack50 * 107;
    remainingSkulls = remainingSkulls % 50;

    const skullPack10 = Math.floor(remainingSkulls / 10);
    emanation += skullPack10 * 21;
    remainingSkulls = remainingSkulls % 10;

    emanation += remainingSkulls * 2;

    return emanation;
}

function setupGoodHonorCalculator() {
    const calculateBtn = document.getElementById("calculateGoodHonorBtn");
    const currentInput = document.getElementById("goodCurrentHonor");
    const targetInput = document.getElementById("goodTargetHonor");
    const resultBox = document.getElementById("goodHonorCalculatorResult");

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

        const result = calculateGoodReputationCost(currentHonor, targetHonor);

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Gereken İşlem</span>
                    <strong>${result.craft}</strong>
                </div>

                <div class="result-card">
                    <span>Emanasyon</span>
                    <strong>${result.emanation}</strong>
                </div>

                <div class="result-card">
                    <span>Kazanılacak Şan</span>
                    <strong>${result.craft * 10}</strong>
                </div>

                <div class="result-card">
                    <span>Ortalama İşlem</span>
                    <strong>+10</strong>
                </div>
            </div>
        `;
    });
}

function setupEmanationCalculator() {
    const calculateBtn = document.getElementById("calculateEmanationBtn");
    const eyeInput = document.getElementById("goodEyeAmount");
    const skullInput = document.getElementById("goodSkullAmount");
    const resultBox = document.getElementById("emanationCalculatorResult");

    if (!calculateBtn || !eyeInput || !skullInput || !resultBox) return;

    calculateBtn.addEventListener("click", function () {
        const eyeAmount = Number(eyeInput.value);
        const skullAmount = Number(skullInput.value);

        const emanation = calculateEmanationFromItems(eyeAmount, skullAmount);

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Öfkeli Göz</span>
                    <strong>${Math.max(0, Math.floor(eyeAmount))}</strong>
                </div>

                <div class="result-card">
                    <span>Kafatası</span>
                    <strong>${Math.max(0, Math.floor(skullAmount))}</strong>
                </div>

                <div class="result-card">
                    <span>Toplam Emanasyon</span>
                    <strong>${emanation}</strong>
                </div>

                <div class="result-card">
                    <span>Not</span>
                    <strong>Paketli hesap</strong>
                </div>
            </div>
        `;
    });
}

setupGoodHonorCalculator();
setupEmanationCalculator();