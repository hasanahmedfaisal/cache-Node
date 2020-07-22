class Cache{
    constructor(){
        console.log('init cache')
        this._cache={}
        this._expirationTime={}
        this._setCacheDate={}
    }

    isCacheExpired(key,fetchDate){
        return new Date(this._setCacheDate[key]).setHours(new Date(this._setCacheDate[key]).getHours() + this._expirationTime[key]) < fetchDate
    }

    getCache(key){
        console.log('get cache for ',key)
        if(this._setCacheDate[key] && this._expirationTime[key] && !this.isCacheExpired(new Date()))
        return this._cache[key]
        else
        return null
    }

    setCache(key,data,expirationTime){
        console.log('set cache for ',key)
        this._cache[key]=data
        this._expirationTime[key]=expirationTime
        this._setCacheDate[key]=new Date().toDateString()
    }
}

const instance = new Cache()
Object.freeze(instance)
module.exports = instance;