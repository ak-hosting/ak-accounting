# Özelleştirme rehberi

## 1. Gerçek içeriği yerleştirin

`index.html` içindeki marka, hizmetler, dönem akışı ve kapsam metinlerini doğrulanmış bilgilerle değiştirin. Kurgusal başarı oranı, müşteri yorumu, fiyat veya mevzuat vaadi eklemeyin.

## 2. Görsel sistemi uyarlayın

`assets/css/style.css` başındaki değişkenler ana kontrol noktalarıdır:

```css
:root {
  --ink: #151c2c;
  --paper: #f5f2ea;
  --ledger: #c7f36b;
  --blue: #9ebcff;
}
```

Marka işareti `A/01`, tipografi, boşluklar ve bölüm sırası HTML/CSS içinde değiştirilebilir. Şablon harici font veya ikon servisine bağlı değildir.

## 3. Hizmet ve paketleri doğrulayın

Hizmet kartları bir bilgi mimarisi örneğidir. Üretim kullanımı öncesinde yetki alanı, kapsam, teslim tarihi, ücret ve güncel mevzuat gerçek sorumlu tarafından kontrol edilmelidir.

## 4. Demo aracını yönetin

`assets/js/script.js` yalnızca iki seçimi tarayıcı içinde bir cümleye dönüştürür. Veri göndermez ve saklamaz. Gerçek iletişim formu eklenecekse:

- kişisel verileri en aza indirin,
- açık onay ve gizlilik metni sağlayın,
- sunucu tarafı doğrulama ve spam koruması ekleyin,
- gerçek gönderimi kullanıcıya dürüstçe bildirin.

## 5. Yayınlamadan önce kontrol edin

```bash
npm test
npm run lint
npm run build
```

Son olarak mobil ve masaüstü görünümü, klavye kullanımı, yasal sayfalar, iletişim bilgileri ve tüm iddiaları elle kontrol edin.
