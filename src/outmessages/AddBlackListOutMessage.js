const OutMessage = require('./OutMessage');
module.exports =  class AddBlackListOutMessage extends OutMessage {

	constructor() {
		super();
		this.method = 'addBlacklist';
	}

	toJsonObject() {
		let obj = super.toJsonObject();
        
        if (this.users) obj.users = this.users;

		return obj;
	}
}
