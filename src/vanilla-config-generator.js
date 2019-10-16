import Layout from './classes/layout';
import Output from "./classes/output";

// documentation: https://developer.sketchapp.com/reference/api/
var document = require('sketch/dom').getSelectedDocument();

var UI = require('sketch/ui');


export default function() {
    var artboard = getSelectedArtboard();
    var outputDirectory = (new Output).dir();
    var layoutType;
    var includeUI;
    UI.getInputFromUser("Ad type?", {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['listing', 'brand']
    }, (err, value) => {
        layoutType = value;
        if (err) {
            // most likely the user canceled the input
            throw err.message
        }
    });
    UI.getInputFromUser("Include UI Controls?", {
        type: UI.INPUT_TYPE.selection,
        possibleValues: ['Yes', 'No']
    }, (err, value) => {
        includeUI = (value === 'Yes');
        if (err) {
            // most likely the user canceled the input
            throw err.message
        }
    });
    new Layout(artboard, layoutType, includeUI).exportYAML(outputDirectory);
    console.log('Check the dir')
}

function getSelectedArtboard() {
    var selection = document.selectedLayers.layers;
    if( selection.length === 1 ){
        const layer = selection[0];
        if( layer.type === 'SymbolMaster' || layer.type === 'Artboard' ){
            return layer;
        }
    }
    UI.alert('YML Gen Failed','Please select one artboard');
    throw 'Please select one artboard'
}