# AK Accounting

Mali müşavirlik ofisleri için özgün, erişilebilir ve statik web sitesi şablonu.

**Canlı demo:** https://ak-hosting.github.io/ak-accounting/<br>
**Lisans:** MIT

> Demo içerikleri kurgusaldır. Bu proje gerçek mali müşavirlik hizmeti, fiyat teklifi veya finansal danışmanlık sunmaz.

## Neler var?

- Ledger çalışma alanını çağrıştıran bağımsız görsel tasarım
- Mobil menü, klavye odağı ve azaltılmış hareket desteği
- Kişisel veri istemeyen yerel kapsam önizlemesi
- Harici font, ikon, analiz veya UI kütüphanesi olmadan çalışma
- GitHub Pages için doğrudan yayınlanabilir statik dosyalar

## Yerel önizleme

```bash
python3 -m http.server 8000
```

Ardından http://localhost:8000 adresini açın.

## Kontroller

```bash
npm test
npm run lint
npm run build
```

Üç komut da statik dosyaları, zorunlu bağlantıları, yerel varlıkları ve demo davranışını doğrular.

## Özelleştirme

1. `index.html` içindeki kurgusal metinleri doğrulanmış işletme bilgileriyle değiştirin.
2. `assets/css/style.css` başındaki renk değişkenlerini markanıza uyarlayın.
3. Hizmet kapsamı, mevzuat, fiyat ve iletişim iddialarını yayınlamadan önce doğrulayın.
4. Gerçek form gönderimi eklerseniz arka uç, güvenlik, onay ve gizlilik metinlerini ayrıca kurun.
5. `impressum.html` ve `datenschutz.html` dosyalarını üretim sorumlusuna göre güncelleyin.

Ayrıntılar için [CUSTOMIZATION.md](CUSTOMIZATION.md) ve varlık durumu için [ASSETS.md](ASSETS.md) dosyasına bakın.

## Yayınlama

Repository, GitHub Pages üzerinde `main` dalının kökünden çalışır. Ek bir build adımı gerekmez. Docker dosyaları yalnızca isteğe bağlı yerel önizleme içindir.

## Lisans

Kod MIT lisanslıdır. Ayrıntılar [LICENSE](LICENSE) dosyasındadır.
