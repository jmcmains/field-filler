import Component from './component'

export default class Text extends Component {
    extraComponentData() {
        this.componentData.type = this.isText() ? 'text' : 'caption';
        this.componentData.settings.honorLineBreaks = !(this.isText());
        this.componentData.settings.textAlign = this.layer.style.alignment;
        this.componentData.settings.fontSize = this.layer.style.fontSize;
        this.componentData.settings.fontFamily = this.layer.style.fontFamily;
        this.componentData.settings.opacity = this.layer.style.opacity;
        this.componentData.settings.fontWeight = this.layer.style.fontWeight * 100;
        this.componentData.settings.serverFont = this.layer.style.fontFamily;
        this.componentData.settings.letterSpacing = this.layer.style.kerning;
        this.componentData.settings.verticalAlign = this.layer.style.verticalAlignment;
        this.componentData.settings.color = this.layer.style.textColor.slice(0,-2);
        this.componentData.configurable = ['text','color'];
        this.handleTextModifiers()
    }

    extraControlData() {
        this.controlData.required = true;
        this.controlData.setting = 'text';
        this.controlData.control = 'text';
        this.filters = [];
    }

    extraColorData() {
        this.colorData.setting = 'color';
    }

    handleTextModifiers() {
        switch (this.layer.style.textTransform) {
            case 'uppercase':
                this.componentData.settings.jsModify = ['toUpperCase'];
                this.componentData.settings.rubyModify = ['upcase'];
                break;
        }
    }

    isText() {
        return this.layer.frame.height <= this.layer.style.fontSize * 2
    }
}
