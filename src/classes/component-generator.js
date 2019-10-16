import Text from './text';
import SideImage from './side-image';
import MainImage from './main-image';
import Image from './image';
import Block from './block';

export default class ComponentGenerator {
    constructor(layer, outputDirectory) {
        this.layer = layer;
    }

    pick() {
        switch(this.layer.type) {
            case 'Text':
                return new Text(this.layer);
            case 'Image':
            case 'Group':
                switch(this.layer.name) {
                    case 'inset':
                        return new SideImage(this.layer);
                    case 'background':
                        return new MainImage(this.layer);
                }
                return new Image(this.layer);
            case 'ShapePath':
                var fills = this.layer.style.fills[0];
                if (this.layer.shapeType !== 'Rectangle' || fills.fillType === 'Gradient') {
                    return new Image(this.layer);
                } else {
                    return new Block(this.layer)
                }
        }
    }
}
