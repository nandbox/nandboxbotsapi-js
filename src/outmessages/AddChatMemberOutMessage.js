const OutMessage = require("./OutMessage");

module.exports = class AddChatMemberOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "addChatMember";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.chat_id) obj.chat_id = this.chat_id;
        if (this.user_id) obj.user_id = this.user_id;
        
        return obj;
    }

};