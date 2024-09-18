<div align="center">
<p>
   <a href="#"> <img width=500 src="https://raw.githubusercontent.com/MZRCode/mzr-api/main/mzrapi-logo.png"></a>
</p>
<p>
   <a href="https://nodei.co/npm/mzr-api/"><img src="https://nodei.co/npm/mzr-api.png?downloads=true&stars=true" alt="NPM info" /></a>
</p>
<p>
    <img src="https://img.shields.io/npm/v/mzr-api?style=for-the-badge">
    <img src="https://img.shields.io/npm/l/mzr-api?style=for-the-badge">
    <a href="https://discord.gg/ktVdQYrtXF" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Discord-%20Support%20Server-7289da?style=for-the-badge&logo=discord"></a>
    <a href="https://www.buymeacoffee.com/mzrdev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee :)"></a>
 </p>
</div>

# MZR-API
MZR-API, MZR API'ye istek göndermeyi kolaylaştıran ve hata oranını azaltan bir Node.js modülüdür. Bu modül, MZR API'si ile etkileşimde bulunmayı basitleştirmek için tasarlanmıştır.

### 🚀 Başlangıç
- [❓ Destek](https://discord.gg/ktVdQYrtXF)
- [🌐 Web Sitesi](https://www.mzrdev.xyz)
- [📚 Belgeler](https://docs.mzrdev.xyz)

### 📥 Kurulum
```bash
npm install mzr-api
pnpm add mzr-api
yarn add mzr-api
```

### 📝 Kullanım Örnekleri
Aşağıda bazı kullanım örneklerini bulabilirsiniz. Daha fazla bilgi ve detaylı açıklamalar için [belgelerimize](https://docs.mzrdev.xyz) göz atabilirsiniz.

#### Örnek: Sürüm Bilgisi
```js
const { version } = require('mzr-api');
console.log(version);
```

#### Örnek: Kripto Para Verileri
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const coins = ['BTC', 'ETH'];
    const currencies = ['USD', 'EUR', 'TRY']; 

    const data = await mzrapi.crypto(coins, currencies);
    console.log(data);
})();
```

#### Örnek: Minecraft Sunucu Bilgisi
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.minecraftServer('mc.hypixel.net');
    console.log(data);
})();
```

#### Örnek: Proxy Kontrolü
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.proxyCheck(['username:password@ip:port', 'username2:password2@ip2:port2']);
    console.log(data);
})();
```

Daha fazla örnek ve detaylı bilgi için [belgelerimize](https://docs.mzrdev.xyz) bakabilirsiniz.

### 📢 Katkıda Bulunma
Herhangi bir katkıda bulunmak isterseniz, lütfen [Katkı Kılavuzumuza](https://www.mzrdev.xyz/contributing) göz atın.

### 📜 Lisans
Bu proje [MIT Lisansı](https://opensource.org/licenses/MIT) ile lisanslanmıştır.
