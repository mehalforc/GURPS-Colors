import { warn, error, debug, log } from "../main.js";
import { MODULE_NAME } from "./Settings.js";
import { gcAtributesColors, gcDodgeColors, gcDamageColors, gcBlockColors, gcParryColors, gcWeaponsColors, gcSkillsColors, gcSpellsColors, gcGurpsLinksColors } from "./Settings.js";

export class GURPScolors {
  static init() {
    warn("Init GURPS Colors...");
    GURPScolors.updateSettings();
  }
  static updateSettings() {
    warn("Update GURPS Color Setting...");
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorAttributesRollable = game.settings.get(MODULE_NAME, gcAtributesColors[0]);
    GURPScolors.colorAttributesRollableHover = game.settings.get(MODULE_NAME, gcAtributesColors[1]);
    GURPScolors.colorAttributesRollableText = game.settings.get(MODULE_NAME, gcAtributesColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorDodgeRollable = game.settings.get(MODULE_NAME, gcDodgeColors[0]);
    GURPScolors.colorDodgeRollableHover = game.settings.get(MODULE_NAME, gcDodgeColors[1]);
    GURPScolors.colorDodgeRollableText = game.settings.get(MODULE_NAME, gcDodgeColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorDamageRollable = game.settings.get(MODULE_NAME, gcDamageColors[0]);
    GURPScolors.colorDamageRollableHover = game.settings.get(MODULE_NAME, gcDamageColors[1]);
    GURPScolors.colorDamageRollableText = game.settings.get(MODULE_NAME, gcDamageColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorBlockRollable = game.settings.get(MODULE_NAME, gcBlockColors[0]);
    GURPScolors.colorBlockRollableHover = game.settings.get(MODULE_NAME, gcBlockColors[1]);
    GURPScolors.colorBlockRollableText = game.settings.get(MODULE_NAME, gcBlockColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorParryRollable = game.settings.get(MODULE_NAME, gcParryColors[0]);
    GURPScolors.colorParryRollableHover = game.settings.get(MODULE_NAME, gcParryColors[1]);
    GURPScolors.colorParryRollableText = game.settings.get(MODULE_NAME, gcParryColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorWeaponsRollable = game.settings.get(MODULE_NAME, gcWeaponsColors[0]);
    GURPScolors.colorWeaponsRollableHover = game.settings.get(MODULE_NAME, gcWeaponsColors[1]);
    GURPScolors.colorWeaponsRollableText = game.settings.get(MODULE_NAME, gcWeaponsColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorSkillsRollable = game.settings.get(MODULE_NAME, gcSkillsColors[0]);
    GURPScolors.colorSkillsRollableHover = game.settings.get(MODULE_NAME, gcSkillsColors[1]);
    GURPScolors.colorSkillsRollableText = game.settings.get(MODULE_NAME, gcSkillsColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    GURPScolors.colorSpellsRollable = game.settings.get(MODULE_NAME, gcSpellsColors[0]);
    GURPScolors.colorSpellsRollableHover = game.settings.get(MODULE_NAME, gcSpellsColors[1]);
    GURPScolors.colorSpellsRollableText = game.settings.get(MODULE_NAME, gcSpellsColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    GURPScolors.colorGurpsLinksRollable = game.settings.get(MODULE_NAME, gcGurpsLinksColors[0]);
    GURPScolors.colorGurpsLinksRollableHover = game.settings.get(MODULE_NAME, gcGurpsLinksColors[1]);
    GURPScolors.colorGurpsLinksRollableText = game.settings.get(MODULE_NAME, gcGurpsLinksColors[2]);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }
}
