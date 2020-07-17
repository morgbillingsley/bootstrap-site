import MediaUploaderDOM from "./utilities/MediaUploaderDOM.js";
import ImageTile from "./utilities/ImageTile.js";


class MediaUploader {
    html = `<div class="card"><div class="card-header"><ul id="tablist" class="nav nav-tabs card-header-tabs"><li class="nav-item"><a id="images-tab" data-toggle="tab" href="#images" role="tab" aria-control="images" class="nav-link active">Images</a></li><li class="nav-item"><a id="other-tab" data-toggle="tab" href="#other" role="tab" aria-control="other" class="nav-link">Other</a></li><li class="nav-item"><a id="upload-tab" data-toggle="tab" href="#upload" role="tab" aria-control="upload" class="nav-link">Upload</a></li></ul></div><div class="card-body"><div id="mediaTabContent" class="tab-content"><div id="images" class="tab-pane active" role="tabpanel" aria-labelledby="images-tab"><div class="d-flex flex-wrap"></div></div><div id="other" class="tab-pane" role="tabpanel" aria-labelledby="other-tab"><div class="d-flex flex-wrap"></div></div><div id="upload" class="tab-pane" role="tabpanel" aria-labelledby="upload-tab"><div class="p-4"><div class="alert d-none" role="alert"><span></span><button type="button" class="close"><span>×</span></button></div><form method="POST" action="/admin/media/new" enctype="multipart/form-data"><div class="input-group"><div class="custom-file"><input type="file" name="media_upload" class="custom-file-input" id="mediaUploadInput"><label class="custom-file-label" for="mediaUploadInput">Choose File</label></div><div class="input-group-append"><button class="btn btn-primary" type="submit">Upload</button></div></div><p class="mt-4"><small>* Use the dialog below to upload any file under the size of 2MB. Any file you upload here will be viewable by anyone with an internet connection.</small></p></form></div></div></div></div></div>`;

    constructor(parentElement) {
        this.parent = parentElement;
        this.parent.innerHTML = this.html;
    }

    loadImages = () => {
        this.getImages
            .then(this.addImages);
    }

    getImages = () => {
        return fetch('/admin/media/images')
            .then((response) => response.json());
    }

    getOtherMedia = () => {
        return fetch('/admin/media/other')
            .then((response) => response.json());
    }

    addImages = (images) => {
        images.forEach(this.addImage);
    }

    addImage = (image) => {
        const tab = MediaUploaderRepository.getImagesTab();
        const tile = new ImageTile(image);
        tab.append(tile.container);
    }
}

class MediaUploader {
    constructor(selector) {
        const element = document.querySelector(selector);
        this.mediaUploaderDOM = new MediaUploaderDOM(element);
        this.hasSwitchedToOther = false;
        this.listenForSwitch();
        this.setImages();
    }

    listenForSwitch = () => {
        this.mediaUploaderDOM.otherTab.onClick = this.otherMediaSwitch();
        this.mediaUploaderDOM.imagesTab.onClick = this.imagesSwitch();
    }

    otherMediaSwitch = () => {}

    checkAndSetOtherMedia = () => {
        if (!this.hasSwitchedToOther) {
            this.setOtherMedia();
            this.hasSwitchedToOther = true;
        }
    }

    refreshOtherMedia = () => {
        this.mediaUploaderDOM.otherTab.clear();
        this.setOtherMedia();
    }

    refreshImages = () => {
        this.mediaUploaderDOM.imagesTab.clear();
        this.setImages();
    }

    getImages() {
        return fetch('/admin/media/images')
            .then((response) => response.json());
    }

    setImages() {
        this.getImages().then((images) => {
            for (const image of images) {
                this.mediaUploaderDOM.imagesTab.addImage(image);
            }
        });
    }

    getOtherMedia() {
        return fetch('/admin/media/other')
            .then((response) => response.json());
    }

    setOtherMedia() {
        this.getOtherMedia().then((media) => {
            for (const file of media) {
                this.mediaUploaderDOM.otherTab.addFile(file);
            }
        })
    }
}

export default MediaUploader;