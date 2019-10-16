export default class Cascader {
    constructor(layer) {
        this.layer = layer;
        var artboard = layer.getParentArtboard();
        this.layers = artboard.layers
    }

    isPrimary() {
        return this.layers.filter((layer) => {
            return layer.type === this.layer.type &&
                this.colorEq(layer, this.layer)
        }).findIndex((layer) => { return layer.id === this.layer.id } ) === 0
    }


    cascadesTo() {
        return this.layers.filter((layer) => {
            return layer.type === this.layer.type &&
                this.colorEq(layer, this.layer) &&
                layer.id !== this.layer.id
        })
    }

    cascadesToArray() {
        return this.cascadesTo().map((layer) => { return layer.name + ':' + this.fieldType() })
    }

    fieldType() {
        switch (this.layer.type) {
            case 'Text':
                return 'color';
            case 'ShapePath':
                return 'background';
        }
    }

    colorEq(layer1, layer2) {
        switch (layer1.type) {
            case 'Text':
                return layer1.style.textColor === layer2.style.textColor;
            case 'ShapePath':
                return layer1.style.fills[0] && layer2.style.fills[0] &&
                    layer1.style.fills[0].fillType === layer2.style.fills[0].fillType &&
                    layer1.style.fills[0].color === layer2.style.fills[0].color

        }
    }
}