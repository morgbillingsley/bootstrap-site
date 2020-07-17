import MediaTab from "./MediaTab.js";
import OtherTile from "./OtherTile.js";

class OtherTab extends MediaTab {
    constructor() {
        super('other');
    }

    addFile(mediaObj) {
        const tile = new OtherTile(mediaObj);
        this.container.append(tile);
    }
}

export default OtherTab;