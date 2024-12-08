// Sayfa içeriklerini değiştirecek fonksiyon
function showPage(page) {
    const pageContent = document.getElementById("page-content");

    if (page === 'ekolojik-kredi') {
        pageContent.innerHTML = `
            <h2>Ekolojik Kredi Nedir?</h2>
            <p>Ekolojik kredi, çevreye duyarlı davranışları ödüllendiren bir sistemdir. Bu krediler, atıkların doğru ayrıştırılması, geri dönüşüme kazandırılması ve çevre dostu uygulamaların yaygınlaştırılmasına yardımcı olur. 
            Ekolojik kredi sistemi, çevreye olan duyarlılığı artırmayı, doğal kaynakları korumayı ve geri dönüşümün yaygınlaştırılmasını amaçlamaktadır.</p>
        `;
    } else if (page === 'hazirlayanlar') {
        pageContent.innerHTML = `
            <h2>Hazırlayanlar</h2>
            <p><strong>Danışman Öğretmen:</strong> Osman Onuk</p>
            <p><strong>Öğrenciler:</strong> Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
        `;
    } else if (page === 'geri-donusum') {
        pageContent.innerHTML = `
            <h2>Geri Dönüşüm Nedir?</h2>
            <p>Geri dönüşüm, atıkların yeniden işlenerek tekrar kullanılabilir hale getirilmesi sürecidir. Bu süreç, doğal kaynakları korur, enerji tasarrufu sağlar ve çevre kirliliğini azaltır. 
            Plastik, kağıt, cam ve metal gibi materyaller geri dönüştürülebilir.</p>
        `;
    } else if (page === 'bize-ulasin') {
        pageContent.innerHTML = `
            <h2>Bize Ulaşın</h2>
            <p>E-posta: ekolojikkreditubitak@gmail.com</p>
            <p>Adres: Torbalı Anadolu Lisesi</p>
        `;
    } else if (page === 'kayit') {
        pageContent.innerHTML = `
            <h2>Kayıt Ol</h2>
            <button onclick="showSubPage('ogrenci-kayit')">Öğrenci Kaydı</button>
            <button onclick="showSubPage('okul-kayit')">Okul Kaydı</button>
        `;
    } else if (page === 'veri-goruntuleme') {
        pageContent.innerHTML = `
            <h2>Veri Görüntüleme</h2>
            <form id="loginForm">
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="password">Şifre:</label>
                <input type="password" id="password" name="password" required><br><br>
                <button type="submit">Giriş Yap</button>
            </form>
        `;
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Giriş başarılı!");
        });
    } else if (page === 'veri-giris') {
        pageContent.innerHTML = `
            <h2>Veri Girişi</h2>
            <form id="veriGirisForm">
                <label for="okul-sifre">Okul Şifresi:</label>
                <input type="password" id="okul-sifre" name="okul-sifre" required><br><br>
                <label for="atikturu">Atık Türü:</label>
                <select id="atikturu" name="atikturu" required>
                    <option value="kağıt">Kağıt</option>
                    <option value="plastik">Plastik</option>
                    <option value="cam">Cam</option>
                    <option value="metal">Metal</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="yağ">Yağ</option>
                    <option value="tekstil">Tekstil</option>
                </select><br><br>
                <label for="miktar">Miktar (kg):</label>
                <input type="number" id="miktar" name="miktar" required><br><br>
                <button type="submit">Veriyi Gönder</button>
            </form>
        `;
        document.getElementById("veriGirisForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Veri başarıyla gönderildi!");
        });
    }
}

// Alt sayfalar için işlem
function showSubPage(subPage) {
    const pageContent = document.getElementById("page-content");
    
    if (subPage === 'ogrenci-kayit') {
        pageContent.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <form id="ogrenciForm">
                <label for="isim">İsim:</label>
                <input type="text" id="isim" name="isim" required><br><br>
                <label for="soyisim">Soyisim:</label>
                <input type="text" id="soyisim" name="soyisim" required><br><br>
                <label for="okulNumarasi">Okul Numarası:</label>
                <input type="number" id="okulNumarasi" name="okulNumarasi" required><br><br>
                <label for="email">E-posta:</label>
                <input type="email" id="email" name="email" required><br><br>
                <label for="telefon">Telefon:</label>
                <input type="tel" id="telefon" name="telefon" required><br><br>
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" name="okulAdi" required><br><br>
                <label for="sinif">Sınıf:</label>
                <input type="text" id="sinif" name="sinif" required><br><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
        document.getElementById("ogrenciForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Öğrenci kaydı başarıyla tamamlandı!");
            showPage('kayit');  // Ana sayfaya geri döner
        });
    } else if (subPage === 'okul-kayit') {
        pageContent.innerHTML = `
            <h2>Okul Kaydı</h2>
            <form id="okulForm">
                <label for="il">İl:</label>
                <input type="text" id="il" name="il" required><br><br>
                <label for="ilce">İlçe:</label>
                <input type="text" id="ilce" name="ilce" required><br><br>
                <label for="okulAdi">Okul Adı:</label>
                <input type="text" id="okulAdi" name="okulAdi" required><br><br>
                <label for="sifre">Şifre:</label>
                <input type="password" id="sifre" name="sifre" required><br><br>
                <button type="submit">Kaydet</button>
            </form>
        `;
        document.getElementById("okulForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Okul kaydı başarıyla tamamlandı!");
            showPage('kayit');  // Ana sayfaya geri döner
        });
    }
}

// Veri Girişi ve Öğrenci Verilerini Görüntüleme
function veriGiris() {
    const pageContent = document.getElementById("page-content");

    pageContent.innerHTML = `
        <h2>Veri Girişi</h2>
        <form id="veriForm">
            <label for="okulAdi">Okul Adı:</label>
            <input type="text" id="okulAdi" name="okulAdi" required><br><br>
            <label for="atikturu">Atık Türü:</label>
            <select id="atikturu" name="atikturu" required>
                <option value="kağıt">Kağıt</option>
                <option value="plastik">Plastik</option>
                <option value="cam">Cam</option>
                <option value="metal">Metal</option>
                <option value="elektronik">Elektronik</option>
                <option value="yağ">Yağ</option>
                <option value="tekstil">Tekstil</option>
            </select><br><br>
            <label for="kg">Kilogram (kg):</label>
            <input type="number" id="kg" name="kg" required><br><br>
            <label for="kayitYapan">Kaydeden Kişi:</label>
            <input type="text" id="kayitYapan" name="kayitYapan" required><br><br>
            <button type="submit">Veriyi Gönder</button>
        </form>
    `;
    document.getElementById("veriForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Veri başarıyla kaydedildi!");
        showPage('kayit'); // Ana sayfaya geri döner
    });
}

// Öğrenci Verilerini Görüntüleme
function veriGoruntuleme() {
    const pageContent = document.getElementById("page-content");

    pageContent.innerHTML = `
        <h2>Öğrenci Verileri</h2>
        <form id="veriGoruntulemeForm">
            <label for="email">E-posta:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="okulNumarasi">Okul Numarası:</label>
            <input type="number" id="okulNumarasi" name="okulNumarasi" required><br><br>
            <button type="submit">Verileri Görüntüle</button>
        </form>
    `;

    document.getElementById("veriGoruntulemeForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Veriler görüntüleniyor...");
        // Bu kısımda, öğrencinin kendi verilerini alacak ve gösterecek logic eklenebilir.
    });
}
