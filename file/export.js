'use strict';

const { version } = require('../package.json');
const { __exportStar } = require('tslib');
const axios = require('axios');

// versionCheck(version);

__exportStar(require('./index'), exports);

exports.version = version;

/*function versionCheck(version) {
    try {
        axios.get('https://registry.npmjs.org/mzr-api/latest').then((response) => {
            const data = response.data;

            if (version !== data.version) console.warn(`[MZR API] It seems like you are using an outdated version of mzr-api. Run 'npm install mzr-api@${data.version}' to update the module. Need help? Join my Discord server: https://discord.gg/ktVdQYrtXF`);
        });
    } catch (err) { }
}*/