# FirstAidChest

FirstAidChest, acil durumlar ve ilaç yönetimi için geliştirilmiş çok katmanlı bir uygulamadır. Proje, ASP.NET Web Forms (C#), iş katmanı, veri katmanı ve hibrit (Ionic/Cordova) mobil uygulama bileşenlerinden oluşur.

## Proje Yapısı

- **FirstAidChest/**: ASP.NET Web Forms uygulaması (C#), web servisleri ve arayüzler.
- **FirstAidChest.Business/**: İş mantığı katmanı.
- **FirstAidChest.Data/**: Veri erişim katmanı, SQLite veritabanı ile çalışır.
- **FirstAidChest.Hybrid/**: Ionic/Cordova tabanlı hibrit mobil uygulama.

## Temel Özellikler
- Barkod ile ilaç sorgulama (web arayüzü ve servis)
- SQLite veritabanı ile veri yönetimi
- Web servis (ASMX) ile dış sistemlere entegrasyon
- Mobil uygulama ile offline/online kullanım

## Gereksinimler
- .NET Framework 4.5.1
- Visual Studio 2015 veya üzeri (web ve iş/veri katmanı için)
- Node.js, npm, Ionic CLI (mobil uygulama için)
- Android/iOS SDK (mobil derleme için)

## Kurulum
1. **Web Projesi**
   - `FirstAidChest.sln` dosyasını Visual Studio ile açın.
   - Gerekli NuGet paketlerini yükleyin.
   - `FirstAidChest.Data/Data/FirstAidChest.sqlite` veritabanı dosyasını kontrol edin.
   - Web projesini başlatın.

2. **Mobil Proje**
   - `cd FirstAidChest.Hybrid`
   - `npm install`
   - `ionic cordova platform add android` (veya ios)
   - `ionic cordova build android` veya `ionic cordova run android`

## Katkı ve Lisans
İstenildiği gibi kullanılabilir.
