import FormAlert from "./FormAlert.js";
import FileInput from "./FileInput.js";

class NewMediaForm {
    constructor() {
        this.alert = new FormAlert();
        this.fileInput = new FileInput();
        this.description = this.createDescription();
        this.form = this.createForm();
        this.container = this.createContainer();
    }

    createDescription() {
        const description = document.createElement('p');
        description.setAttribute('class', 'mt-4');
        description.innerHTML = '<small>* Use the dialog below to upload any file under the size of 2MB. Any file you upload here will be viewable by anyone with an internet connection.</small>';
        return description;
    }

    createForm() {
        const form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', '/admin/media/new');
        form.setAttribute('enctype', 'multipart/form-data');
        form.append(this.fileInput.container, this.description);
        form.addEventListener('submit', this.onSubmit.bind(this));
        return form;
    }

    createContainer() {
        const container = document.createElement('div');
        container.setAttribute('class', 'p-4');
        container.append(this.alert.container, this.form);
        return container;
    }

    onSubmit(event) {
        event.preventDefault();
        const data = new FormData(this.form);
        if (NewMediaForm.dataIsValid(data)) {
            this.sendDataToApi(data);
        } else {
            this.alert.error('The media is invalid.');
        }
    }

    sendDataToApi(data) {
        const { form, alert } = this;
        const url = form.getAttribute('action');
        const method = form.getAttribute('method');
        fetch(url, {
            method,
            body: data
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert.success('The media was successfully uploaded!')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static dataIsValid(data) {
        if (data.has('media_upload')) {
            const mediaUpload = data.get('media_upload');
            return mediaUpload.size > 0;
        } else {
            return false;
        }
    }
}

export default NewMediaForm;