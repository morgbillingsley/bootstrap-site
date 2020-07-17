class MediaUploaderRepository {
    static getImagesTab = (parent) => parent.querySelector('#images div.display-flex.flex-wrap');

    static getOtherMediaTab = (parent) => parent.querySelector('#other div.display-flex.flex-wrap');

    static getUploaderForm = (parent) => parent.querySelector('#upload form');
}