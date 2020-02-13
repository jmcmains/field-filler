import sketch from 'sketch'
import LogoLocator from './classes/logo-locator';
import FieldGroup from './classes/field-group';
import PhoneField from './classes/phone-field';
import TaglineField from './classes/tagline-field';
import TitleField from './classes/title-field';

import Color from './classes/color';
import BigbrandField from "./classes/bigbrand-field";
import ColorSwatch from "./classes/color-swatch";

// documentation: https://developer.sketchapp.com/reference/api/
var document = require('sketch/dom').getSelectedDocument();
var symbols = document.getSymbols();
var logo = symbols.filter(function (symbol) { return symbol.name === "Logo" })[0];

export default function() {
  var vertical = new FieldGroup(document, 'vertical').outputText();
  var logoLocator = new LogoLocator(document, logo);
  logoLocator.sizeToFit();
  switch (vertical) {
    case 'Real Estate':
      new PhoneField(document, 'area-code').setField();
      new FieldGroup(document, 'vertical').setField();
      new TitleField(document, 'office').setField();
      new BigbrandField(document, 'office').setField();
      logoLocator.centerAlign('listings-awd');
      logoLocator.centerAlign('fb/insta image listing');
      try {
        logoLocator.centerAlign('homepage');
      } catch(err) {
          console.log(err)
      }
      break;
    default:
  }
  new TaglineField(document, 'location').setField(vertical.toLowerCase());
  new Color(document, 'primary').update();
  new Color(document, 'secondary').update();
  var tertiary = new Color(document, 'tertiary');
  tertiary.update();
  var hideTertiary = tertiary.isWhite();
  new ColorSwatch(document, hideTertiary).update();
  new FieldGroup(document, 'location').setField();
  new FieldGroup(document, 'office').setField();
  logoLocator.centerAlign('sphere-ad-builder',1);
  logoLocator.centerAlign('fb/insta image brand');
  logoLocator.leftAlign('brand-awd');
  logoLocator.leftAlign('sphere-awd');
  try {
    logoLocator.rightAlign('tv-awd',10);
  } catch(err) {
    console.log(err)
  }


  sketch.UI.message('everything worked!');
  console.log('completed!')
}

