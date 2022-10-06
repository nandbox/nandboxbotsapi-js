"use strict";

const OutMessage = require("./OutMessage");

/**
 * This class represents Cell Output Message .
 *
 * @author Samy
 *
 */

module.exports = class CellOutMessage extends OutMessage {
  constructor() {
    super();
    // this.method = "cellOutMessage";
  }

  toJsonObject() {
    let obj = super.toJsonObject();

    if (this.userId) obj.userId = this.userId;
    if (this.screenId) obj.screenId = this.screenId;
    if (this.cellId) obj.cellId = this.cellId;

    return obj;
  }
};
