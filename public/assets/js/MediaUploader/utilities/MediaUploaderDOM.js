import ImagesTab from "./ImagesTab.js";
import FormTab from "./FormTab.js";
import MediaCard from "./MediaCard.js";
import OtherTab from "./OtherTab.js";

class MediaUploaderDOM {
    constructor(card) {
        this.imagesTab = new ImagesTab();
        this.otherTab = new OtherTab();
        this.formTab = new FormTab('upload');
        this.tabsContainer = this.createTabsContainer();
        this.mediaCard = this.createMediaCard(card);
    }

    createTabsContainer() {
        const { imagesTab, otherTab, formTab } = this;
        const tabContainer = document.createElement('div');
        tabContainer.setAttribute('id', 'mediaTabContent');
        tabContainer.setAttribute('class', 'tab-content');
        tabContainer.append(imagesTab.tab, otherTab.tab, formTab.tab);
        return tabContainer;
    }

    createMediaCard(card) {
        const { imagesTab, otherTab, formTab } = this;
        const mediaCard = new MediaCard(card);
        mediaCard.navContainer.append(imagesTab.navItem, otherTab.navItem, formTab.navItem);
        mediaCard.body.append(this.tabsContainer);
    }
}

export default MediaUploaderDOM;