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
MZR-API is a Node.js module designed to simplify sending requests to the MZR API and reduce error rates. It provides an easy-to-use interface for interacting with the MZR API.

### 🚀 Getting Started
- [❓ Support](https://discord.gg/ktVdQYrtXF)
- [🌐 Website](https://www.mzrdev.xyz)
- [📚 Documentation](https://docs.mzrdev.xyz)
- [💻 Github](https://github.com/MZRCode/mzr-api)

### 📥 Installation
```bash
npm install mzr-api
pnpm add mzr-api
yarn add mzr-api
```

### 📝 Usage Examples
Here are some usage examples. For more detailed information and additional examples, please refer to our [documentation](https://docs.mzrdev.xyz).

#### Example: Get Version
```js
const { version } = require('mzr-api');
console.log(version);
```

#### Example: Crypto
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

#### Example: Minecraft Server Info
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.minecraftServer('mc.hypixel.net');
    console.log(data);
})();
```

#### Example: Proxy Check
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.proxyCheck(['username:password@ip:port', 'username2:password2@ip2:port2']);
    console.log(data);
})();
```
> For more examples and detailed information, please refer to our [documentation](https://docs.mzrdev.xyz).

### 📢 Contributing
If you would like to contribute, please check out our [Contributing Guide](https://www.mzrdev.xyz/contributing).

### 📜 License
This project is licensed under the [MIT Lisansı](https://opensource.org/licenses/MIT).
