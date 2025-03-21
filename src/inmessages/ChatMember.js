const User = require("../data/User");
const Chat = require("../data/Chat");
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
    this.login_id = obj.login_id;
    this.app_id = obj.app_id;

  }

  toJsonObject() {
    let obj;

    if (this.user) obj.user = this.user.toJsonObject();
    if (this.chat) obj.chat = this.chat.toJsonObject();
    if (this.type) obj.type = this.type;
    if (this.member_since) obj.member_since = this.member_since;
    if (this.status) obj.status = this.status;
    if (this.tags) obj.tags = this.tags;
    if (this.account_type) obj.account_type = this.account_type;
    if (this.login_id) obj.login_id = this.login_id;
    if (this.app_id) obj.app_id = this.app_id;

    return obj;
  }
};
