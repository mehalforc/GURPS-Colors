import { warn, error, debug, log } from '../main.js';
import { MODULE_NAME } from './Settings.js';
export class GURPScolors {
  static colorAttributesRollable = "";
  static colorAttributesRollableHover = "";
  static init() {
    warn('Init GURPS Colors...');
    GURPScolors.updateSettings();
  }
  static updateSettings() {
    warn('Update GURPS Color Setting...');
    GURPScolors.colorAttributesRollable = game.settings.get(MODULE_NAME, 'GC-attributes-rollable');
    GURPScolors.colorAttributesRollableText = game.settings.get(MODULE_NAME, 'GC-attributes-rollable-text');
    GURPScolors.colorAttributesRollableHover = game.settings.get(MODULE_NAME, 'GC-attributes-rollable-hover');
    
    GURPScolors.colorDodgeRollable = game.settings.get(MODULE_NAME, 'GC-dodge-rollable');
    GURPScolors.colorDodgeRollableText = game.settings.get(MODULE_NAME, 'GC-dodge-rollable-text');
    GURPScolors.colorDodgeRollableHover = game.settings.get(MODULE_NAME, 'GC-dodge-rollable-hover');
  }
  static prepareEvent() {
  }
}
