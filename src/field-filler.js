import sketch from 'sketch'
import LogoLocator from './classes/logo-locator';
import FieldGroup from './classes/field-group';
import PhoneField from './classes/phone-field';
import TaglineField from './classes/tagline-field';
import Color from './classes/color';



// documentation: https://developer.sketchapp.com/reference/api/
var document = require('sketch/dom').getSelectedDocument();
var symbols = document.getSymbols();
var logo = symbols.filter(function (symbol) { return symbol.name === "Logo" })[0];

export default function() {
  new PhoneField(document, 'area-code').setField();
  new FieldGroup(document, 'location').setField();
  new FieldGroup(document, 'office').setField();
  new TaglineField(document, 'location').setField();

  new Color(document, 'primary').update();
  new Color(document, 'secondary').update();
  new Color(document, 'tertiary').update();
  sketch.UI.message('colors updated');
  var logoLocator = new LogoLocator(document, logo);
  logoLocator.sizeToFit();
  logoLocator.centerAlign('listings-awd');
  logoLocator.centerAlign('sphere-ad-builder',1);

  logoLocator.centerAlign('fb/insta image listing');
  logoLocator.centerAlign('fb/insta image brand');
  logoLocator.leftAlign('brand-awd');
  logoLocator.leftAlign('sphere-awd');

  sketch.UI.message('everything worked!');
  console.log('completed!')
}

