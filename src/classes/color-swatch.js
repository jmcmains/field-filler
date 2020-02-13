export default class ColorSwatch {

    constructor(document, hideTertiary) {
        this.document = document;
        this.symbols = document.getSymbols();
        this.hideTertiary = hideTertiary;
    }

    swatchWith() {
        return this.symbols.filter(function (symbol) { return symbol.name === "color swatch" })[0];
    }

    swatchWithOut() {
        return this.symbols.filter(function (symbol) {
            return symbol.name === "color swatch wo tertiary"
        })[0];
    }

    getSwatchSymbolId() {
        if (this.hideTertiary) {
            return this.swatchWithOut().symbolId;
        } else {
            return this.swatchWith().symbolId;
        }
    }


    update() {
        var symbolId = this.getSwatchSymbolId();
        this.swatchWith().getAllInstances().forEach(function (instance) {
            instance.symbolId = symbolId;
        })
        this.swatchWithOut().getAllInstances().forEach(function (instance) {
            instance.symbolId = symbolId;
        })
    }
}