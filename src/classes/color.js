
export default class Color {
    constructor(document, fieldName) {
        this.document = document;
        this.input = fieldName + "-color-input";
        this.text = fieldName + "-color-text";
        this.display = fieldName + "-color-display";
        this.font = fieldName + "-font-color";
    }

    update() {
        this.setColor();
        this.setText();
        this.setFontColor();
    }

    getColorLayer() {
        return this.document.getLayersNamed(this.input)[0];
    }

    getTextLayer() {
        return this.document.getLayersNamed(this.text)[0];
    }

    getSharedStyle() {
        var sharedStyleId = this.getColorLayer().sharedStyleId;
        return this.document.getSharedLayerStyleWithID(sharedStyleId);
    }

    setSharedStyle() {
        this.getSharedStyle().style.fills[0].color = this.localColor();
    }

    getDisplayLayer() {
        return this.document.getLayersNamed(this.display)[0];
    }

    setFontColor() {
        var text = this.document.getLayersNamed(this.font);
        for (var i = 0; i < text.length; i++) {
            text[i].style.textColor = this.localColor()
        }
    }

    localColor() {
        return this.getColorLayer().style.fills[0].color
    }

    setDefaultColor(color) {
        this.getColorLayer().style.fills[0].color = color;
        return this;
    }

    setColor() {
        this.setSharedStyle();
        var layers = this.getSharedStyle().getAllInstancesLayers();
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.syncWithSharedStyle(this.getSharedStyle());
            var textOverlaid = this.findLocalText(layers[i]);
            for (var j = 0; j < textOverlaid.length; j++) {
                textOverlaid[j].style.textColor = this.outputColor(this.localColor())
            }
            var phoneBorderOverlaid = this.findLocalPhoneBorder(layers[i]);
            for (var j = 0; j < phoneBorderOverlaid.length; j++) {
                phoneBorderOverlaid[j].style.borders[0].color = this.outputColor(this.localColor())
            }
        }
    }

    findLocalText(colorLayer) {
        var artboard = colorLayer.getParentArtboard();
        return artboard.layers.filter(function (layer) {
            return layer.type === 'Text' &&
                layer.frame.y >= colorLayer.frame.y &&
                layer.frame.y <= (colorLayer.frame.y + colorLayer.frame.height) &&
                layer.frame.x >= colorLayer.frame.x &&
                layer.frame.x <= (colorLayer.frame.x + colorLayer.frame.width)
        })
    }

    findLocalPhoneBorder(colorLayer) {
        var artboard = colorLayer.getParentArtboard();
        return artboard.layers.filter(function (layer) {
            return layer.type === 'ShapePath' && layer.name === 'phone-border' &&
                layer.frame.y >= colorLayer.frame.y &&
                layer.frame.y <= (colorLayer.frame.y + colorLayer.frame.height) &&
                layer.frame.x >= colorLayer.frame.x &&
                layer.frame.x <= (colorLayer.frame.x + colorLayer.frame.width)
        })
    }

    isWhite() {
        return (this.localColor() === '#ffffffff')
    }

    setText() {
        this.getTextLayer().text = this.localColor().slice(0, -2);
        this.getTextLayer().hidden = this.isWhite();
        this.getDisplayLayer().hidden = this.isWhite();
    }

    outputColor(backgroundColor) {
        var rgb = this.hexToRgb(backgroundColor.slice(0, -2));
        if (rgb && ((rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) > 186)) {
            return '#000000'
        } else {
            return '#ffffff'
        }
    }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}