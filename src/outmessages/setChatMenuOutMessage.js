const OutMessage = require("./OutMessage");


module.exports = class SetChatMenuOutMessage extends OutMessage {


    constructor() {
        super();
        this.method = "setChatMenu";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        if (this.menus) {
            let menusArrayObj = [];
            for (let i = 0; i < menus.length; ++i)
                menusArrayObj[i] = menus[i].toJsonObject();

            //menusArrayObj = JSON.parse(menusArrayObj.toString());
            obj.menus = menusArrayObj;
        }
        return obj;
    }
}