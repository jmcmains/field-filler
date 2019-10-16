import Cascader from './cascader'

export default class Component {
    constructor(layer) {
        this.layer = layer;
    }

    componentData() {
        this.componentData = {
            code: this.toSnakeCase(this.layer.name),
            settings: {}
        };
        this.componentData.settings.top = this.layer.frame.y;
        this.componentData.settings.left = this.layer.frame.x;
        this.componentData.settings.width = this.layer.frame.width;
        this.componentData.settings.height = this.layer.frame.height;
        this.extraComponentData();
        return this.componentData;
    }

    controlData() {
        this.controlData = {
            component: this.toSnakeCase(this.layer.name),
            label: this.toTitleCase(this.layer.name)
        };

        this.extraControlData();
        if ( !this.hideControl) {
            return this.controlData;
        }
    }

    colorData() {
        var cascader = new Cascader(this.layer);
        if (cascader.isPrimary()) {
            this.colorData = {
                component: this.toSnakeCase(this.layer.name),
                label: this.toTitleCase(this.layer.name) + " Color",
                control: 'color'
            };
            if (cascader.cascadesToArray().length > 0) {
                this.colorData.cascades_to = cascader.cascadesToArray();
            }
            this.extraColorData();
            if (!this.hideColor) {
                return this.colorData;
            }
        }
    }

    extraControlData() {
        this.hideControl = true
    }

    extraColorData() {
        this.hideColor = true
    }
    extraComponentData() {}

    handleBorder() {
        if (this.layer.style.borders.length === 0) { return; }
        var borderData = this.layer.style.borders[0];
        if (borderData.enabled) {
            this.componentData.settings.borderColor = borderData.color.slice(0,-2);
            this.componentData.settings.borderWidth = borderData.thickness;
            this.componentData.settings.borderStyle = 'solid';
        }
    }

    toSnakeCase(text){
        return text.replace(/\.?([A-Z]+)/g, function (x,y){
            return "_" + y.toLowerCase()
        }).replace(/^_/, "")
    }

    toTitleCase(text) {
        return text.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
}
