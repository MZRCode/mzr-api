const { handleError } = require('../utils/handleError');
const baseULR = 'https://api.mzrdev.xyz/v1';
const website = 'https://www.mzrdev.xyz';
const axios = require('axios');

class Api {
    constructor(apiKey) {
        if (!apiKey || apiKey === '' || typeof apiKey !== 'string') throw new Error(`[MZR API] This error occurs when the 'apiKey' constructor is left empty. Need help? Go to ${website} and read what is written.`);

        this.apiKey = apiKey;
    }

    async altin() {
        try {
            const api = await axios.get(`${baseULR}/altin`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async crypto(coins = ['BTC', 'ETH'], currencies = ['USD', 'TRY', 'EUR', 'GBP']) {
        if (coins && !Array.isArray(coins)) throw new Error(`[MZR API - CRYPTO] The 'coins' field is required to be an array, but the provided value is not an array. Need help? Go to ${website} and read what is written.`);
        if (currencies && !Array.isArray(currencies)) throw new Error(`[MZR API - CRYPTO] The 'currencies' field is required to be an array, but the provided value is not an array. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/crypto`, {
                params: { coins, currencies },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async depremler(limit = 1) {
        if (parseInt(limit) > 500) throw new Error(`[MZR API - DEPREMLER] The 'limit' field must be a number and this number must not be greater than 500. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/depremler`, {
                params: { limit },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async doviz() {
        try {
            const api = await axios.get(`${baseULR}/doviz`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async fun(type, image) {
        const types = ['wasted', 'rip', 'jail', 'wanted', 'trash', 'del', 'delete', 'gay', 'beautiful', 'affect', 'bnw', 'bolsonaro', 'circle', 'comunism', 'dither', 'facepalm', 'invert', 'magik', 'pixelate', 'sepia', 'stickbug', 'triggered'];

        if (!type || type === '' || typeof type !== 'string' || (type && !types.includes(type))) throw new Error(`[MZR API - FUN] You must choose a type! For example you can choose 'wasted', 'jail'. Need help? Go to ${website} and read what is written.`);
        if (!image || image === '' || typeof image !== 'string') throw new Error(`[MZR API - FUN] The 'image' parameter is missing. Please provide the text to be translated in the 'image' query parameter. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/fun`, {
                params: { type, image },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data.image;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async haberler(kategori = 'dunya', limit = 1) {
        const categories = ['son-dakika', 'ekonomi', 'guncel', 'dunya', 'spor', 'politika', 'magazin', 'teknoloji', 'saglik', 'otomobil', 'kultur-sanat'];

        if (!categories.includes(kategori)) throw new Error(`[MZR API - HABERLER] You must choose a category! For example you can choose 'son-dakika', 'magazin' and 'dunya'. Need help? Go to ${website} and read what is written.`);
        if (parseInt(limit) > 20) throw new Error(`[MZR API - HABERLER] The 'limit' field must be a number and this number must not be greater than 500. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/haberler?kategori=${kategori}&limit=${limit}`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async minecraftServer(ip, port = 25565) {
        if (!ip || ip === '' || typeof ip !== 'string') throw new Error(`[MZR API - MINECRAFT SERVER] The 'ip' parameter is missing. Please type the target minecraft server ip in the 'ip' query parameter. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/minecraftServer?ip=${ip}&port=${port}`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async namazVakitleri(il, ilce) {
        if (!il || il === '' || typeof il !== 'string') throw new Error(`[MZR API - NAMAZ VAKITLERI] The parameter 'il' is missing. Please type the target province in the 'il' query parameter. Need help? Go to ${website} and read what is written.`);
        if (!ilce || ilce === '' || typeof ilce !== 'string') ilce = il;

        try {
            const api = await axios.get(`${baseULR}/namazVakitleri`, {
                params: { il, ilce },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async steam(game) {
        if (!game || game === '' || typeof game !== 'string') throw new Error(`[MZR API - STEAM] Need to type a game name in the 'Game' field, but you didn't. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/steam`, {
                params: { game },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async translate(message, to, autoCorrect = false) {
        if (!message || message === '' || typeof message !== 'string') throw new Error(`[MZR API - TRANSLATE] The 'message' parameter is missing. Please provide the text to be translated in the 'message' query parameter. Need help? Go to ${website} and read what is written.`);
        if (!to || to === '' || typeof translate !== 'string') throw new Error(`[MZR API - TRANSLATE] The 'to' parameter is missing. Please provide the target language code in the 'to' query parameter. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/translate`, {
                params: { message, to, autoCorrect },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async users(id) {
        if (!id || id === '' || typeof id !== 'string') throw new Error(`[MZR API - USERS] The 'id' parameter is missing. Please enter the discord user ID in the 'id' query parameter. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/users/${id}`, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async wikipedia(search) {
        if (!search || search === '' || typeof search !== 'string') throw new Error(`[MZR API - WIKIPEDIA] The 'search' parameter is missing. Please type the target wikipedia search content in the 'search' query parameter. Need help? Go to ${website} and read what is written.`);

        try {
            const api = await axios.get(`${baseULR}/wikipedia`, {
                params: { search },
                headers: {
                    'content-type': 'application/json',
                    'Authorization': this.apiKey
                },
            });

            if (api?.data?.success) return api.data.data;
            else handleError(api.data);
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = { Api };