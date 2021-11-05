import { warn, error, debug, log } from "../main.js";
import { GURPScolors } from "./GURPScolors.js";
import { MODULE_NAME } from "./Settings.js";
import { gcAtributesColors, gcDodgeColors, gcDamageColors, gcBlockColors, gcParryColors, gcWeaponsColors, gcSkillsColors, gcSpellsColors, gcGurpsLinksColors } from "./Settings.js";

export let readyHooks = async () => {
  warn("Ready Hooks processing...");
  Hooks.on("ready", function () {});
};

export function addColorWheel() {
  let gcColorsArray = [];
  let Zindex = 99999;
  let oldTrackZindex = 10;
  let oldColorZindex = 11;
  let newTrackZindex = oldTrackZindex + Zindex;
  let newColorZindex = oldColorZindex + Zindex;

  let colorPickerData = `
  <div id="colorPicker">
  <a class="color"><div class="colorInner"></div></a>
  <div class="track"></div>
  <ul class="dropdown"><li></li></ul>
  <input type="hidden" class="colorInput"/>
  </div>
`;
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  gcColorsArray.push(gcAtributesColors[0]);
  gcColorsArray.push(gcAtributesColors[1]);
  gcColorsArray.push(gcDodgeColors[0]);
  gcColorsArray.push(gcDodgeColors[1]);
  gcColorsArray.push(gcDamageColors[0]);
  gcColorsArray.push(gcDamageColors[1]);
  gcColorsArray.push(gcBlockColors[0]);
  gcColorsArray.push(gcBlockColors[1]);
  gcColorsArray.push(gcParryColors[0]);
  gcColorsArray.push(gcParryColors[1]);
  gcColorsArray.push(gcWeaponsColors[0]);
  gcColorsArray.push(gcWeaponsColors[1]);
  gcColorsArray.push(gcSkillsColors[0]);
  gcColorsArray.push(gcSkillsColors[1]);
  gcColorsArray.push(gcSpellsColors[0]);
  gcColorsArray.push(gcSpellsColors[1]);
  gcColorsArray.push(gcGurpsLinksColors[0]);
  gcColorsArray.push(gcGurpsLinksColors[1]);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  gcColorsArray.forEach(function(gcColors) {
    // do something with `gcColors`
    $(`input[name="${MODULE_NAME}.${gcColors}"]`).before(`<div class="${gcColors}">` + colorPickerData + "</div>");

    $(`.${gcColors} #colorPicker`).tinycolorpicker();
  
    $(`.${gcColors} .colorInner`).on("click", function () {
      $('#colorPicker .track').hide();
      $(`.${gcColors} #colorPicker .track`).show();
      $("#colorPicker .color").css("z-index", oldColorZindex);
      $("#colorPicker .track").css("z-index", oldTrackZindex);
      $(`.${gcColors} .color`).css("z-index", newColorZindex);
      $(`.${gcColors} .track`).css("z-index", newTrackZindex);
    });
  
    $(`.${gcColors} canvas`).on("click", function () {
      $(`input[name="${MODULE_NAME}.${gcColors}"]`).val($(`.${gcColors} .colorInput`).val());
    });
  
    $(`.${gcColors} .color`).css("background-color", $(`input[name="${MODULE_NAME}.${gcColors}"]`).val());
    $(`input[name="${MODULE_NAME}.${gcColors}"]`).hide();
  });

  $('button[name="reset"]').on("click", function () {
    if ($('#client-settings a').eq(3).hasClass('active')) {
      gcColorsArray.forEach(function(gcColors) {
        $(`.${gcColors} .colorInner`).css("background-color", $(`input[name="${MODULE_NAME}.${gcColors}"]`).val());
      });
    }
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

export function colorGurpsActorSheet() {
  GURPScolors.updateSettings();
  let textAttributesColor = "";
  let textDodgeColor = "";
  let textDamageColor = "";
  let textBlockColor = "";
  let textParryColor = "";
  let textWeaponsColor = "";
  let textSkillsColor = "";
  let textSpellsColor = "";
  let textGurpsLinksColor = "";

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorAttributesRollableText) {
    textAttributesColor = "#000000 !important";
  } else {
    textAttributesColor = "#ffffff !important";
  }
  $("#attributes").on("mouseenter", ".rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorAttributesRollableHover + " !important; color:" + textAttributesColor);
  }).on("mouseleave", ".rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorAttributesRollable + " !important; color:" + textAttributesColor);
  });
  $("#attributes .rollable").attr("style", "background-color: " + GURPScolors.colorAttributesRollable + " !important; color:" + textAttributesColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorDodgeRollableText) {
    textDodgeColor = "#000000 !important";
  } else {
    textDodgeColor = "#ffffff !important";
  }
  $("#encumbrance").on("mouseenter", ".rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorDodgeRollableHover + " !important; color:" + textDodgeColor);
  }).on("mouseleave", ".rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorDodgeRollable + " !important; color:" + textDodgeColor);
  });
  $(".dodge.rollable").attr("style", "background-color: " + GURPScolors.colorDodgeRollable + " !important; color:" + textDodgeColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorDamageRollableText) {
    textDamageColor = "#000000 !important";
  } else {
    textDamageColor = "#ffffff !important";
  }
  $("#melee, #ranged").on("mouseenter", ".damage.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorDamageRollableHover + " !important; color:" + textDamageColor);
  }).on("mouseleave", ".damage.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorDamageRollable + " !important; color:" + textDamageColor);
  });
  $(".damage.rollable").attr("style", "background-color: " + GURPScolors.colorDamageRollable + " !important; color:" + textDamageColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorBlockRollableText) {
    textBlockColor = "#000000 !important";
  } else {
    textBlockColor = "#ffffff !important";
  }
  $("#melee, #ranged").on("mouseenter", ".block.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorBlockRollableHover + " !important; color:" + textBlockColor);
  }).on("mouseleave", ".block.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorBlockRollable + " !important; color:" + textBlockColor);
  });
  $(".block.rollable").attr("style", "background-color: " + GURPScolors.colorBlockRollable + " !important; color:" + textBlockColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorParryRollableText) {
    textParryColor = "#000000 !important";
  } else {
    textParryColor = "#ffffff !important";
  }
  $("#melee, #ranged").on("mouseenter", ".parry.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorParryRollableHover + " !important; color:" + textParryColor);
  }).on("mouseleave", ".parry.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorParryRollable + " !important; color:" + textParryColor);
  });
  $(".parry.rollable").attr("style", "background-color: " + GURPScolors.colorParryRollable + " !important; color:" + textParryColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorWeaponsRollableText) {
    textWeaponsColor = "#000000 !important";
  } else {
    textWeaponsColor = "#ffffff !important";
  }
  $("#melee, #ranged").on("mouseenter", ".usage.rollable, .level.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorWeaponsRollableHover + " !important; color:" + textWeaponsColor);
  }).on("mouseleave", ".usage.rollable, .level.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorWeaponsRollable + " !important; color:" + textWeaponsColor);
  });
  $("#melee .usage.rollable, #melee .level.rollable, #ranged .usage.rollable, #ranged .level.rollable").attr("style", "background-color: " + GURPScolors.colorWeaponsRollable + " !important; color:" + textWeaponsColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorSkillsRollableText) {
    textSkillsColor = "#000000 !important";
  } else {
    textSkillsColor = "#ffffff !important";
  }
  $("#skills").on("mouseenter", ".parry.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSkillsRollableHover + " !important; color:" + textSkillsColor);
  }).on("mouseleave", ".parry.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSkillsRollable + " !important; color:" + textSkillsColor);
  });
  $("#skills .sl.rollable").attr("style", "background-color: " + GURPScolors.colorSkillsRollable + " !important; color:" + textSkillsColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorSkillsRollableText) {
    textSkillsColor = "#000000 !important";
  } else {
    textSkillsColor = "#ffffff !important";
  }
  $("#skills").on("mouseenter", ".sl.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSkillsRollableHover + " !important; color:" + textSkillsColor);
  }).on("mouseleave", ".sl.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSkillsRollable + " !important; color:" + textSkillsColor);
  });
  $("#skills .sl.rollable").attr("style", "background-color: " + GURPScolors.colorSkillsRollable + " !important; color:" + textSkillsColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorSpellsRollableText) {
    textSpellsColor = "#000000 !important";
  } else {
    textSpellsColor = "#ffffff !important";
  }
  $("#spells").on("mouseenter", ".sl.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSpellsRollableHover + " !important; color:" + textSpellsColor);
  }).on("mouseleave", ".sl.rollable", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorSpellsRollable + " !important; color:" + textSpellsColor);
  });
  $("#spells .sl.rollable").attr("style", "background-color: " + GURPScolors.colorSpellsRollable + " !important; color:" + textSpellsColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (GURPScolors.colorGurpsLinksRollableText) {
    textGurpsLinksColor = "#000000 !important";
  } else {
    textGurpsLinksColor = "#ffffff !important";
  }
  $("#advantages").on("mouseenter", ".gurpslink", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorGurpsLinksRollableHover + " !important; color:" + textGurpsLinksColor);
  }).on("mouseleave", ".gurpslink", function() {
    $(this).attr("style", "background-color: " + GURPScolors.colorGurpsLinksRollable + " !important; color:" + textGurpsLinksColor);
  });
  $("#advantages .gurpslink").attr("style", "background-color: " + GURPScolors.colorGurpsLinksRollable + " !important; color:" + textGurpsLinksColor);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

export const setupHooks = async () => {
  warn("Setup Hooks processing...");
  GURPScolors.init();

  Hooks.on("renderSettingsConfig", (...args) => {
    addColorWheel();
  });

  Hooks.on("renderActorSheet", (...args) => {
    colorGurpsActorSheet();
  });
};
export const initHooks = async () => {
  warn("Init Hooks processing...");
  Hooks.on("init", function () {});
};
