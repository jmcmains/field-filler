import FieldGroup from "./field-group";

export default class PhoneField extends FieldGroup {
    outputName() {
        return 'phone-number'
    }

    outputText() {
        return "(" + this.getInputElement().text + ") 555-5555";
    }
}
