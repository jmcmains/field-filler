export default class FieldGroup {
    constructor(document, fieldName) {
        this.document = document;
        this.fieldName = fieldName;
        this.inputName = fieldName + "-input";
    }

    outputName() {
        return this.fieldName;
    }

    filterName() {
        return this.outputName() + "-filter";
    }

    outputText() {
        return this.getInputElement().text;
    }

    getInputElement() {
        return this.document.getLayersNamed(this.inputName)[0];

    }

    setField() {
        var input = this.outputText();
        var layers = this.document.getLayersNamed(this.outputName());
        for (var i = 0; i < layers.length; i++) {
            layers[i].text = input;
        }
        var filters = this.document.getLayersNamed(this.filterName());
        for (var j = 0; j < filters.length; j++) {
            filters[j].text = this.fieldLength().toString();
        }

    }

    fieldLength() {
        return this.outputText().length || 0;
    }

}
