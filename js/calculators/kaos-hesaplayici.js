function setupChaosCalculator() {
    const calculateBtn = document.getElementById("calculateChaosBtn");
    const currentInput = document.getElementById("chaosCurrentPoint");
    const targetInput = document.getElementById("chaosTargetPoint");
    const resultBox = document.getElementById("chaosCalculatorResult");

    if (!calculateBtn || !currentInput || !targetInput || !resultBox) return;

    calculateBtn.addEventListener("click", function () {
        let currentPoint = Number(currentInput.value);
        let targetPoint = Number(targetInput.value);

        currentPoint = Math.max(0, currentPoint);
        targetPoint = Math.max(0, targetPoint);

        if (targetPoint <= currentPoint) {
            resultBox.innerHTML = `
                <strong>Hedef puan, mevcut puandan büyük olmalı.</strong>
            `;
            return;
        }

        const missingPoint = targetPoint - currentPoint;

        resultBox.innerHTML = `
            <div class="result-grid">
                <div class="result-card">
                    <span>Mevcut Puan</span>
                    <strong>${currentPoint}</strong>
                </div>

                <div class="result-card">
                    <span>Hedef Puan</span>
                    <strong>${targetPoint}</strong>
                </div>

                <div class="result-card">
                    <span>Eksik Puan</span>
                    <strong>${missingPoint}</strong>
                </div>

                <div class="result-card">
                    <span>Durum</span>
                    <strong>Not amaçlı</strong>
                </div>
            </div>
        `;
    });
}

setupChaosCalculator();