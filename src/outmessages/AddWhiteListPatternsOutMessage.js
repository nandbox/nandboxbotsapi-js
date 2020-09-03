const OutMessage = require('../outmessages/OutMessage');
/**
 * @author Hossam
 *
 */
module.exports = class AddWhitelistPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'addWhitelistPatterns';
    }
    
	toJsonObject() {
        let obj = super.toJsonObject();
        
		if (this.data) obj.data = this.data;

		return obj;
	}
}
