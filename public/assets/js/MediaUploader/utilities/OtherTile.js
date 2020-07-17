import MediaTile from "./MediaTile.js";

class OtherTile extends MediaTile {
    constructor(mediaObject) {
        super(mediaObject);
        this.title = this.createTitle();
        this.titleContainer = this.createTitleContainer();
    }

    createTitleContainer() {
        this.contentContainer.append(this.title);
        return this.contentContainer;
    }

    createTitle() {
        const title = this.createElement('h2', 'text-secondary text-center');
        title.innerText = this.getFileExt();
        return title;
    }

    getFileExt() {
        const { type } = this.mediaObject;
        const splitIndex = type.indexOf("/");
        return type.substring(splitIndex);
    }
}

export default OtherTile;