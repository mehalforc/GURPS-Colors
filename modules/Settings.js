import { warn, error, debug, log } from '../main.js';

export const requestURL = '../modules/GURPS-colors/module.json';
export var MODULE_TITLE = '';
export var MODULE_NAME = '';
export var MODULE_VERSION = '';

$.getJSON(requestURL, function(json) { 
  MODULE_TITLE = json.title;
  MODULE_NAME = json.name;
  MODULE_VERSION = json.version;
}); 

export const registerSettings = function() {
  warn('Register module settings...');
  game.settings.register(MODULE_NAME, 'GC-attributes-rollable', {
    name: 'Attribute Background Color',
    hint: 'Attribute Background HEX Color.',
    scope: 'client',
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, 'GC-attributes-rollable-hover', {
    name: 'Attribute Background Hover Color',
    hint: 'Attribute Background Hover HEX Color.',
    scope: 'client',
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, 'GC-attributes-rollable-text', {
    name: 'Attribute Black/White Text Color',
    hint: 'Black Text Color When Checked.',
    scope: 'client',
    config: true,
    default: true,
    type: Boolean,
  });

  game.settings.register(MODULE_NAME, 'GC-dodge-rollable', {
    name: 'Dodge Background Color',
    hint: 'Dodge Background HEX Color.',
    scope: 'client',
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, 'GC-dodge-rollable-hover', {
    name: 'Dodge Background Hover Color',
    hint: 'Dodge Background Hover HEX Color.',
    scope: 'client',
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, 'GC-dodge-rollable-text', {
    name: 'Dodge Black/White Text Color',
    hint: 'Black Text Color When Checked.',
    scope: 'client',
    config: true,
    default: true,
    type: Boolean,
  });
};
