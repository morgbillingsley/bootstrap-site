class MediaTile {
    constructor(mediaObject) {
        this.mediaObject = mediaObject;
        this.contentContainer = this.createContentContainer();
        this.overlay = this.createOverlay();
        this.wrapper = this.createWrapper();
        this.container = this.createContainer();
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

    createContainer() {
        const container = this.createElement('div', 'p-2 w-25');
        container.append(this.wrapper);
        return container;
    }

    createWrapper() {
        const wrapper = this.createElement('div', 'h-100 w-100 position-relative');
        this.toggleOverlayOnHover(wrapper);
        wrapper.append(this.overlay, this.contentContainer);
        return wrapper;
    }

    createOverlay() {
        const overlay = this.createElement('div', 'bg-danger invisible position-absolute d-flex justify-content-center align-items-center text-white');
        overlay.style.cssText = 'opacity:0.65;top:0;bottom:0;right:0;left:0;cursor:pointer;';
        overlay.innerHTML = '<span>Delete</span>';
        return overlay;
    }

    createContentContainer() {
        const contentContainer = this.createElement('div', 'bg-light h-100 d-flex justify-content-center align-items-center');
        return contentContainer;
    }
}

export default MediaTile;