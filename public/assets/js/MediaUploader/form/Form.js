import ElementCreator from "../utilities/ElementCreator.js";

class Form {
    constructor(attributes) {
        this.domElement = ElementCreator.createDOMElement('form', attributes);
        this.domElement.addEventListener('submit', this.onSubmit);
    }

    addChild = (child) => {
        this.domElement.append(child.domElement);
        return this;
    }

    addInput = (input) => {
        this.addChild(input);
        return this;
    }
}

export default Form;