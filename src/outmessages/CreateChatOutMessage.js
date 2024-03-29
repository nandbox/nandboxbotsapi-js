const OutMessage = require("../outmessages/OutMessage");

module.exports = class CreateChatOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "createChat";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        let chat = {};
        obj.chat = chat;
        switch (this.type){
            case "Group":
                chat.type = "Group";
                chat.isPublic = this.isPublic;
                chat.timezone = "Africa/Cairo";
                chat.title = this.title;
                break;
            }
        obj.reference = this.reference;
        return obj;
    }

};