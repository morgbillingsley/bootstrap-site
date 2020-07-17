import ElementCreator from "../utilities/ElementCreator.js";

class CardHeader {
    constructor() {
        this.domElement = ElementCreator.createDOMElement('div', {
            "class": "card-header"
        });
    }

    addNavigation = (navigation) => {
        this.navigation = navigation;
        this.domElement.append(navigation.domElement);
    }
}

export default CardHeader;