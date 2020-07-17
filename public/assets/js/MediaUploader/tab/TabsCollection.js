import ElementCreator from "../utilities/ElementCreator.js";

class TabsCollection {
    constructor() {
        this.length = 0;
        this.collection = new Array();
        this.container = ElementCreator.createDOMElement('div', {
            "id": "mediaTabContent",
            "class": "tab-content"
        });
    }

    add = (tab) => {
        this.collection.push(tab);
        this.length++;
    }

    remove = (index) => {
        if (undefined !== this.collection[index]) {
            delete this.collection[index];
            this.length--;
        }
    }

    item = (index) => this.collection[index];

    getByName = (name) => {
        for (const tab of this.collection) {
            if (tab.name === name) {
                return tab;
            }
        }
    }

    forEach = (callback) => {
        for (let i = 0; i < this.length; i++) {
            const tab = this.collection[i];
            callback(tab, i);
        }
    }

    getAsContainer = () => {
        this.clearContainer().fillContainer();
    }

    clearContainer = () => {
        this.container.innerHTML = '';
        return this;
    }

    fillContainer = () => {
        for (const tab of this.collection) {
            const body = tab.getBodyElement();
            this.container.append(body);
        }
        return this;
    }

    toString = () => {
        return `{TabsCollection(${this.length}) ` + this.collection.toString() + '}';
    }
}

export default TabsCollection;