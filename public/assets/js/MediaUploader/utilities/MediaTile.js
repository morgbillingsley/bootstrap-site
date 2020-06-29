class MediaTile {
    constructor(mediaObject) {
        this.mediaObject = mediaObject;
    }

    createElement(tag, classes) {
        const element = document.createElement(tag);
        element.className = classes;
        return element;
    }

    showOverlay() {
        this.overlay.classList.remove('invisible');
        this.overlay.classList.add('visible');
    }

    hideOverlay() {
        this.overlay.classList.remove('visible');
        this.overlay.classList.add('invisible');
    }

    toggleOverlayOnHover(element) {
        element.addEventListener('mouseover', (event) => {
            event.preventDefault();
            this.showOverlay();
        });
        element.addEventListener('mouseout', (event) => {
            event.preventDefault();
            this.hideOverlay();
        });
    }
}

export default MediaTile;