import { warn, error, debug, log } from "../main.js";

export const requestURL = "../modules/GURPS-colors/module.json";
export var MODULE_TITLE = "";
export var MODULE_NAME = "";
export var MODULE_VERSION = "";

$.getJSON(requestURL, function (json) {
  MODULE_TITLE = json.title;
  MODULE_NAME = json.name;
  MODULE_VERSION = json.version;
});

export const gcAtributesColors = [
  "GC-attributes-rollable",
  "GC-attributes-rollable-hover",
  "GC-attributes-rollable-text",
];
export const gcDodgeColors = [
  "GC-dodge-rollable",
  "GC-dodge-rollable-hover",
  "GC-dodge-rollable-text",
];
export const gcDamageColors = [
  "GC-damage-rollable",
  "GC-damage-rollable-hover",
  "GC-damage-rollable-text",
];
export const gcBlockColors = [
  "GC-block-rollable",
  "GC-block-rollable-hover",
  "GC-block-rollable-text",
];
export const gcParryColors = [
  "GC-parry-rollable",
  "GC-parry-rollable-hover",
  "GC-parry-rollable-text",
];
export const gcWeaponsColors = [
  "GC-weapons-rollable",
  "GC-weapons-rollable-hover",
  "GC-weapons-rollable-text",
];
export const gcSkillsColors = [
  "GC-skills-rollable",
  "GC-skills-rollable-hover",
  "GC-skills-rollable-text",
];
export const gcSpellsColors = [
  "GC-spells-rollable",
  "GC-spells-rollable-hover",
  "GC-spells-rollable-text",
];
export const gcGurpsLinksColors = [
  "GC-gurpslink-rollable",
  "GC-gurpslink-rollable-hover",
  "GC-gurpslink-rollable-text",
];

export const registerSettings = function () {
  warn("Register module settings...");
  let gcAtributeColor = "";
  let gcDodgeColor = "";
  let gcDamageColor = "";
  let gcBlockColor = "";
  let gcParryColor = "";
  let gcWeaponsColor = "";
  let gcSkillsColor = "";
  let gcSpellsColor = "";
  let gcGurpsLinksColor = "";

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcAtributeColor = gcAtributesColors[0];
  game.settings.register(MODULE_NAME, gcAtributeColor, {
    name: "Attribute Background Color",
    hint: "Attribute Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcAtributeColor = gcAtributesColors[1];
  game.settings.register(MODULE_NAME, gcAtributeColor, {
    name: "Attribute Background Hover Color",
    hint: "Attribute Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcAtributeColor = gcAtributesColors[2];
  game.settings.register(MODULE_NAME, gcAtributeColor, {
    name: "Attribute Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcDodgeColor = gcDodgeColors[0];
  game.settings.register(MODULE_NAME, gcDodgeColor, {
    name: "Dodge Background Color",
    hint: "Dodge Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcDodgeColor = gcDodgeColors[1];
  game.settings.register(MODULE_NAME, gcDodgeColor, {
    name: "Dodge Background Hover Color",
    hint: "Dodge Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcDodgeColor = gcDodgeColors[2];
  game.settings.register(MODULE_NAME, gcDodgeColor, {
    name: "Dodge Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcDamageColor = gcDamageColors[0];
  game.settings.register(MODULE_NAME, gcDamageColor, {
    name: "Damage Background Color",
    hint: "Damage Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcDamageColor = gcDamageColors[1];
  game.settings.register(MODULE_NAME, gcDamageColor, {
    name: "Damage Background Hover Color",
    hint: "Damage Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcDamageColor = gcDamageColors[2];
  game.settings.register(MODULE_NAME, gcDamageColor, {
    name: "Damage Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcBlockColor = gcBlockColors[0];
  game.settings.register(MODULE_NAME, gcBlockColor, {
    name: "Block Background Color",
    hint: "Block Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcBlockColor = gcBlockColors[1];
  game.settings.register(MODULE_NAME, gcBlockColor, {
    name: "Block Background Hover Color",
    hint: "Block Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcBlockColor = gcBlockColors[2];
  game.settings.register(MODULE_NAME, gcBlockColor, {
    name: "Block Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcParryColor = gcParryColors[0];
  game.settings.register(MODULE_NAME, gcParryColor, {
    name: "Parry Background Color",
    hint: "Parry Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcParryColor = gcParryColors[1];
  game.settings.register(MODULE_NAME, gcParryColor, {
    name: "Parry Background Hover Color",
    hint: "Parry Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcParryColor = gcParryColors[2];
  game.settings.register(MODULE_NAME, gcParryColor, {
    name: "Parry Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcWeaponsColor = gcWeaponsColors[0];
  game.settings.register(MODULE_NAME, gcWeaponsColor, {
    name: "Weapons Roll Background Color",
    hint: "Weapons Roll Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcWeaponsColor = gcWeaponsColors[1];
  game.settings.register(MODULE_NAME, gcWeaponsColor, {
    name: "Weapons Rolls Background Hover Color",
    hint: "Weapons Rolls Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcWeaponsColor = gcWeaponsColors[2];
  game.settings.register(MODULE_NAME, gcWeaponsColor, {
    name: "Weapons Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcSkillsColor = gcSkillsColors[0];
  game.settings.register(MODULE_NAME, gcSkillsColor, {
    name: "Skills Background Color",
    hint: "Skills Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcSkillsColor = gcSkillsColors[1];
  game.settings.register(MODULE_NAME, gcSkillsColor, {
    name: "Skills Background Hover Color",
    hint: "Skills Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcSkillsColor = gcSkillsColors[2];
  game.settings.register(MODULE_NAME, gcSkillsColor, {
    name: "Skills Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcSpellsColor = gcSpellsColors[0];
  game.settings.register(MODULE_NAME, gcSpellsColor, {
    name: "Spells Background Color",
    hint: "Spells Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcSpellsColor = gcSpellsColors[1];
  game.settings.register(MODULE_NAME, gcSpellsColor, {
    name: "Spells Background Hover Color",
    hint: "Spells Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcSpellsColor = gcSpellsColors[2];
  game.settings.register(MODULE_NAME, gcSpellsColor, {
    name: "Spells Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcGurpsLinksColor = gcGurpsLinksColors[0];
  game.settings.register(MODULE_NAME, gcGurpsLinksColor, {
    name: "Ads/Disads Rollable Background Color",
    hint: "Ads/Disads Rollable Background HEX Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  gcGurpsLinksColor = gcGurpsLinksColors[1];
  game.settings.register(MODULE_NAME, gcGurpsLinksColor, {
    name: "Ads/Disads Rollable Background Hover Color",
    hint: "Ads/Disads Rollable Background Hover HEX Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  gcGurpsLinksColor = gcGurpsLinksColors[2];
  game.settings.register(MODULE_NAME, gcGurpsLinksColor, {
    name: "Ads/Disads Rollable Black/White Text Color",
    hint: "Black Text Color When Checked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
};
