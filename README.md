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
    <img src="https://img.shields.io/github/repo-size/MZRCode/mzr-api?style=for-the-badge">
    <a href="https://discord.gg/ktVdQYrtXF" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Discord-%20Support%20Server-7289da?style=for-the-badge&logo=discord"></a>
 </p>
</div>

# [MZR-API](https://www.mzrdev.xyz)
> The main purpose of this module is to simplify sending requests to the MZR API and reduce the error rate. It is completely based on the MZR API.
### - [❓ Support](https://discord.gg/ktVdQYrtXF)
### - [🌐 Website](https://www.mzrdev.xyz)
### - [📚 Document's](https://docs.mzrdev.xyz)
### - [🖥 Github](https://github.com/MZRCode/mzr-api)
# Installation
```yaml
npm i mzr-api
pnpm add mzr-api
yarn add mzr-api
```
# Documentation & Examples
> We cannot write here as we show everything in the most detailed way in our document. We will only add small NPM related examples in the README. For detailed information you can check [documentation](https://docs.mzrdev.xyz).
## Example Get Version For CommonJS;
```js
const { version } = require('mzr-api');

console.log(version);
```
## Example Crypto;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const coins = ['BTC', 'ETH'];
    const currencies = ['USD', 'EUR', 'TRY']; 

    const data = await mzrapi.crypto(coins, currencies);
    console.log(data);
})()
```
## Example Fun;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.fun('wasted', 'image_url.png');
    console.log(data);
})()
```
## Example Minecraft Server Info;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.minecraftServer('mc.hypixel.net');
    console.log(data);
})()
```
## Example Steam Game Search;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.steam('ETS 2'); // Euro Truck Simulator 2
    console.log(data);
})()
```
## Example Translate;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.translate('Hello! How are you', 'tr');
    console.log(data);
})()
```
## Example Discord User Info;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.users('701518625760346172');
    console.log(data);
})()
```
## Example Wikipedia Search;
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.wikipedia('Yusuf Dikeç');
    console.log(data);
})()
```
## Example Gold Price (Only Turkiye);
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.altin();
    console.log(data);
})()
```
## Example Earthquakes (Only Turkiye);
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.depremler(2);
    console.log(data);
})()
```
## Example Currency (Only Turkiye);
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.doviz();
    console.log(data);
})()
```
## Example News (Only Turkiye);
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.haberler('dunya', 2);
    console.log(data);
})()
```
## Example Prayer Times (Only Turkiye);
```js
const { Api } = require('mzr-api');
const mzrapi = new Api('YOUR_API_KEY');

(async () => {
    const data = await mzrapi.namazVakitleri('İstanbul', 'Esenyurt');
    console.log(data);
})()
```
