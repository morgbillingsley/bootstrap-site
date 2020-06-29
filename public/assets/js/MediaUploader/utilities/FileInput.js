class FileInput {
    constructor() {
        this.input = this.createInput();
        this.label = this.createLabel();
        this.inputContainer = this.createInputContainer();
        this.button = this.createButton();
        this.buttonContainer = this.createButtonContainer();
        this.container = this.createContainer();
    }

    createInput() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('name', 'media_upload');
        input.setAttribute('class', 'custom-file-input');
        input.setAttribute('id', 'mediaUploadInput');
        return input;
    }

    createLabel() {
        const label = document.createElement('label');
        label.setAttribute('class', 'custom-file-label');
        label.setAttribute('for', this.input.getAttribute('id'));
        label.innerText = 'Choose File';
        return label;
    }

    createInputContainer() {
        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'custom-file');
        inputContainer.append(this.input, this.label);
        return inputContainer;
    }

    createButton() {
        const button = document.createElement('button');
        button.setAttribute('class', 'btn btn-primary');
        button.setAttribute('type', 'submit');
        button.innerText = 'Upload';
        return button;
    }

    createButtonContainer() {
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'input-group-append');
        buttonContainer.append(this.button);
        return buttonContainer;
    }

    createContainer() {
        const container = document.createElement('div');
        container.setAttribute('class', 'input-group');
        container.append(this.inputContainer, this.buttonContainer);
        return container;
    }
}

export default FileInput;