export const version: string;

interface ProxyCheck {
    working: boolean;
    ip: string;
    port: number;
    username: string | null;
    password: string | null;
    protocols: string[];
    latency: number;
    country: string;
    countryEmoji: string | null;
}

interface RateLimitCheck {
    stats: {
        rateLimitedProxies: number;
        notWorkingProxies: number;
        workingProxies: number;
    };
    rateLimitedProxies: string[];
    notWorkingProxies: string[];
    workingProxies: string[];
}

export class Api {
    /**
     * MZR Api Setup
     * @example
     * const { Api } = require('mzr-api');
     * 
     * const mzrapi = new Api('YOUR_API_KEY');
     * @param {string} apiKey - The api key you created from www.mzrdev.xyz
     */
    constructor(apiKey: string);

    /**
     * Only this Country: Turkiye
     * Fetch gold prices data.
     * @example await mzrapi.altin();
     * @return {Promise<Object>} Gold Price Data
     * @async
     */
    altin(): Promise<Object>;

    /**
     * Fetch cryptocurrency prices.
     * @example await mzrapi.crypto(['BTC', 'ETH'], ['USD', 'EUR', 'TRY']);
     * @param {string[]} coins - List of cryptocurrency symbols.
     * @param {string[]} currencies - List of currency symbols.
     * @return {Promise<Object>} Cryptocurrency price data
     * @async
     */
    crypto(coins?: string[], currencies?: string[]): Promise<Object>;

    /**
     * Only this Country: Turkiye
     * Fetch earthquake data.
     * @example await mzrapi.depremler(2);
     * @param {number} limit - Number of earthquake data to fetch (max 500).
     * @return {Promise<Object>} Earthquake data
     * @async
     */
    depremler(limit?: number): Promise<Object>;

    /**
     * Only this Country: Turkiye
     * Fetch currency exchange rates.
     * @example await mzrapi.doviz();
     * @return {Promise<Object>} Currency exchange rate data
     * @async
     */
    doviz(): Promise<Object>;

    /**
     * Generate a fun image.
     * @example await mzrapi.fun('wasted', 'image_url.png');
     * @param {string} type - Type of fun image.
     * @param {string} image - URL of the image.
     * @return {Promise<Object>} Fun image data
     * @async
     */
    fun(type: string, image: string): Promise<Object>;

    /**
     * Only this Country: Turkiye
     * Fetch news data.
     * @example await mzrapi.haberler('dunya', 2);
     * @param {string} kategori - News category.
     * @param {number} limit - Number of news articles to fetch (max 20).
     * @return {Promise<Object>} News data
     * @async
     */
    haberler(kategori?: string, limit?: number): Promise<Object>;

    /**
     * Fetch Minecraft server data.
     * @example await mzrapi.minecraftServer('mc.hypixel.net');
     * @param {string} ip - IP address of the Minecraft server.
     * @param {number} [port=25565] - Port of the Minecraft server.
     * @return {Promise<Object>} Minecraft server data
     * @async
     */
    minecraftServer(ip: string, port?: number): Promise<Object>;

    /**
     * Only this Country: Turkiye
     * Fetch prayer times.
     * @example await mzrapi.namazVakitleri('İstanbul', 'Esenyurt');
     * @param {string} il - Province name.
     * @param {string} ilce - District name.
     * @return {Promise<Object>} Prayer times data
     * @async
     */
    namazVakitleri(il: string, ilce?: string): Promise<Object>;

    /**
     * Fetch Steam game data.
     * @example await mzrapi.steam('ETS 2');
     * @param {string} game - Name of the game.
     * @return {Promise<Object>} Steam game data
     * @async
     */
    steam(game: string): Promise<Object>;

    /**
     * Translate text.
     * @example await mzrapi.translate('Hello! How are you', 'tr');
     * @param {string} message - Text to be translated.
     * @param {string} to - Target language code.
     * @param {boolean} [autoCorrect=false] - Enable auto-correct.
     * @return {Promise<Object>} Translated text data
     * @async
     */
    translate(message: string, to: string, autoCorrect?: boolean): Promise<Object>;

    /**
     * Fetch Discord user data.
     * @example await mzrapi.users('701518625760346172');
     * @param {string} id - Discord user ID.
     * @return {Promise<Object>} Discord user data
     * @async
     */
    users(id: string): Promise<Object>;

    /**
     * Fetch Wikipedia data.
     * @example await mzrapi.wikipedia('Yusuf Dikeç');
     * @param {string} search - Search term.
     * @return {Promise<Object>} Wikipedia data
     * @async
     */
    wikipedia(search: string): Promise<Object>;

    /**
     * Check proxy status.
     * @example await mzrapi.proxyCheck(['username:password@ip:port', 'username2:password2@ip2:port2']);
     * @param {string[]} proxies - Array of proxy addresses.
     * @return {Promise<ProxyCheck[]>} Proxy check results
     * @async
     */
    proxyCheck(proxies: string[]): Promise<ProxyCheck[]>;

    /**
     * Check rate limit status for proxies.
     * @example await mzrapi.rateLimitCheck(['username:password@ip:port', 'username2:password2@ip2:port2'], 'https://example.com');
     * @param {string[]} proxies - Array of proxy addresses.
     * @param {string} url - URL to check rate limits against.
     * @return {Promise<RateLimitCheck>} Rate limit check results
     * @async
     */
    rateLimitCheck(proxies: string[], url: string): Promise<RateLimitCheck>;
}