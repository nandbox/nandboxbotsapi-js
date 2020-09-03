const Chat = require("../data/Chat");
const User =  require("../data/User");

module.exports = class ChatAdministrators {
    
    constructor(jsonObj) {
        let obj = jsonObj.chatAdministrators;
        this.administrators = [];
        this.chat = obj.chat == null ? null : new Chat( obj.chat);

         let adminArrayObj = obj.administrators;
        if (adminArrayObj != null) {

            let admin = [];
            for (let i = 0; i < adminArrayObj.length; i++)
                admin[i] = new User(adminArrayObj[i]);

            this.administrators = admin; 
            
        }
        
    }

    toJsonObject(){
        let obj;
        if (this.administrators) {
            let adminsArrayObjnew = [];
            for (let i = 0; i < administrators.length; i++)
                adminsArrayObjnew.push(administrators[i].toJsonObject());
            obj.administrators = adminsArrayObjnew;
        }

        if (this.chat) {
            obj.chat =  chat.toJsonObject();
        }

        return obj;
    }
}