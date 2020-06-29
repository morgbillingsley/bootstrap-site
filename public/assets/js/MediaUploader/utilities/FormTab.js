import UploaderTab from "./UploaderTab.js";
import NewMediaForm from "./NewMediaForm.js";

class FormTab extends UploaderTab {
    constructor() {
        super();
        this.form = new NewMediaForm();
        this.tab = this.createTab('upload', this.form.container);
        this.container = this.createContainer();
        this.tabLink = this.createTabLink();
        this.navItem= this.createNavItem();
    }

    createTabLink() {
        const tabLink = document.createElement('a');
        tabLink.setAttribute('id', 'upload-tab');
        tabLink.setAttribute('data-toggle', 'tab');
        tabLink.setAttribute('href', '#upload');
        tabLink.setAttribute('role', 'tab');
        tabLink.setAttribute('aria-control', 'upload');
        tabLink.setAttribute('class', 'nav-link');
        tabLink.innerText = 'Upload';
        return tabLink;
    }

    createNavItem() {
        const navItem = document.createElement('li');
        navItem.setAttribute('class', 'nav-item');
        navItem.append(this.tabLink);
        return navItem;
    }

    createContainer() {
        const container = document.createElement('div');
        container.setAttribute('class', 'p-4');
        container.append(this.tab);
        return container;
    }
}

export default FormTab;