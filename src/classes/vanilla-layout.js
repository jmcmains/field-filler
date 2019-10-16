import ComponentGenerator from './component-generator';
var fs = require('@skpm/fs');

var path = require('path');
var mustache = require('mustache');
var text = require('../views/yml.txt').replace('file://', '');
var file = fs.readFileSync(text, {encoding: 'utf8'});

export default class VanillaLayout {
    constructor(artboard, layoutType, includeUI) {
        this.artboard = artboard;
        this.layoutType = layoutType;
        this.includeUI = includeUI;
    }

    hash() {
        var output = {};
        output[this.artboard.name] = {
            type: 'composite',
            code: 'base',
            baseName: this.artboard.name,
            settings: {
                width: this.artboard.frame.width,
                height: this.artboard.frame.height
            },
            components: this.getComponents()
        };
        if (this.includeUI) {
            output[this.artboard.name].meta = {defaults: {}};
            output[this.artboard.name].ui_controls = this.getUIControls();
        }
        if (this.getImage('side')) {
            output[this.artboard.name].side_image = this.getSideImageControlData()
        }
        if (this.getImage('main')) {
            output[this.artboard.name].main_image = this.getMainImageControlData()
        }
        return output;
    }

    yml1() {
        var YAML = require('json2yaml');
        var data = YAML.stringify(this.hash()).substr(3);
        var header = "<%= IO.read('config/campaign_layouts/common/common_shared_components.yml') %>\n" +
            "<%= IO.read('config/campaign_layouts/_" + this.layoutType + ".yml') %>\n\n";
        return header + data;
    }

    yml() {
        return mustache.render(file, {layoutType: this.layoutType})

    }

    exportYAML(outputDirectory){
        fs.writeFileSync((outputDirectory + this.artboard.name + ".yml"), this.yml());
    }

    getImage(type) {
        var code = type === 'main' ? 'background' : 'inset';
        return this.artboard.layers.filter((layer) => {return layer.name === code})[0]
    }

    getSideImageControlData() {
        var side = this.getImage('side');
        return {
            position: 'left-bottom',
            label: 'Your Image',
            dimensions: side.frame.width + 'x' + side.frame.height
        }
    }

    getMainImageControlData() {
        var main = this.getImage('main');
        return  {
            position: 'left-top',
            label: 'Main Image',
            dimensions: main.frame.width + 'x' + main.frame.height
        }
    }

    getUIControls() {
        var layers = this.artboard.layers;
        var colorControls = layers.map((layer) => {
            return (new ComponentGenerator(layer)).pick().colorData();
        }).filter((element) => { return element });
        var textControls = layers.map((layer) => {
            return (new ComponentGenerator(layer)).pick().controlData();
        }).filter((element) => { return element });
        return [
            {
                name: 'colors',
                label: 'Colors',
                position: 'left-bottom',
                fields: colorControls
            },
            {
                name: 'text',
                label: 'Text',
                position: 'right-middle',
                fields: textControls
            }
        ]
    }

    getComponents() {
        var layers = this.artboard.layers;
        return layers.map((layer) => {
            return (new ComponentGenerator(layer)).pick().componentData()
        })
    }
}
