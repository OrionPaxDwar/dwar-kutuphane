/* KÖTÜLÜK YAPANLAR HESAPLAYICI */

function calculateReputationCost(currentHonor, targetHonor) {
    let totalEye = 0;
    let totalSkull = 0;
    let totalCraft = 0;

    if (targetHonor <= currentHonor) {
        return {
            craft: 0,
            eye: 0,
            skull: 0,
            honor: 0
        };
    }

    let honor = currentHonor;

    while (honor < targetHonor) {
        if (honor < 1000) {
            totalEye += 3;
            totalSkull += 5;
        } else if (honor < 2000) {
            totalEye += 4;
            totalSkull += 5;
        } else if (honor < 3000) {
            totalEye += 5;
            totalSkull += 5;
        }

        honor += 10;
        totalCraft++;
    }

    return {
        craft: totalCraft,
        eye: totalEye,
        skull: totalSkull,
        honor: targetHonor - currentHonor
    };
}

function setupHonorCalculator() {
    const calculateBtn = document.getElementById("calculateHonorBtn");
    const currentHonorInput = document.getElementById("currentHonor");
    const targetHonorInput = document.getElementById("targetHonor");
    const calculatorResult = document.getElementById("calculatorResult");

    if (!calculateBtn || !currentHonorInput || !targetHonorInput || !calculatorResult) {
        return;
    }

    calculateBtn.onclick = function () {
        let currentHonor = Number(currentHonorInput.value);
        let targetHonor = Number(targetHonorInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            calculatorResult.innerHTML = `<strong>Hedef şan, mevcut şandan büyük olmalı.</strong>`;
            return;
        }

        const result = calculateReputationCost(currentHonor, targetHonor);

        calculatorResult.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik Şan</span>
                    <strong>${result.honor}</strong>
                </div>

                <div class="result-card">
                    <span>Üretim Sayısı</span>
                    <strong>${result.craft}</strong>
                </div>

                <div class="result-card">
                    <span>Öfkeli Göz</span>
                    <strong>${result.eye}</strong>
                </div>

                <div class="result-card">
                    <span>Ölü Savaşçının Kafatası</span>
                    <strong>${result.skull}</strong>
                </div>
            </div>
        `;
    };
}

/* İYİLİK YAPANLAR HESAPLAYICI */

function calculateGoodReputationCost(currentHonor, targetHonor) {
    let totalEmanation = 0;
    let totalScroll = 0;

    if (targetHonor <= currentHonor) {
        return {
            honor: 0,
            scroll: 0,
            emanation: 0
        };
    }

    let honor = currentHonor;

    while (honor < targetHonor) {
        if (honor < 1000) {
            totalEmanation += 70;
        } else if (honor < 2000) {
            totalEmanation += 100;
        } else if (honor < 3000) {
            totalEmanation += 130;
        }

        honor += 10;
        totalScroll++;
    }

    return {
        honor: targetHonor - currentHonor,
        scroll: totalScroll,
        emanation: totalEmanation
    };
}

function calculateEmanationFromItems(eyeAmount, skullAmount) {
    let totalEmanation = 0;

    const eyePack10 = Math.floor(eyeAmount / 10);
    const eyeSingle = eyeAmount % 10;

    totalEmanation += eyePack10 * 310;
    totalEmanation += eyeSingle * 30;

    const skullPack50 = Math.floor(skullAmount / 50);
    let remainingSkull = skullAmount % 50;

    const skullPack10 = Math.floor(remainingSkull / 10);
    const skullSingle = remainingSkull % 10;

    totalEmanation += skullPack50 * 107;
    totalEmanation += skullPack10 * 21;
    totalEmanation += skullSingle * 2;

    return {
        emanation: totalEmanation,
        eyePack10: eyePack10,
        eyeSingle: eyeSingle,
        skullPack50: skullPack50,
        skullPack10: skullPack10,
        skullSingle: skullSingle
    };
}

function setupGoodHonorCalculator() {
    const calculateBtn = document.getElementById("calculateGoodHonorBtn");
    const currentHonorInput = document.getElementById("currentGoodHonor");
    const targetHonorInput = document.getElementById("targetGoodHonor");
    const resultBox = document.getElementById("goodCalculatorResult");

    if (!calculateBtn || !currentHonorInput || !targetHonorInput || !resultBox) {
        return;
    }

    calculateBtn.onclick = function () {
        let currentHonor = Number(currentHonorInput.value);
        let targetHonor = Number(targetHonorInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `<strong>Hedef itibar, mevcut itibardan büyük olmalı.</strong>`;
            return;
        }

        const result = calculateGoodReputationCost(currentHonor, targetHonor);

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik İtibar</span>
                    <strong>${result.honor}</strong>
                </div>

                <div class="result-card">
                    <span>Gereken Tomar</span>
                    <strong>${result.scroll}</strong>
                </div>

                <div class="result-card">
                    <span>İyilik Emanasyonu</span>
                    <strong>${result.emanation}</strong>
                </div>

                <div class="result-card">
                    <span>Hayran Dahil</span>
                    <strong>${result.emanation + 15000}</strong>
                </div>
            </div>
        `;
    };
}

function setupEmanationCalculator() {
    const calculateBtn = document.getElementById("calculateEmanationBtn");
    const eyeInput = document.getElementById("goodEyeAmount");
    const skullInput = document.getElementById("goodSkullAmount");
    const resultBox = document.getElementById("emanationCalculatorResult");

    if (!calculateBtn || !eyeInput || !skullInput || !resultBox) {
        return;
    }

    calculateBtn.onclick = function () {
        let eyeAmount = Number(eyeInput.value);
        let skullAmount = Number(skullInput.value);

        eyeAmount = Math.max(0, eyeAmount);
        skullAmount = Math.max(0, skullAmount);

        const result = calculateEmanationFromItems(eyeAmount, skullAmount);

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Toplam Emanasyon</span>
                    <strong>${result.emanation}</strong>
                </div>

                <div class="result-card">
                    <span>10'luk Göz Paketi</span>
                    <strong>${result.eyePack10}</strong>
                </div>

                <div class="result-card">
                    <span>Tekli Göz</span>
                    <strong>${result.eyeSingle}</strong>
                </div>

                <div class="result-card">
                    <span>50'lik Kafatası Paketi</span>
                    <strong>${result.skullPack50}</strong>
                </div>

                <div class="result-card">
                    <span>10'luk Kafatası Paketi</span>
                    <strong>${result.skullPack10}</strong>
                </div>

                <div class="result-card">
                    <span>Tekli Kafatası</span>
                    <strong>${result.skullSingle}</strong>
                </div>
            </div>
        `;
    };
}
function setupOldRelicCalculator() {
    const calculateBtn = document.getElementById("calculateOldRelicBtn");
    const currentInput = document.getElementById("oldRelicCurrentHonor");
    const targetInput = document.getElementById("oldRelicTargetHonor");
    const valueInput = document.getElementById("oldRelicValue");
    const resultBox = document.getElementById("oldRelicCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !valueInput || !resultBox) {
        return;
    }

    calculateBtn.onclick = function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);
        let itemValue = Number(valueInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `<strong>Hedef onur, mevcut onurdan büyük olmalı.</strong>`;
            return;
        }

        const missingHonor = targetHonor - currentHonor;
        const neededItems = Math.ceil(missingHonor / itemValue);
        const gainedHonor = neededItems * itemValue;
        const overflowHonor = gainedHonor - missingHonor;

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik Onur</span>
                    <strong>${missingHonor}</strong>
                </div>

                <div class="result-card">
                    <span>Nesne Değeri</span>
                    <strong>${itemValue}</strong>
                </div>

                <div class="result-card">
                    <span>Gereken Adet</span>
                    <strong>${neededItems}</strong>
                </div>

                <div class="result-card">
                    <span>Fazla Gelen Onur</span>
                    <strong>${overflowHonor}</strong>
                </div>
            </div>
        `;
    };
}
function setupCreatureHunterCalculator() {
    const calculateBtn = document.getElementById("calculateCreatureHunterBtn");
    const currentInput = document.getElementById("creatureCurrentHonor");
    const targetInput = document.getElementById("creatureTargetHonor");
    const valueInput = document.getElementById("creatureItemValue");
    const resultBox = document.getElementById("creatureHunterCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !valueInput || !resultBox) {
        return;
    }

    calculateBtn.onclick = function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);
        let itemValue = Number(valueInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `<strong>Hedef onur, mevcut onurdan büyük olmalı.</strong>`;
            return;
        }

        const missingHonor = targetHonor - currentHonor;
        const neededItems = Math.ceil(missingHonor / itemValue);
        const gainedHonor = neededItems * itemValue;
        const overflowHonor = gainedHonor - missingHonor;

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Eksik Onur</span>
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
                    <span>Fazla Gelen Onur</span>
                    <strong>${overflowHonor}</strong>
                </div>
            </div>
        `;
    };
}
function setupFlaundinCalculator() {
    const calculateBtn = document.getElementById("calculateFlaundinBtn");
    const currentInput = document.getElementById("flaundinCurrentHonor");
    const targetInput = document.getElementById("flaundinTargetHonor");
    const valueInput = document.getElementById("flaundinItemValue");
    const resultBox = document.getElementById("flaundinCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !valueInput || !resultBox) return;

    calculateBtn.onclick = function () {
        let currentHonor = Number(currentInput.value);
        let targetHonor = Number(targetInput.value);
        let itemValue = Number(valueInput.value);

        currentHonor = Math.max(0, Math.min(3000, currentHonor));
        targetHonor = Math.max(0, Math.min(3000, targetHonor));

        if (targetHonor <= currentHonor) {
            resultBox.innerHTML = `<strong>Hedef itibar, mevcut itibardan büyük olmalı.</strong>`;
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
                    <span>Fazla Gelen İtibar</span>
                    <strong>${overflowHonor}</strong>
                </div>
            </div>
        `;
    };
}
