import FieldGroup from "./field-group";

export default class TitleField extends FieldGroup {
    outputName() {
        return 'title'
    }

    outputText() {
        return this.getInputElement().text + " negotiated a 15% discount for all of your ads!";
    }
}
