import MediaAlert from "./MediaAlert.js";

class FormAlert extends MediaAlert {
    success(message) {
        this.setMessage(message);
        this.setSuccess();
        this.show();
    }

    error(message) {
        this.setMessage(message);
        this.setError();
        this.show();
    }
}

export default FormAlert;