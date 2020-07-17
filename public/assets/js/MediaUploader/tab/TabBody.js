import ElementCreator from "../utilities/ElementCreator.js";

class TabBody extends ElementCreator {
    constructor(name) {
        super();
        this.name = name;
        this.innerContainer = this.createDOMElement('div', {
            "class": "d-flex flex-wrap"
        });
        this.domElement = this.createTabElement();
    }

    createTabElement = () => {
        const elem = this.createDOMElement('div', {
            "id": this.name,
            "class": "tab-pane",
            "role": "tabpanel",
            "aria-labelledby": this.name + "-tab"
        });
        elem.append(this.innerContainer);
        return elem;
    }

    addTile = (tile) => {
        this.innerContainer.append(tile.domElement);
    }
}

export default TabBody;