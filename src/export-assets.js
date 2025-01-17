import sketch from 'sketch'
import output from "./classes/output";
var document = require('sketch/dom').getSelectedDocument();


export default function() {
    var selection = document.selectedPage.layers;
    var assets = selection.filter(function (sel) {
        return ['SymbolMaster','Artboard'].includes(sel.type) && sel.exportFormats.length > 0;
    });
    var options = {output: outputDir(), scales: '1', formats: 'png', overwriting: true };
    assets.forEach(function(layer) {
        if (layer.exportFormats.length === 2) {
            options.scales = '1, 2'
        } else {
            options.scales = '1'
        }
        sketch.export(layer, options);
    });
    sketch.UI.message('done!');
    console.log('done!')
}

function outputDir() {
    var path = require('path');
    // documentation: https://developer.sketchapp.com/reference/api/
    var outputDirectory = path.parse(document.path).dir + "/Assets/";
    return outputDirectory.split("%20").join(" ");
}