import FieldGroup from "./field-group";

export default class TaglineField extends FieldGroup {
    outputName() {
        return 'tagline'
    }

    outputText(vertical) {
        return "Your local " + vertical + " professional for " + this.getInputElement().text;
    }
}
