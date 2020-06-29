import MediaUploaderDOM from "./utilities/MediaUploaderDOM.js";

class MediaUploader {
    constructor(selector) {
        const element = document.querySelector(selector);
        this.mediaUploaderDOM = new MediaUploaderDOM(element);
        this.setImages();
    }

    getImages() {
        return fetch('/admin/media/images')
            .then((response) => response.json());
    }

    setImages() {
        this.getImages().then((images) => {
            for (const i in images) {
                const image = images[i];
                this.mediaUploaderDOM.imagesTab.addImage(image);
            }
        });
    }

    getOtherMedia() {
        return fetch('/admin/media/other')
            .then((response) => response.json());
    }
}

export default MediaUploader;