import MediaTab from "./MediaTab.js";
import ImageTile from "./ImageTile.js";

class ImagesTab extends MediaTab {
    constructor() {
        super('images');
        this.tabLink.classList.add('active');
        this.tab.classList.add('active');
    }

    addImage(imageObj) {
        const tile = new ImageTile(imageObj);
        this.container.append(tile.container);
    }
}

export default ImagesTab;