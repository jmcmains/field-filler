import FieldGroup from "./field-group";

export default class TaglineField extends FieldGroup {
    outputName() {
        return 'tagline'
    }

    outputText() {
        return "Your local real estate professional for " + this.getInputElement().text;
    }
}
