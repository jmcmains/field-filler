import sketch from 'sketch'
import FieldGroup from './classes/field-group';
import Color from './classes/color';
import Output from "./classes/output";
let fs = require('@skpm/fs');

// documentation: https://developer.sketchapp.com/reference/api/
var document = require('sketch/dom').getSelectedDocument();

export default function() {
    this.office = new FieldGroup(document, 'office').outputText();
    this.partnerCode = new FieldGroup(document, 'partner-code').outputText();
    this.reporter = new FieldGroup(document, 'reporter').outputText();
    this.assetLink = new FieldGroup(document, 'asset-link').outputText();
    this.primaryColor = new Color(document, 'primary').localColor().slice(0, -2);
    this.secondaryColor = new Color(document, 'secondary');
    this.tertiaryColor = new Color(document, 'tertiary');
    this.exportCSV();

}

export function otherColor(){
    let output = [this.secondaryColor.localColor().slice(0, -2)];
    if (!this.tertiaryColor.isWhite()) {
        output.push(this.tertiaryColor.localColor().slice(0, -2))
    }
    return output.join(',');
}

export function csv(){
    let mustache = require('mustache');
    let text = require('./views/epic_template.csv').replace('file://', '');
    let file = fs.readFileSync(text, {encoding: 'utf8'});
    let data = {
        partner_long: this.office,
        partner: this.partnerCode,
        reporter: this.reporter,
        asset_link: this.assetLink,
        primary_color: this.primaryColor,
        other_color: this.otherColor()
    }
    return mustache.render(file, data)
}

export function exportCSV(){
    var path = require('path');
    var outputDirectory = path.parse(document.path).dir.split("%20").join(" ");
    let filename = (outputDirectory + "/" + this.partnerCode + ".csv");

    let text = require('./jira_es_config.txt').replace('file://', '');
    let configData = fs.readFileSync(text, {encoding: 'utf8'});
    let configFilename = (outputDirectory + "/jira_es_config.txt");
    console.log(filename);
    fs.writeFileSync(filename, this.csv());
    fs.writeFileSync(configFilename, configData);
    sketch.UI.message('everything worked!');
    console.log('completed!')
}