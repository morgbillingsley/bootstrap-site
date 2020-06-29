class MediaAlert {
    constructor() {
        this.button = this.createButton();
        this.message = this.createMessage();
        this.container = this.createContainer();
        this.button.addEventListener('click', this.hide.bind(this));
    }

    createButton() {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('class', 'close');
        button.innerHTML = "<span>&times;</span>";
        return button;
    }

    createMessage() {
        const message = document.createElement('span');
        return message;
    }

    createContainer() {
        const container = document.createElement('div');
        container.setAttribute('class', 'alert d-none');
        container.setAttribute('role', 'alert');
        container.append(this.message, this.button);
        return container;
    }

    isSuccess() {
        return this.container.classList.contains('alert-success');
    }

    isError() {
        return this.container.classList.contains('alert-danger');
    }

    isHidden() {
        return this.container.classList.contains('d-none');
    }

    show() {
        if (this.isHidden()) {
            this.container.classList.remove('d-none');
        }
    }

    hide() {
        if (!this.isHidden()) {
            this.container.classList.add('d-none');
        }
    }

    setError() {
        if (this.isSuccess()) {
            this.container.classList.remove('alert-success');
        }
        this.container.classList.add('alert-danger');
    }

    setSuccess() {
        if (this.isError()) {
            this.container.classList.remove('alert-danger');
        }
        this.container.classList.add('alert-success');
    }

    setMessage(message) {
        this.message.innerText = message;
    }
}

export default MediaAlert;