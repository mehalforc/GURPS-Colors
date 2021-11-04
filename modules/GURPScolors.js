import { warn, error, debug, log } from "../main.js";
import { MODULE_NAME } from "./Settings.js";
export class GURPScolors {
  static init() {
    warn("Init GURPS Colors...");
    GURPScolors.updateSettings();
  }
  static updateSettings() {
    warn("Update GURPS Color Setting...");
    GURPScolors.colorAttributesRollable = game.settings.get(
      MODULE_NAME,
      "GC-attributes-rollable"
    );
    GURPScolors.colorAttributesRollableText = game.settings.get(
      MODULE_NAME,
      "GC-attributes-rollable-text"
    );
    GURPScolors.colorAttributesRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-attributes-rollable-hover"
    );

    GURPScolors.colorDodgeRollable = game.settings.get(
      MODULE_NAME,
      "GC-dodge-rollable"
    );
    GURPScolors.colorDodgeRollableText = game.settings.get(
      MODULE_NAME,
      "GC-dodge-rollable-text"
    );
    GURPScolors.colorDodgeRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-dodge-rollable-hover"
    );

    GURPScolors.colorDamageRollable = game.settings.get(
      MODULE_NAME,
      "GC-damage-rollable"
    );
    GURPScolors.colorDamageRollableText = game.settings.get(
      MODULE_NAME,
      "GC-damage-rollable-text"
    );
    GURPScolors.colorDamageRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-damage-rollable-hover"
    );

    GURPScolors.colorBlockRollable = game.settings.get(
      MODULE_NAME,
      "GC-block-rollable"
    );
    GURPScolors.colorBlockRollableText = game.settings.get(
      MODULE_NAME,
      "GC-block-rollable-text"
    );
    GURPScolors.colorBlockRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-block-rollable-hover"
    );

    GURPScolors.colorParryRollable = game.settings.get(
      MODULE_NAME,
      "GC-parry-rollable"
    );
    GURPScolors.colorParryRollableText = game.settings.get(
      MODULE_NAME,
      "GC-parry-rollable-text"
    );
    GURPScolors.colorParryRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-parry-rollable-hover"
    );

    GURPScolors.colorWeaponsRollable = game.settings.get(
      MODULE_NAME,
      "GC-weapons-rollable"
    );
    GURPScolors.colorWeaponsRollableText = game.settings.get(
      MODULE_NAME,
      "GC-weapons-rollable-text"
    );
    GURPScolors.colorWeaponsRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-weapons-rollable-hover"
    );

    GURPScolors.colorSkillsRollable = game.settings.get(
      MODULE_NAME,
      "GC-skills-rollable"
    );
    GURPScolors.colorSkillsRollableText = game.settings.get(
      MODULE_NAME,
      "GC-skills-rollable-text"
    );
    GURPScolors.colorSkillsRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-skills-rollable-hover"
    );

    GURPScolors.colorSpellsRollable = game.settings.get(
      MODULE_NAME,
      "GC-spells-rollable"
    );
    GURPScolors.colorSpellsRollableText = game.settings.get(
      MODULE_NAME,
      "GC-spells-rollable-text"
    );
    GURPScolors.colorSpellsRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-spells-rollable-hover"
    );

    GURPScolors.colorGurpsLinksRollable = game.settings.get(
      MODULE_NAME,
      "GC-gurpslink-rollable"
    );
    GURPScolors.colorGurpsLinksRollableText = game.settings.get(
      MODULE_NAME,
      "GC-gurpslink-rollable-text"
    );
    GURPScolors.colorGurpsLinksRollableHover = game.settings.get(
      MODULE_NAME,
      "GC-gurpslink-rollable-hover"
    );
  }
  static prepareEvent() {}
}
