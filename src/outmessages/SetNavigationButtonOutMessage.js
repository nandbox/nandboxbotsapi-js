"use strict";
const OutMessage = require("./OutMessage");
const Button = require("../data/Button");

module.exports = class SetNavigationButtonOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "setNavigationButton";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        if (this.navigation_button){
           obj.navigation_button = this.navigation_button
        }

        return obj;
    }
}