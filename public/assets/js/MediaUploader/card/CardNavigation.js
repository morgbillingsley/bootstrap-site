import ElementCreator from "../utilities/ElementCreator.js";

class CardNavigation {
    constructor() {
        this.domElement = ElementCreator.createDOMElement('ul', {
            "id": "mediaTab",
            "class": "tablist"
        });
    }

    addLink = (link) => {
        this.domElement.append(link.containerElement);
    }
}

export default CardNavigation;