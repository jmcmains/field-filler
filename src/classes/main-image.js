import Image from './image';

export default class MainImage extends Image {
    setControlData() {
        this.controlData = {
            position: 'left-top',
            label: 'Main Image',
            dimensions: this.layer.frame.width + 'x' + this.layer.frame.height
        }
    }

    extraComponentData() {
        super.extraComponentData();
        this.componentData.settings.src = null;
        this.componentData.configurable = ['src']
    }

    exportImage(){}
}
