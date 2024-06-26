const OutMessage = require('../outmessages/OutMessage');

module.exports = class DeleteBlackListPatternsOutMessage extends OutMessage {

	constructor() {
		super();
		this.method = 'deleteBlacklistPatterns';
	}

	toJsonObject() {
		let obj = super.toJsonObject();
        
        if (this.pattern) obj.pattern = this.pattern;
		
		return obj;
	}
}
