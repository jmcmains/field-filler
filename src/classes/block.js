import Component from './component'
export default class Block extends Component {
    extraComponentData() {
        this.componentData.type = 'block';
        this.componentData.settings.background = this.layer.style.fills[0].color.slice(0, -2);
        this.componentData.settings.opacity = this.layer.style.opacity;
        this.handleBorder();
        this.componentData.configurable = ['background'];
    }

    extraColorData() {
        this.colorData.setting = 'background';
    }
}
