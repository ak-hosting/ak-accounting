# AK Accounting - Detaylı Özelleştirme Rehberi

Bu rehber, AK Accounting web sitesi şablonunu kendi ihtiyaçlarınıza göre özelleştirmeniz için hazırlanmıştır.

## 📋 İçindekiler

1. [Renk Teması Değiştirme](#renk-teması-değiştirme)
2. [Görsel Değiştirme](#görsel-değiştirme)
3. [İçerik Güncelleme](#içerik-güncelleme)
4. [Hizmet Kartları Özelleştirme](#hizmet-kartları-özelleştirme)
5. [İletişim Bilgileri](#iletişim-bilgileri)
6. [E-posta Yapılandırması](#e-posta-yapılandırması)
7. [SEO Optimizasyonu](#seo-optimizasyonu)
8. [Performans Optimizasyonu](#performans-optimizasyonu)

## 🎨 Renk Teması Değiştirme

### CSS Değişkenleri
`assets/css/style.css` dosyasının başındaki `:root` bölümünü düzenleyin:

```css
:root {
    --primary-color: #003087;    /* Ana renk - Lacivert */
    --secondary-color: #6B7280;  /* İkincil renk - Gri */
    --accent-color: #FFFFFF;     /* Vurgu rengi - Beyaz */
    --success-color: #10B981;    /* Başarı rengi - Yeşil */
    --warning-color: #F59E0B;    /* Uyarı rengi - Turuncu */
    --danger-color: #EF4444;     /* Hata rengi - Kırmızı */
    --light-bg: #F8F9FA;         /* Açık arka plan */
    --dark-bg: #1F2937;          /* Koyu arka plan */
    --text-primary: #1F2937;     /* Ana metin rengi */
    --text-secondary: #6B7280;   /* İkincil metin rengi */
    --border-color: #E5E7EB;     /* Kenarlık rengi */
}
```

### Önerilen Renk Paletleri

#### Profesyonel Mavi (Varsayılan)
```css
--primary-color: #003087;
--secondary-color: #6B7280;
```

#### Yeşil Tema (Çevre Dostu)
```css
--primary-color: #059669;
--secondary-color: #6B7280;
```

#### Kırmızı Tema (Enerjik)
```css
--primary-color: #DC2626;
--secondary-color: #6B7280;
```

#### Mor Tema (Yaratıcı)
```css
--primary-color: #7C3AED;
--secondary-color: #6B7280;
```

## 🖼️ Görsel Değiştirme

### Gerekli Görseller
`assets/images/` klasörüne aşağıdaki görselleri ekleyin:

#### Zorunlu Görseller
- `hero-image.jpg` - Ana sayfa hero bölümü (1920x1080px önerilen)
- `office-1.jpg` - Ofis görseli 1 (800x600px)
- `office-2.jpg` - Ofis görseli 2 (800x600px)
- `office-3.jpg` - Ofis görseli 3 (800x600px)
- `office-4.jpg` - Ofis görseli 4 (800x600px)
- `team-1.jpg` - Ekip görseli 1 (800x600px)
- `team-2.jpg` - Ekip görseli 2 (800x600px)

#### Görsel Optimizasyonu
```bash
# Görselleri optimize etmek için (ImageOptim kullanarak)
# macOS için: https://imageoptim.com/
# Windows için: https://tinypng.com/
```

### Görsel Yollarını Güncelleme
`index.html` dosyasında görsel yollarını güncelleyin:

```html
<!-- Hero bölümü -->
<img src="assets/images/your-hero-image.jpg" alt="AK Accounting Ofis">

<!-- Galeri bölümü -->
<img src="assets/images/your-office-1.jpg" alt="Modern Ofis">
<img src="assets/images/your-office-2.jpg" alt="Toplantı Salonu">
```

## 📝 İçerik Güncelleme

### Ana Sayfa İçeriği
`index.html` dosyasındaki metinleri güncelleyin:

```html
<!-- Hero bölümü -->
<h1 class="display-4 fw-bold text-primary mb-4">
    Sizin Şirket Adınız
</h1>
<p class="lead mb-4">
    Sizin şirket açıklamanız buraya gelecek.
</p>

<!-- Hakkımızda bölümü -->
<h2 class="section-title mb-4">Neden Sizin Şirket Adınız?</h2>
<p class="lead mb-5">
    Şirketinizin hikayesi ve deneyimi buraya gelecek.
</p>
```

### Özellik Kartları
```html
<div class="feature-card text-center p-4">
    <i class="fas fa-shield-alt fa-3x text-primary mb-3"></i>
    <h4>Özellik Başlığı</h4>
    <p>Özellik açıklaması buraya gelecek.</p>
</div>
```

## 💼 Hizmet Kartları Özelleştirme

### Yeni Hizmet Ekleme
```html
<div class="col-lg-4 col-md-6">
    <div class="service-card h-100">
        <div class="service-icon">
            <i class="fas fa-chart-pie"></i> <!-- Font Awesome ikonu -->
        </div>
        <h4>Yeni Hizmet Adı</h4>
        <p>Hizmet açıklaması buraya gelecek.</p>
        <div class="service-price">₺1.500/ay</div>
        <ul class="service-features">
            <li>Özellik 1</li>
            <li>Özellik 2</li>
            <li>Özellik 3</li>
        </ul>
    </div>
</div>
```

### Mevcut Hizmetleri Düzenleme
Her hizmet kartı için şu alanları güncelleyin:

1. **İkon**: `fas fa-[icon-name]` formatında
2. **Başlık**: `<h4>` etiketi içinde
3. **Açıklama**: `<p>` etiketi içinde
4. **Fiyat**: `<div class="service-price">` içinde
5. **Özellikler**: `<ul class="service-features">` listesi

### Font Awesome İkonları
Kullanabileceğiniz bazı ikonlar:
- `fa-calculator` - Hesaplama
- `fa-book` - Defter
- `fa-user-tie` - Personel
- `fa-chart-line` - Grafik
- `fa-building` - Şirket
- `fa-file-contract` - Sözleşme
- `fa-chart-pie` - Pasta grafik
- `fa-coins` - Para
- `fa-receipt` - Makbuz
- `fa-balance-scale` - Denge

## 📞 İletişim Bilgileri

### İletişim Bölümü Güncelleme
```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt text-primary"></i>
    <div>
        <strong>Adres:</strong><br>
        Sizin Adresiniz<br>
        Şehir/İl
    </div>
</div>

<div class="contact-item">
    <i class="fas fa-phone text-primary"></i>
    <div>
        <strong>Telefon:</strong><br>
        +90 (212) 555 0123
    </div>
</div>

<div class="contact-item">
    <i class="fas fa-envelope text-primary"></i>
    <div>
        <strong>E-posta:</strong><br>
        info@yourcompany.com
    </div>
</div>

<div class="contact-item">
    <i class="fas fa-clock text-primary"></i>
    <div>
        <strong>Çalışma Saatleri:</strong><br>
        Pazartesi - Cuma: 09:00 - 18:00
    </div>
</div>
```

### İletişim Formu Özelleştirme
```html
<select class="form-select" id="service" name="service">
    <option value="">Hizmet Seçiniz</option>
    <option value="hizmet-1">Hizmet 1</option>
    <option value="hizmet-2">Hizmet 2</option>
    <option value="hizmet-3">Hizmet 3</option>
</select>
```

## 📧 E-posta Yapılandırması

### .env Dosyası Oluşturma
```bash
cp .env.example .env
```

### SMTP Ayarları
```env
# Gmail için örnek
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=info@yourcompany.com

# Outlook için örnek
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
FROM_EMAIL=your-email@outlook.com
TO_EMAIL=info@yourcompany.com
```

### Gmail App Password Oluşturma
1. Google Hesabınıza gidin
2. Güvenlik > 2 Adımlı Doğrulama'yı açın
3. Uygulama Şifreleri > Yeni uygulama şifresi oluşturun
4. Oluşturulan şifreyi `SMTP_PASS` olarak kullanın

## 🔍 SEO Optimizasyonu

### Meta Etiketleri
`index.html` dosyasının `<head>` bölümünü güncelleyin:

```html
<meta name="description" content="Sizin şirket açıklamanız - Türkiye'de güvenilir mali müşavirlik hizmetleri">
<meta name="keywords" content="mali müşavir [şehir], muhasebe hizmetleri [şehir], vergi danışmanlığı [şehir]">
<meta name="author" content="Sizin Adınız">
<meta property="og:title" content="Sizin Şirket Adı - Mali Müşavirlik">
<meta property="og:description" content="Sizin şirket açıklamanız">
<meta property="og:image" content="https://yourwebsite.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

### Yerel SEO için Anahtar Kelimeler
Türkiye şehirleri için önerilen anahtar kelimeler:
- "mali müşavir İstanbul"
- "muhasebe hizmetleri Ankara"
- "vergi danışmanlığı İzmir"
- "mali müşavir Kadıköy"
- "muhasebe hizmetleri Çankaya"

### Schema.org Markup
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "Sizin Şirket Adı",
  "description": "Sizin şirket açıklamanız",
  "url": "https://yourwebsite.com",
  "telephone": "+90-212-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sizin Adresiniz",
    "addressLocality": "Şehir",
    "addressRegion": "İl",
    "postalCode": "34000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0082,
    "longitude": 28.9784
  },
  "openingHours": "Mo-Fr 09:00-18:00"
}
</script>
```

## ⚡ Performans Optimizasyonu

### Görsel Optimizasyonu
```bash
# Görselleri sıkıştırmak için
# macOS: ImageOptim
# Windows: TinyPNG
# Linux: ImageMagick

# Örnek ImageMagick komutu
convert input.jpg -quality 85 -resize 800x600 output.jpg
```

### CSS/JS Minifikasyonu
```bash
# CSS minifikasyonu için
# Online: https://cssminifier.com/
# Node.js: npm install -g clean-css-cli
clean-css -o style.min.css style.css

# JS minifikasyonu için
# Online: https://jscompress.com/
# Node.js: npm install -g uglify-js
uglifyjs script.js -o script.min.js
```

### Browser Caching
`.htaccess` dosyası oluşturun:
```apache
# Browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 🔧 Gelişmiş Özelleştirmeler

### Özel CSS Ekleme
`assets/css/style.css` dosyasının sonuna ekleyin:

```css
/* Özel stilleriniz buraya */
.custom-class {
    /* Özel CSS kodları */
}
```

### JavaScript Fonksiyonları
`assets/js/script.js` dosyasına ekleyin:

```javascript
// Özel JavaScript fonksiyonları
function customFunction() {
    // Özel kodlarınız
}

// Global nesneye ekleme
window.AKAccounting.customFunction = customFunction;
```

### Yeni Bölüm Ekleme
```html
<!-- Yeni bölüm örneği -->
<section id="new-section" class="py-5">
    <div class="container">
        <h2 class="section-title text-center mb-5">Yeni Bölüm Başlığı</h2>
        <div class="row">
            <div class="col-md-6">
                <p>Bölüm içeriği buraya gelecek.</p>
            </div>
            <div class="col-md-6">
                <img src="assets/images/new-image.jpg" alt="Yeni Görsel" class="img-fluid">
            </div>
        </div>
    </div>
</section>
```

## 🚀 Deployment

### GitHub Pages
1. Repository'yi GitHub'a yükleyin
2. Settings > Pages
3. Source: Deploy from a branch
4. Branch: main
5. Save

### Netlify
1. Netlify hesabı oluşturun
2. New site from Git
3. Repository'yi seçin
4. Deploy

### Vercel
1. Vercel hesabı oluşturun
2. New Project
3. Import Git Repository
4. Deploy

## 📞 Destek

### Ücretsiz Destek
- **GitHub Issues**: [Proje sayfasında](https://github.com/ak-hosting/ak-accounting/issues)
- **E-posta**: ak@ak-pro.com

### Ücretli Özelleştirme
- **Logo Tasarımı**: ₺500-1.000
- **Renk Teması**: ₺200
- **Ek Özellikler**: ₺300-1.000

---

**Geliştirici**: a.koc  
**İletişim**: [ak@ak-pro.com](mailto:ak@ak-pro.com)  
**GitHub**: [ak-hosting](https://github.com/ak-hosting) 