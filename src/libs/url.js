export default class Url {
    constructor() {
        this.query = {};
        this.url = location.hash;

        this.refreshQuery()
    }

    hasQuery() {
        this.url = location.hash;
        return (url.indexOf("?") != -1)
    }

    refreshQuery() {
        if (!this.query) {
            this.query = {}
        }
        if (this.hasQuery()) {
            let queryStr = this.url.substring(this.url.indexOf("?") + 1);
            queryStr.split("&").map(str=> {
                [key, val] = str.split("=");
                this.query[key] = val
            })
        } else {
            this.query = {}
        }
    }

    jump(hash, params) {
        if (params) {
            let paramStr = Object.keys(params).map(key => {
                return key + "=" + params[key]
            }).join("&");
            if (hash && hash.includes("?")) {
                hash += "&" + paramStr
            } else if (hash) {
                hash += "?" + paramStr
            }
        }
        location.hash = hash;
        this.refreshQuery()
    }

}();
