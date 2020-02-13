import FieldGroup from "./field-group";

export default class BigbrandField extends FieldGroup {
    outputName() {
        return 'bigbrand'
    }

    outputText() {
        return "We make “big brand” ads available to " + this.getInputElement().text + " agents";
    }
}
