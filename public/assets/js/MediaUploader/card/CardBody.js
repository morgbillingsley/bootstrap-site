import ElementCreator from "../utilities/ElementCreator.js";

class CardBody extends ElementCreator {
    constructor() {
        super();
        this.domElement = this.createDOMElement('div', {
            "class": "card-body"
        });
    }

    addChild = (child) => {
        this.domElement.append(child.domElement);
    }
}

export default CardBody;