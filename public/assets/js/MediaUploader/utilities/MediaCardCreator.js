import Tab from "../tab/Tab.js";
import TabsCollection from "../tab/TabsCollection";
import Card from "../card/Card.js";

class MediaCardCreator {
    static tabNames = ['images', 'other', 'form'];

    static create = () => {
        const tabs = this.createTabs();
        const card = new Card();
        card.setTabs(tabs);
        return card;
    }

    static createTabs = () => {
        const tabs = new TabsCollection();
        for (const i in this.tabNames) {
            const name = this.tabNames[i];
            const tab = new Tab(name);
            tabs.add(tab);
        }
        return tabs;
    }
}

export default MediaCardCreator;