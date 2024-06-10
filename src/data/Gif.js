const Thumbnail = require("../data/Thumbnail");

module.exports = class Gif {

    constructor(obj) {
        this.id = obj.id;
        this.width = Number(obj.width);
        this.height = Number(obj.height);
        this.size = Number(obj.size);
        this.thumbnail = obj.thumbnail ? new Thumbnail(obj.thumbnail) : null;
    }

    toJsonObject(){
        let obj = {};

        if (this.id) obj.id = this.id;
        if (this.width) obj.width = this.width;
        if (this.height) obj.height = this.height;
        if (this.size) obj.size = this.size;
        if (this.thumbnail) obj.thumbnail = this.thumbnail;

        return obj;
    }
}