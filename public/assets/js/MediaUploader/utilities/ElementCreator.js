Element.prototype.setAttributes = function (attributes) {
    for (const key in attributes) {
        const value = attributes[key];
        this.setAttribute(key, value);
    }
}

class ElementCreator {
    static createDOMElement = (htmlTag, attributes) => {
        const elem = document.createElement(htmlTag);
        elem.setAttributes(attributes);
        return elem;
    }
}

export default ElementCreator;