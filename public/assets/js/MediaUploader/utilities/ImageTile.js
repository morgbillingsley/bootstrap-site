import MediaTile from "./MediaTile.js";

class ImageTile extends MediaTile {
    constructor(mediaObject) {
        super(mediaObject);
        this.image = this.createImage();
        this.imageContainer = this.createImageContainer();
        this.overlay = this.createOverlay();
        this.wrapper = this.createWrapper();
        this.container = this.createContainer();
    }

    createContainer() {
        const container = this.createElement('div', 'p-2 w-25');
        container.append(this.wrapper);
        return container;
    }

    createWrapper() {
        const wrapper = this.createElement('div', 'h-100 w-100 position-relative');
        this.toggleOverlayOnHover(wrapper);
        wrapper.append(this.overlay, this.imageContainer);
        return wrapper;
    }

    createOverlay() {
        const overlay = this.createElement('div', 'bg-danger invisible position-absolute d-flex justify-content-center align-items-center text-white');
        overlay.style.cssText = 'opacity:0.65;top:0;bottom:0;right:0;left:0;cursor:pointer;';
        overlay.innerHTML = '<span>Delete</span>';
        return overlay;
    }

    createImageContainer() {
        const imageContainer = this.createElement('div', 'bg-light h-100 d-flex justify-content-center align-items-center');
        imageContainer.append(this.image);
        return imageContainer;
    }

    createImage() {
        const image = this.createElement('img', 'img-fluid flex-1');
        image.setAttribute('src', this.mediaObject.url);
        return image;
    }
}

export default ImageTile;