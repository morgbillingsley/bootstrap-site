import UploaderTab from "./UploaderTab.js";

String.prototype.capitalize = function () {
    const uppercaseFirstLetter = this.charAt(0).toUpperCase();
    const stringWithoutFirstLetter = this.slice(1);
    return uppercaseFirstLetter + stringWithoutFirstLetter;
}

class MediaTab extends UploaderTab {
    constructor(name, child = null) {
        super();
        this.container = this.createMediaContainer();
        this.tab = this.createTab(name, this.container);
        this.tabLink = this.createTabLink(name);
        this.navItem= this.createNavItem();
    }

    createMediaContainer() {
        const container = document.createElement('div');
        container.className = 'd-flex flex-wrap';
        return container;
    }

    createTabLink(name) {
        const tabLink = document.createElement('a');
        tabLink.setAttribute('id', name + '-tab');
        tabLink.setAttribute('data-toggle', 'tab');
        tabLink.setAttribute('href', '#' + name);
        tabLink.setAttribute('role', 'tab');
        tabLink.setAttribute('aria-control', name);
        tabLink.setAttribute('class', 'nav-link');
        tabLink.innerText = name.capitalize();
        tabLink.addEventListener('click', this.callOnClickCallback);
        return tabLink;
    }

    callOnClickCallback = (event) => {
        if (this.callbackIsSet()) {
            this.onClick(event);
        }
    }

    callbackIsSet = () => undefined !== this.onClick && null !== this.onClick;

    createNavItem() {
        const navItem = document.createElement('li');
        navItem.setAttribute('class', 'nav-item');
        navItem.append(this.tabLink);
        return navItem;
    }

    clear = () => {
        this.container.innerHTML = '';
    }
}

export default MediaTab;