import MediaTile from "./MediaTile.js";

class ImageTile extends MediaTile {
    constructor(mediaObject) {
        super(mediaObject);
        this.image = this.createImage();
        this.imageContainer = this.createImageContainer();
    }

    createImageContainer() {
        this.contentContainer.append(this.image);
        return this.contentContainer;
    }

    createImage() {
        const image = this.createElement('img', 'img-fluid flex-1');
        image.setAttribute('src', this.mediaObject.url);
        return image;
    }
}

export default ImageTile;