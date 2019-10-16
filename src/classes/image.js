import sketch from 'sketch'
import Component from './component'
import Output from './output'

export default class Image extends Component {
    extraComponentData() {
        this.componentData.type = 'image';
        if (this.layer.style.fills.length > 0) {
            this.componentData.settings.background = this.layer.style.fills[0].color.slice(0, -2);
        }
        this.exportImage();
        this.componentData.settings.src = '/assets/ad_config/' + this.layer.name + '.png';
        this.handleBorder();
    }

    exportImage(){
        var outputDirectory = (new Output).dir();
        var options = {
            scales: '2',
            formats: 'png',
            overwriting: true,
            output: outputDirectory
        };
        sketch.export(this.layer, options);
    }
}
