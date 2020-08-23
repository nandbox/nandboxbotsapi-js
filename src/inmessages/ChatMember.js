module.exports = class ChatMember {

    constructor(jsonObj) {
        let obj = jsonObj.chatMember;
    
        this.user = obj.user == null ? null : new User(obj.user);
        this.chat = obj.chat == null ? null : new Chat(obj.chat);

        this.type = obj.type;
        this.member_since = obj.member_since;
        this.status = obj.status;
        this.tags = obj.tags;
        this.account_type = obj.account_type;
        this.msisdn = obj.msisdn;
    }
    
    toJsonObject(){
        let obj;

        if (this.user) obj.user = this.user.toJsonObject();
        if (this.chat) obj.chat = this.chat.toJsonObject();
        if (this.type) obj.type = this.type;
        if (this.member_since) obj.member_since = this.member_since;
        if (this.status) obj.status = this.status;
        if (this.tags) obj.tags =  this.tags;
        if ( this.account_type) obj.account_type = this.account_type;
        if (this.msisdn) obj.msisdn = this.msisdn;
        return obj;
    }

}