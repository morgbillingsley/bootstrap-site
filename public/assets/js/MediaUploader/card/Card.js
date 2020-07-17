import ElementCreator from "../utilities/ElementCreator.js";
import CardHeader from "./CardHeader.js";
import CardBody from "./CardBody.js";
import CardNavigation from "./CardNavigation.js";

class Card {
    constructor() {
        this.domElement = ElementCreator.createDOMElement('div', {
            "class": "card"
        });
        this.createHeader().createBody();
    }

    setTabs = (tabsCollection) => {
        this.tabs = tabsCollection;
        this.createNavigation().addTabsToBody();
    }

    createHeader = () => {
        const header = new CardHeader();
        this.addHeader(header);
        return this;
    }

    createBody = () => {
        const body = new CardBody();
        this.addBody(body);
        return this;
    }

    createNavigation = () => {
        const navigation = new CardNavigation();
        this.tabs.forEach((tab) => {
            navigation.addLink(tab.link);
        });
        this.addNavigation(navigation);
        return this;
    }

    addHeader = (header) => {
        this.header = header;
        this.domElement.append(header.domElement);
    }

    addBody = (body) => {
        this.body = body;
        this.domElement.append(body.domElement);
    }

    addNavigation = (navigation) => {
        this.navigation = navigation;
        this.domElement.append(navigation.domElement);
    }

    addTabsToBody = () => {
        const tabsContainer = this.tabs.getAsContainer();
        this.body.addChild(tabsContainer);
    }
}

export default Card;