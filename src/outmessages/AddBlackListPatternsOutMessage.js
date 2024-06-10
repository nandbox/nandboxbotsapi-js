const OutMessage = require('../outmessages/OutMessage');

module.exports = class AddBlacklistPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'addBlacklistPatterns';
	}

	toJsonObject() {
		let obj = super.toJsonObject();
    
        if (this.data) obj.data = this.data;
	
		return obj;
	}
}
