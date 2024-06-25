const OutMessage = require("./OutMessage");

module.exports = class GetCollectionProductOutMessage extends OutMessage{
    constructor() {
        super();
        this.method = "getCollectionProduct";
    }
    toJsonObject(){
        let obj = super.toJsonObject();
        
        if (this.id) obj.id = this.id;

        return obj;
    }   
}