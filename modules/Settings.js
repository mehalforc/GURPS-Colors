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

export const gcColorAreas = ["Attributes", "Dodge", "Damage", "Block", "Parry", "Weapons Roll", "Skills", "Spells", "Ads/Disads Rollable" ];

export const gcAtributesColors = ["GC-attributes-rollable", "GC-attributes-rollable-hover", "GC-attributes-rollable-text"];
export const gcDodgeColors = ["GC-dodge-rollable", "GC-dodge-rollable-hover", "GC-dodge-rollable-text"];
export const gcDamageColors = ["GC-damage-rollable", "GC-damage-rollable-hover", "GC-damage-rollable-text"];
export const gcBlockColors = ["GC-block-rollable", "GC-block-rollable-hover", "GC-block-rollable-text"];
export const gcParryColors = ["GC-parry-rollable", "GC-parry-rollable-hover", "GC-parry-rollable-text"];
export const gcWeaponsColors = ["GC-weapons-rollable", "GC-weapons-rollable-hover", "GC-weapons-rollable-text"];
export const gcSkillsColors = ["GC-skills-rollable", "GC-skills-rollable-hover", "GC-skills-rollable-text"];
export const gcSpellsColors = ["GC-spells-rollable", "GC-spells-rollable-hover", "GC-spells-rollable-text"];
export const gcGurpsLinksColors = ["GC-gurpslink-rollable", "GC-gurpslink-rollable-hover", "GC-gurpslink-rollable-text"];

export const registerSettings = function () {
  warn("Register module settings...");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcAtributesColors[0], {
    name: gcColorAreas[0] + " Color:",
    hint: gcColorAreas[0] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcAtributesColors[1], {
    name: gcColorAreas[0] + " Hover Color:",
    hint: gcColorAreas[0] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcAtributesColors[2], {
    name: gcColorAreas[0] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcDodgeColors[0], {
    name: gcColorAreas[1] + " Color:",
    hint: gcColorAreas[1] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcDodgeColors[1], {
    name: gcColorAreas[1] + " Hover Color:",
    hint: gcColorAreas[1] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcDodgeColors[2], {
    name: gcColorAreas[1] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcDamageColors[0], {
    name: gcColorAreas[2] + " Color:",
    hint: gcColorAreas[2] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcDamageColors[1], {
    name: gcColorAreas[2] + " Hover Color:",
    hint: gcColorAreas[2] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcDamageColors[2], {
    name: gcColorAreas[2] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcBlockColors[0], {
    name: gcColorAreas[3] + " Color:",
    hint: gcColorAreas[3] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcBlockColors[1], {
    name: gcColorAreas[3] + " Hover Color:",
    hint: gcColorAreas[3] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcBlockColors[2], {
    name: gcColorAreas[3] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcParryColors[0], {
    name: gcColorAreas[4] + " Color:",
    hint: gcColorAreas[4] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcParryColors[1], {
    name: gcColorAreas[4] + " Hover Color:",
    hint: gcColorAreas[4] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcParryColors[2], {
    name: gcColorAreas[4] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcWeaponsColors[0], {
    name: gcColorAreas[5] + " Color:",
    hint: gcColorAreas[5] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcWeaponsColors[1], {
    name: gcColorAreas[5] + " Hover Color:",
    hint: gcColorAreas[5] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcWeaponsColors[2], {
    name: gcColorAreas[5] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcSkillsColors[0], {
    name: gcColorAreas[6] + " Color:",
    hint: gcColorAreas[6] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcSkillsColors[1], {
    name: gcColorAreas[6] + " Hover Color:",
    hint: gcColorAreas[6] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcSkillsColors[2], {
    name: gcColorAreas[6] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcSpellsColors[0], {
    name: gcColorAreas[7] + " Color:",
    hint: gcColorAreas[7] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcSpellsColors[1], {
    name: gcColorAreas[7] + " Hover Color:",
    hint: gcColorAreas[7] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcSpellsColors[2], {
    name: gcColorAreas[7] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  game.settings.register(MODULE_NAME, gcGurpsLinksColors[0], {
    name: gcColorAreas[8] + " Color:",
    hint: gcColorAreas[8] + " Background Color.",
    scope: "client",
    config: true,
    default: "#ffffbe",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcGurpsLinksColors[1], {
    name: gcColorAreas[8] + " Hover Color:",
    hint: gcColorAreas[8] + " Background Hover Color.",
    scope: "client",
    config: true,
    default: "#ffff80",
    type: String,
  });
  game.settings.register(MODULE_NAME, gcGurpsLinksColors[2], {
    name: gcColorAreas[8] + " Text Color:",
    hint: "Black Text Color When Checked / White Text Color When Unchecked.",
    scope: "client",
    config: true,
    default: true,
    type: Boolean,
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
