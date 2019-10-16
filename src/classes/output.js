export default class Output {
    dir() {
        var path = require('path');
        // documentation: https://developer.sketchapp.com/reference/api/
        var document = require('sketch/dom').getSelectedDocument();
        var outputDirectory = path.parse(document.path).dir + "/generated-config-files/";
        return outputDirectory.split("%20").join(" ");
    }
}