window.reputationData = window.reputationData || {};

window.reputationData["Flaundinler"] = `
    <div class="rep-detail flaundin-detail">

        <div class="important-box flaundin-box">
            <h3>Önemli Notlar</h3>

            <ul>
                <li><strong>Başlama Seviyesi:</strong> 6. seviye.</li>
                <li><strong>Bağlantılı NPC:</strong> Akvarius.</li>
                <li><strong>Ön Şart:</strong> Kaos Yarıtanrısı ve Orlufya'dan şeytan çıkarılması görevleri tamamlanmalı.</li>
                <li><strong>Ana Mantık:</strong> Sualtı dünyasında Flaundinlere yardım ederek itibar kazanılır.</li>
                <li><strong>Önemli Ganimet:</strong> Golleyd İncileri / Deniz Midyesi.</li>
            </ul>
        </div>

        <div class="lore-box flaundin-box">
            <h3>Kısa Açıklama</h3>

            <p>
                Flaundinler, Sualtı Zindanı'nda Kaos Yarıtanrısı RaskriuTsu'ya bekçilik eden
                deniz sakinleridir. Amaçları, bu yaratığın uyanmasını engelleyerek iki kıtayı
                büyük bir tehlikeden korumaktır.
            </p>

            <p>
                Zamanla bazı Flaundinler görevlerinden uzaklaşarak Yeni Akım adı verilen asi
                bir gruba katılmıştır. Savaşçının görevi, Flaundinlere yardım ederek hem
                sualtı düzenini korumak hem de Flaundinler itibarını yükseltmektir.
            </p>
        </div>

        <div class="quest-box flaundin-box">
            <h3>Tekrarlanan Görev</h3>

            <div class="table-wrap">
                <table class="rep-table flaundin-table">
                    <thead>
                        <tr>
                            <th>Görev Adı</th>
                            <th>NPC</th>
                            <th>Ödül</th>
                            <th>Sıklık</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Sualtı Bilimine Yardım</td>
                            <td>Akvarius</td>
                            <td>5 İtibar</td>
                            <td>Günlük</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="craft-box flaundin-box">
            <h3>Onur Kabul Etme</h3>

            <div class="table-wrap">
                <table class="rep-table flaundin-table">
                    <thead>
                        <tr>
                            <th>Kaynak</th>
                            <th>Değer</th>
                            <th>Üst Sınır</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Yaratık Ganimeti</td>
                            <td>1 İtibar</td>
                            <td>500</td>
                        </tr>

                        <tr>
                            <td>Yaratık Ganimeti</td>
                            <td>1 İtibar</td>
                            <td>1000</td>
                        </tr>

                        <tr>
                            <td>Yaratık Ganimeti</td>
                            <td>1 İtibar</td>
                            <td>2000</td>
                        </tr>

                        <tr>
                            <td>Yaratık Ganimeti</td>
                            <td>5 İtibar</td>
                            <td>2400</td>
                        </tr>

                        <tr>
                            <td>Deniz Midyesi</td>
                            <td>5 İtibar</td>
                            <td>3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="medal-box flaundin-box">
            <h3>Madalyon Aşamaları</h3>

            <div class="medal-list">
                <div class="medal-row">
                    <strong>500 Onur</strong>
                    <span>Kabullenme Madalyonu</span>
                </div>

                <div class="medal-row">
                    <strong>1000 Onur</strong>
                    <span>Dostluk Madalyonu</span>
                </div>

                <div class="medal-row">
                    <strong>2000 Onur</strong>
                    <span>Hürmet Madalyonu</span>
                </div>

                <div class="medal-row">
                    <strong>3000 Onur</strong>
                    <span>Saygı Madalyonu</span>
                </div>
            </div>
        </div>

        <div class="calculator-box flaundin-box">
            <h3>Flaundinler Hesaplayıcı</h3>

            <p>
                Mevcut itibarını, hedef itibarını ve kullanacağın ganimet değerini gir.
                Sistem yaklaşık kaç adet gerektiğini hesaplar.
            </p>

            <div class="calculator-grid flaundin-calculator">
                <input type="number" id="flaundinCurrentHonor" placeholder="Mevcut itibar" min="0" max="3000">

                <input type="number" id="flaundinTargetHonor" placeholder="Hedef itibar" min="0" max="3000">

                <select id="flaundinItemValue">
                    <option value="1">Yaratık Ganimeti - 1 İtibar</option>
                    <option value="5">Deniz Midyesi / Güçlü Ganimet - 5 İtibar</option>
                </select>

                <button id="calculateFlaundinBtn">Hesapla</button>
            </div>

            <div id="flaundinCalculatorResult" class="calculator-result"></div>
        </div>

    </div>
`;