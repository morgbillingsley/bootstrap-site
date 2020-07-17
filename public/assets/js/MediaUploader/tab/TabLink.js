import ElementCreator from "../utilities/ElementCreator.js";

String.prototype.capitalize = function () {
    const uppercaseFirstLetter = this.charAt(0).toUpperCase();
    const stringWithoutFirstLetter = this.slice(1);
    return uppercaseFirstLetter + stringWithoutFirstLetter;
}

class TabLink extends ElementCreator {
    constructor(name) {
        super();
        this.name = name;
        this.domElement = this.createAnchor();
        this.domElement.addEventListener('click', this.callOnClick);
        this.containerElement = this.createContainerElement();
    }

    createContainerElement = () => {
        const container = this.createDOMElement('li', {
            'class': 'nav-item'
        });
        container.append(this.domElement);
        return container;
    }

    createAnchor = () => {
        const anchor = this.createDOMElement('a', {
            "id": this.getId(),
            "href": this.getHref(),
            "data-toggle": "tab",
            "role": "tab",
            "aria-control": this.name,
            "class": "nav-link"
        });
        anchor.innerText = this.getCapitalName();
        return anchor;
    }

    callOnClick = () => {
        if (this.onClickExists()) {
            this.onClick({name: this.name});
        }
    }

    onClickExists = () => {
        let isValid = undefined !== this.onClick;
        isValid = isValid && null !== this.onClick;
        isValid = isValid && typeof this.onClick == 'function';
        return isValid;
    }

    getId = () => this.name + '-tab';

    getHref = () => '#' + this.name;

    getCapitalName = () => this.name.capitalize;
}

export default TabLink;