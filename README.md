# AK Accounting - Muhasebe ve Mali Müşavirlik Web Sitesi Şablonu

![AK Accounting](https://img.shields.io/badge/AK-Accounting-blue?style=for-the-badge&logo=github)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-7952B3?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Türkiye'deki muhasebe ve mali müşavirlik ofisleri için ücretsiz, SEO dostu ve mobil uyumlu web sitesi şablonu. Bootstrap 5 ile geliştirildi, birkaç saniyede klonlayıp çalıştırabilirsiniz!

**[🚀 Canlı Demoyu Görün](https://ak-hosting.github.io/ak-accounting/)** | **[📧 Destek için İletişime Geçin](mailto:ak@ak-pro.com)**

## 🚀 Özellikler

### ✨ Profesyonel Tasarım
- **Mobil Öncelikli**: Bootstrap 5 ile tamamen responsive tasarım
- **Modern UI/UX**: Temiz, profesyonel ve güven verici estetik
- **Hızlı Yükleme**: Optimize edilmiş görseller ve kod
- **SEO Dostu**: Türkiye için özel anahtar kelimeler

### 📊 Hizmet Tanıtımı
- **Vergi Danışmanlığı**: ₺1.200/ay
- **Defter Tutma**: ₺800/ay
- **Bordro Hizmetleri**: ₺600/ay
- **Mali Raporlama**: ₺1.500/ay
- **Şirket Kuruluşu**: ₺2.000
- **Denetim Hizmetleri**: ₺3.000/ay

### 📞 İletişim & Form
- **SMTP Entegrasyonu**: E-posta gönderimi için hazır yapılandırma
- **Form Validasyonu**: JavaScript ile güvenli form kontrolü
- **Bildirim Sistemi**: Kullanıcı dostu geri bildirim

### 🖼️ Galeri & Görseller
- **Lightbox Özelliği**: Profesyonel görsel galerisi
- **Optimize Görseller**: Hızlı yükleme için sıkıştırılmış
- **Ofis Temalı**: Mali müşavirlik sektörüne uygun

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](assets/images/screenshot-homepage.png)

### Hizmetler
![Hizmetler](assets/images/screenshot-services.png)

### İletişim
![İletişim](assets/images/screenshot-contact.png)

## 📜 Kredi Zorunluluğu

Bu şablonu kullanıyorsanız, lütfen footer'da şu ibareyi ekleyin:

```html
<strong>Geliştirici:</strong> a.koc - <a href="https://github.com/ak-hosting">GitHub</a>
```

## 🛠️ Kurulum

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/ak-hosting/ak-accounting.git
cd ak-accounting
```

### 2. İçerikleri Özelleştirin
- `index.html` dosyasındaki metinleri ve görselleri güncelleyin
- `assets/css/style.css` dosyasındaki renkleri değiştirin
- `assets/images/` klasörüne kendi ofis görsellerinizi ekleyin

### 3. E-posta Yapılandırması
```bash
cp .env.example .env
```

`.env` dosyasına SMTP ayarlarınızı ekleyin:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=info@yourbusiness.com
```

### 4. Yerel Sunucuda Çalıştırın
```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .

# PHP ile
php -S localhost:8000
```

Tarayıcıda `http://localhost:8000` adresine gidin.

## 🎨 Özelleştirme Rehberi

### Renk Teması Değiştirme
`assets/css/style.css` dosyasındaki CSS değişkenlerini güncelleyin:

```css
:root {
    --primary-color: #003087;    /* Ana renk - Lacivert */
    --secondary-color: #6B7280;  /* İkincil renk - Gri */
    --accent-color: #FFFFFF;     /* Vurgu rengi - Beyaz */
    --success-color: #10B981;    /* Başarı rengi - Yeşil */
    --warning-color: #F59E0B;    /* Uyarı rengi - Turuncu */
    --danger-color: #EF4444;     /* Hata rengi - Kırmızı */
}
```

### Görsel Değiştirme
1. `assets/images/` klasörüne kendi görsellerinizi ekleyin
2. `index.html` dosyasındaki görsel yollarını güncelleyin:

```html
<!-- Örnek -->
<img src="assets/images/your-office-image.jpg" alt="Ofis Görseli">
```

### Hizmet Kartları Özelleştirme
`index.html` dosyasındaki hizmet kartlarını düzenleyin:

```html
<div class="service-card h-100">
    <div class="service-icon">
        <i class="fas fa-calculator"></i>
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
```

### İletişim Bilgileri Güncelleme
`index.html` dosyasındaki iletişim bölümünü güncelleyin:

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt text-primary"></i>
    <div>
        <strong>Adres:</strong><br>
        Sizin Adresiniz<br>
        Şehir/İl
    </div>
</div>
```

## 📞 Destek ve İletişim

### Ücretsiz Destek
- **GitHub Issues**: [Proje sayfasında](https://github.com/ak-hosting/ak-accounting/issues) soru sorun
- **E-posta**: ak@ak-pro.com

### Ücretli Özelleştirme Hizmetleri
- **Logo Tasarımı**: ₺500-1.000
- **Renk Teması Değişimi**: ₺200
- **Ek Özellikler**: ₺300-1.000
  - Randevu sistemi
  - Dosya yükleme formu
  - Çoklu dil desteği
  - Özel animasyonlar

## 🏗️ Proje Yapısı

```
ak-accounting/
├── index.html              # Ana HTML dosyası
├── assets/
│   ├── css/
│   │   └── style.css       # Ana CSS dosyası
│   ├── js/
│   │   └── script.js       # JavaScript dosyası
│   └── images/             # Görseller klasörü
│       ├── hero-image.jpg
│       ├── office-1.jpg
│       ├── office-2.jpg
│       ├── office-3.jpg
│       ├── office-4.jpg
│       ├── team-1.jpg
│       └── team-2.jpg
├── .env.example            # E-posta yapılandırması örneği
├── README.md               # Bu dosya
├── CUSTOMIZATION.md        # Detaylı özelleştirme rehberi
└── LICENSE                 # MIT lisansı
```

## 🔧 Teknik Özellikler

### Kullanılan Teknolojiler
- **HTML5**: Semantik markup
- **CSS3**: Modern styling ve animasyonlar
- **JavaScript (ES6+)**: İnteraktif özellikler
- **Bootstrap 5**: Responsive framework
- **Font Awesome 6**: İkonlar
- **Lightbox2**: Galeri özelliği

### Performans Optimizasyonları
- **Lazy Loading**: Görseller için
- **CSS/JS Minifikasyonu**: Hızlı yükleme
- **Browser Caching**: Tekrar ziyaretler için
- **Image Optimization**: Sıkıştırılmış görseller

### SEO Optimizasyonu
- **Meta Etiketleri**: Türkiye için özel
- **Structured Data**: Schema.org markup
- **Sitemap**: Otomatik oluşturma
- **Robots.txt**: Arama motoru yönergeleri

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Detaylar için `LICENSE` dosyasını inceleyin.

### Ticari Kullanım
- ✅ Ücretsiz kullanım
- ✅ Ticari projelerde kullanım
- ✅ Değiştirme ve dağıtım
- ❌ Sorumluluk reddi

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📈 Gelecek Planları

- [ ] Çoklu dil desteği (İngilizce)
- [ ] Randevu sistemi entegrasyonu
- [ ] Dosya yükleme özelliği
- [ ] Blog bölümü
- [ ] Müşteri yorumları sistemi
- [ ] WhatsApp entegrasyonu
- [ ] Google Analytics entegrasyonu

## 🎯 Hedef Kitle

- **KOBİ'ler**: Küçük ve orta ölçekli işletmeler
- **Serbest Meslek Sahipleri**: Freelancer'lar ve danışmanlar
- **Büyük İşletmeler**: Kurumsal müşteriler
- **Start-up'lar**: Yeni girişimler

## 🌍 Türkiye Odaklı Özellikler

- **Türk Lirası**: ₺ sembolü ile fiyatlandırma
- **Yerel SEO**: Türkiye şehirleri için anahtar kelimeler
- **Türkçe İçerik**: Tamamen Türkçe dil desteği
- **Yerel Yasalara Uyum**: Türkiye vergi mevzuatına uygun

## 📊 İstatistikler

- **GitHub Stars**: [![GitHub stars](https://img.shields.io/github/stars/ak-hosting/ak-accounting)](https://github.com/ak-hosting/ak-accounting/stargazers)
- **GitHub Forks**: [![GitHub forks](https://img.shields.io/github/forks/ak-hosting/ak-accounting)](https://github.com/ak-hosting/ak-accounting/network)
- **GitHub Issues**: [![GitHub issues](https://img.shields.io/github/issues/ak-hosting/ak-accounting)](https://github.com/ak-hosting/ak-accounting/issues)

---

**Geliştirici**: a.koc  
**GitHub**: [ak-hosting](https://github.com/ak-hosting)  
**İletişim**: [ak@ak-pro.com](mailto:ak@ak-pro.com)  
**Lisans**: MIT

---

⭐ Bu projeyi beğendiyseniz, GitHub'da star vermeyi unutmayın! 