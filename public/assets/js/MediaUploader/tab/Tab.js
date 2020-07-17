import TabBody from "./TabBody.js";
import TabLink from "./TabLink.js";

class Tab {
    constructor(name) {
        this.name = name;
        this.link = new TabLink(name);
        this.body = new TabBody(name);
    }

    getBodyElement = () => this.body.domElement;

    getLinkElement = () => this.link.domElement;

    setOnClick = (onClick) => {
        this.link.onClick = onClick;
    }
}

export default Tab;