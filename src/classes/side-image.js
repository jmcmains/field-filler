import Image from './image';

export default class SideImage extends Image {
    setControlData() {}

    extraComponentData() {
        super.extraComponentData();
        this.componentData.settings.src = null;
        this.componentData.configurable = ['src']
    }

    exportImage(){}
}
