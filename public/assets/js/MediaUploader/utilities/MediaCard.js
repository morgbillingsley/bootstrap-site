class MediaCard {
    constructor(container) {
        this.navContainer = this.createNavContainer();
        this.header = this.createHeader();
        this.body = this.createBody();
        this.container = this.createContainer(container);
    }

    createNavContainer() {
        const navContainer = document.createElement('ul');
        navContainer.setAttribute('id', 'mediaTab');
        navContainer.setAttribute('class', 'nav nav-tabs card-header-tabs');
        navContainer.setAttribute('id', 'tablist');
        return navContainer;
    }

    createHeader() {
        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        header.append(this.navContainer);
        return header;
    }

    createBody() {
        const body = document.createElement('div');
        body.setAttribute('class', 'card-body');
        return body;
    }

    createContainer(element) {
        element.setAttribute('class', 'card');
        element.append(this.header, this.body);
        return element;
    }
}

export default MediaCard;