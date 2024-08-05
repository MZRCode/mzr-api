module.exports = {
    handleError: function (data) {
        const { errorCode, error, errorDescription } = data;

        switch (errorCode) {
            case 400:
                throw new Error(`[${error}] ${errorDescription}`);
            case 401:
                throw new Error(`[${error}] ${errorDescription}`);
            case 404:
                throw new Error(`[${error}] ${errorDescription}`);
            case 408:
                throw new Error(`[${error}] ${errorDescription}`);
            case 422:
                throw new Error(`[${error}] ${errorDescription}`);
            case 429:
                throw new Error(`[${error}] ${errorDescription}`);
            case 500:
                throw new Error(`[${error}] ${errorDescription}`);
            default:
                throw new Error(`[${error}] ${errorDescription}`);
        }
    }
}