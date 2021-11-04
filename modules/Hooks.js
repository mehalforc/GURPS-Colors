import { warn, error, debug, log } from "../main.js";
import { GURPScolors } from "./GURPScolors.js";
export let readyHooks = async () => {
  warn("Ready Hooks processing...");
  Hooks.on("ready", function () {});
};

export function addColorWheel() {
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

  var gcAttributesColor =
    '<div class="GC-attributes-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-attributes-rollable"]');
  $boxInput.before(gcAttributesColor);

  $(".GC-attributes-rollable #colorPicker").tinycolorpicker();

  $(".GC-attributes-rollable .colorInner").on("click", function () {
    $(".GC-attributes-rollable .color").css("z-index", newColorZindex);
    $(".GC-attributes-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-attributes-rollable"]').val(
      $(".GC-attributes-rollable .colorInput").val()
    );
  });

  $(".GC-attributes-rollable canvas").on("click", function () {
    $(".GC-attributes-rollable .color").css("z-index", oldColorZindex);
    $(".GC-attributes-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-attributes-rollable"]').val(
      $(".GC-attributes-rollable .colorInput").val()
    );
  });

  $(".GC-attributes-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-attributes-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-attributes-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcAttributesColor =
    '<div class="GC-attributes-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-attributes-rollable-hover"]');
  $boxInput.before(gcAttributesColor);

  $(".GC-attributes-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-attributes-rollable-hover .color").on("click", function () {
    $(".GC-attributes-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-attributes-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-attributes-rollable-hover"]').val(
      $(".GC-attributes-rollable .colorInput").val()
    );
  });

  $(".GC-attributes-rollable-hover canvas").on("click", function () {
    $(".GC-attributes-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-attributes-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-attributes-rollable-hover"]').val(
      $(".GC-attributes-rollable-hover .colorInput").val()
    );
  });

  $(".GC-attributes-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-attributes-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-attributes-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcDodgeColor =
    '<div class="GC-dodge-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-dodge-rollable"]');
  $boxInput.before(gcDodgeColor);

  $(".GC-dodge-rollable #colorPicker").tinycolorpicker();

  $(".GC-dodge-rollable .colorInner").on("click", function () {
    $(".GC-dodge-rollable .color").css("z-index", newColorZindex);
    $(".GC-dodge-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-dodge-rollable"]').val(
      $(".GC-dodge-rollable .colorInput").val()
    );
  });

  $(".GC-dodge-rollable canvas").on("click", function () {
    $(".GC-dodge-rollable .color").css("z-index", oldColorZindex);
    $(".GC-dodge-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-dodge-rollable"]').val(
      $(".GC-dodge-rollable .colorInput").val()
    );
  });

  $(".GC-dodge-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-dodge-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-dodge-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcDodgeColor =
    '<div class="GC-dodge-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-dodge-rollable-hover"]');
  $boxInput.before(gcDodgeColor);

  $(".GC-dodge-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-dodge-rollable-hover .color").on("click", function () {
    $(".GC-dodge-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-dodge-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-dodge-rollable-hover"]').val(
      $(".GC-dodge-rollable .colorInput").val()
    );
  });

  $(".GC-dodge-rollable-hover canvas").on("click", function () {
    $(".GC-dodge-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-dodge-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-dodge-rollable-hover"]').val(
      $(".GC-dodge-rollable-hover .colorInput").val()
    );
  });

  $(".GC-dodge-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-dodge-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-dodge-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcDamageColor =
    '<div class="GC-damage-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-damage-rollable"]');
  $boxInput.before(gcDamageColor);

  $(".GC-damage-rollable #colorPicker").tinycolorpicker();

  $(".GC-damage-rollable .colorInner").on("click", function () {
    $(".GC-damage-rollable .color").css("z-index", newColorZindex);
    $(".GC-damage-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-damage-rollable"]').val(
      $(".GC-damage-rollable .colorInput").val()
    );
  });

  $(".GC-damage-rollable canvas").on("click", function () {
    $(".GC-damage-rollable .color").css("z-index", oldColorZindex);
    $(".GC-damage-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-damage-rollable"]').val(
      $(".GC-damage-rollable .colorInput").val()
    );
  });

  $(".GC-damage-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-damage-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-damage-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcDamageColor =
    '<div class="GC-damage-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-damage-rollable-hover"]');
  $boxInput.before(gcDamageColor);

  $(".GC-damage-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-damage-rollable-hover .color").on("click", function () {
    $(".GC-damage-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-damage-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-damage-rollable-hover"]').val(
      $(".GC-damage-rollable .colorInput").val()
    );
  });

  $(".GC-damage-rollable-hover canvas").on("click", function () {
    $(".GC-damage-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-damage-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-damage-rollable-hover"]').val(
      $(".GC-damage-rollable-hover .colorInput").val()
    );
  });

  $(".GC-damage-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-damage-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-damage-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcBlockColor =
    '<div class="GC-block-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-block-rollable"]');
  $boxInput.before(gcBlockColor);

  $(".GC-block-rollable #colorPicker").tinycolorpicker();

  $(".GC-block-rollable .colorInner").on("click", function () {
    $(".GC-block-rollable .color").css("z-index", newColorZindex);
    $(".GC-block-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-block-rollable"]').val(
      $(".GC-block-rollable .colorInput").val()
    );
  });

  $(".GC-block-rollable canvas").on("click", function () {
    $(".GC-block-rollable .color").css("z-index", oldColorZindex);
    $(".GC-block-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-block-rollable"]').val(
      $(".GC-block-rollable .colorInput").val()
    );
  });

  $(".GC-block-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-block-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-block-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcBlockColor =
    '<div class="GC-block-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-block-rollable-hover"]');
  $boxInput.before(gcBlockColor);

  $(".GC-block-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-block-rollable-hover .color").on("click", function () {
    $(".GC-block-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-block-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-block-rollable-hover"]').val(
      $(".GC-block-rollable .colorInput").val()
    );
  });

  $(".GC-block-rollable-hover canvas").on("click", function () {
    $(".GC-block-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-block-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-block-rollable-hover"]').val(
      $(".GC-block-rollable-hover .colorInput").val()
    );
  });

  $(".GC-block-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-block-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-block-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcParryColor =
    '<div class="GC-parry-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-parry-rollable"]');
  $boxInput.before(gcParryColor);

  $(".GC-parry-rollable #colorPicker").tinycolorpicker();

  $(".GC-parry-rollable .colorInner").on("click", function () {
    $(".GC-parry-rollable .color").css("z-index", newColorZindex);
    $(".GC-parry-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-parry-rollable"]').val(
      $(".GC-parry-rollable .colorInput").val()
    );
  });

  $(".GC-parry-rollable canvas").on("click", function () {
    $(".GC-parry-rollable .color").css("z-index", oldColorZindex);
    $(".GC-parry-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-parry-rollable"]').val(
      $(".GC-parry-rollable .colorInput").val()
    );
  });

  $(".GC-parry-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-parry-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-parry-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcParryColor =
    '<div class="GC-parry-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-parry-rollable-hover"]');
  $boxInput.before(gcParryColor);

  $(".GC-parry-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-parry-rollable-hover .color").on("click", function () {
    $(".GC-parry-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-parry-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-parry-rollable-hover"]').val(
      $(".GC-parry-rollable .colorInput").val()
    );
  });

  $(".GC-parry-rollable-hover canvas").on("click", function () {
    $(".GC-parry-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-parry-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-parry-rollable-hover"]').val(
      $(".GC-parry-rollable-hover .colorInput").val()
    );
  });

  $(".GC-parry-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-parry-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-parry-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcWeaponsColor =
    '<div class="GC-weapons-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-weapons-rollable"]');
  $boxInput.before(gcWeaponsColor);

  $(".GC-weapons-rollable #colorPicker").tinycolorpicker();

  $(".GC-weapons-rollable .colorInner").on("click", function () {
    $(".GC-weapons-rollable .color").css("z-index", newColorZindex);
    $(".GC-weapons-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-weapons-rollable"]').val(
      $(".GC-weapons-rollable .colorInput").val()
    );
  });

  $(".GC-weapons-rollable canvas").on("click", function () {
    $(".GC-weapons-rollable .color").css("z-index", oldColorZindex);
    $(".GC-weapons-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-weapons-rollable"]').val(
      $(".GC-weapons-rollable .colorInput").val()
    );
  });

  $(".GC-weapons-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-weapons-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-weapons-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcWeaponsColor =
    '<div class="GC-weapons-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-weapons-rollable-hover"]');
  $boxInput.before(gcWeaponsColor);

  $(".GC-weapons-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-weapons-rollable-hover .color").on("click", function () {
    $(".GC-weapons-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-weapons-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-weapons-rollable-hover"]').val(
      $(".GC-weapons-rollable .colorInput").val()
    );
  });

  $(".GC-weapons-rollable-hover canvas").on("click", function () {
    $(".GC-weapons-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-weapons-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-weapons-rollable-hover"]').val(
      $(".GC-weapons-rollable-hover .colorInput").val()
    );
  });

  $(".GC-weapons-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-weapons-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-weapons-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcSkillsColor =
    '<div class="GC-skills-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-skills-rollable"]');
  $boxInput.before(gcSkillsColor);

  $(".GC-skills-rollable #colorPicker").tinycolorpicker();

  $(".GC-skills-rollable .colorInner").on("click", function () {
    $(".GC-skills-rollable .color").css("z-index", newColorZindex);
    $(".GC-skills-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-skills-rollable"]').val(
      $(".GC-skills-rollable .colorInput").val()
    );
  });

  $(".GC-skills-rollable canvas").on("click", function () {
    $(".GC-skills-rollable .color").css("z-index", oldColorZindex);
    $(".GC-skills-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-skills-rollable"]').val(
      $(".GC-skills-rollable .colorInput").val()
    );
  });

  $(".GC-skills-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-skills-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-skills-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcSkillsColor =
    '<div class="GC-skills-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-skills-rollable-hover"]');
  $boxInput.before(gcSkillsColor);

  $(".GC-skills-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-skills-rollable-hover .color").on("click", function () {
    $(".GC-skills-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-skills-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-skills-rollable-hover"]').val(
      $(".GC-skills-rollable .colorInput").val()
    );
  });

  $(".GC-skills-rollable-hover canvas").on("click", function () {
    $(".GC-skills-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-skills-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-skills-rollable-hover"]').val(
      $(".GC-skills-rollable-hover .colorInput").val()
    );
  });

  $(".GC-skills-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-skills-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-skills-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcSpellsColor =
    '<div class="GC-spells-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-spells-rollable"]');
  $boxInput.before(gcSpellsColor);

  $(".GC-spells-rollable #colorPicker").tinycolorpicker();

  $(".GC-spells-rollable .colorInner").on("click", function () {
    $(".GC-spells-rollable .color").css("z-index", newColorZindex);
    $(".GC-spells-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-spells-rollable"]').val(
      $(".GC-spells-rollable .colorInput").val()
    );
  });

  $(".GC-spells-rollable canvas").on("click", function () {
    $(".GC-spells-rollable .color").css("z-index", oldColorZindex);
    $(".GC-spells-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-spells-rollable"]').val(
      $(".GC-spells-rollable .colorInput").val()
    );
  });

  $(".GC-spells-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-spells-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-spells-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcSpellsColor =
    '<div class="GC-spells-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-spells-rollable-hover"]');
  $boxInput.before(gcSpellsColor);

  $(".GC-spells-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-spells-rollable-hover .color").on("click", function () {
    $(".GC-spells-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-spells-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-spells-rollable-hover"]').val(
      $(".GC-spells-rollable .colorInput").val()
    );
  });

  $(".GC-spells-rollable-hover canvas").on("click", function () {
    $(".GC-spells-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-spells-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-spells-rollable-hover"]').val(
      $(".GC-spells-rollable-hover .colorInput").val()
    );
  });

  $(".GC-spells-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-spells-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-spells-rollable-hover"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcGurpsLinkColor =
    '<div class="GC-gurpslink-rollable">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-gurpslink-rollable"]');
  $boxInput.before(gcGurpsLinkColor);

  $(".GC-gurpslink-rollable #colorPicker").tinycolorpicker();

  $(".GC-gurpslink-rollable .colorInner").on("click", function () {
    $(".GC-gurpslink-rollable .color").css("z-index", newColorZindex);
    $(".GC-gurpslink-rollable .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-gurpslink-rollable"]').val(
      $(".GC-gurpslink-rollable .colorInput").val()
    );
  });

  $(".GC-gurpslink-rollable canvas").on("click", function () {
    $(".GC-gurpslink-rollable .color").css("z-index", oldColorZindex);
    $(".GC-gurpslink-rollable .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-gurpslink-rollable"]').val(
      $(".GC-gurpslink-rollable .colorInput").val()
    );
  });

  $(".GC-gurpslink-rollable .color").css(
    "background-color",
    $('input[name="GURPS-colors.GC-gurpslink-rollable"]').val()
  );
  $('input[name="GURPS-colors.GC-gurpslink-rollable"]').hide();

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  var gcGurpsLinkColor =
    '<div class="GC-gurpslink-rollable-hover">' + colorPickerData + "</div>";

  var $boxInput = $('input[name="GURPS-colors.GC-gurpslink-rollable-hover"]');
  $boxInput.before(gcGurpsLinkColor);

  $(".GC-gurpslink-rollable-hover #colorPicker").tinycolorpicker();

  $(".GC-gurpslink-rollable-hover .color").on("click", function () {
    $(".GC-gurpslink-rollable-hover .color").css("z-index", newColorZindex);
    $(".GC-gurpslink-rollable-hover .track").css("z-index", newTrackZindex);

    $('input[name="GURPS-colors.GC-gurpslink-rollable-hover"]').val(
      $(".GC-gurpslink-rollable .colorInput").val()
    );
  });

  $(".GC-gurpslink-rollable-hover canvas").on("click", function () {
    $(".GC-gurpslink-rollable-hover .color").css("z-index", oldColorZindex);
    $(".GC-gurpslink-rollable-hover .track").css("z-index", oldTrackZindex);

    $('input[name="GURPS-colors.GC-gurpslink-rollable-hover"]').val(
      $(".GC-gurpslink-rollable-hover .colorInput").val()
    );
  });

  $(".GC-gurpslink-rollable-hover .colorInner").css(
    "background-color",
    $('input[name="GURPS-colors.GC-gurpslink-rollable-hover"]').val()
  );
  $('input[name="GURPS-colors.GC-gurpslink-rollable-hover"]').hide();

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
  $("#attributes")
    .on("mouseenter", ".rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorAttributesRollableHover +
          " !important; color:" +
          textAttributesColor
      );
    })
    .on("mouseleave", ".rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorAttributesRollable +
          " !important; color:" +
          textAttributesColor
      );
    });
  $("#attributes .rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorAttributesRollable +
      " !important; color:" +
      textAttributesColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorDodgeRollableText) {
    textDodgeColor = "#000000 !important";
  } else {
    textDodgeColor = "#ffffff !important";
  }
  $("#encumbrance")
    .on("mouseenter", ".rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorDodgeRollableHover +
          " !important; color:" +
          textDodgeColor
      );
    })
    .on("mouseleave", ".rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorDodgeRollable +
          " !important; color:" +
          textDodgeColor
      );
    });
  $(".dodge.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorDodgeRollable +
      " !important; color:" +
      textDodgeColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorDamageRollableText) {
    textDamageColor = "#000000 !important";
  } else {
    textDamageColor = "#ffffff !important";
  }
  $("#melee, #ranged")
    .on("mouseenter", ".damage.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorDamageRollableHover +
          " !important; color:" +
          textDamageColor
      );
    })
    .on("mouseleave", ".damage.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorDamageRollable +
          " !important; color:" +
          textDamageColor
      );
    });
  $(".damage.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorDamageRollable +
      " !important; color:" +
      textDamageColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorBlockRollableText) {
    textBlockColor = "#000000 !important";
  } else {
    textBlockColor = "#ffffff !important";
  }
  $("#melee, #ranged")
    .on("mouseenter", ".block.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorBlockRollableHover +
          " !important; color:" +
          textBlockColor
      );
    })
    .on("mouseleave", ".block.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorBlockRollable +
          " !important; color:" +
          textBlockColor
      );
    });
  $(".block.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorBlockRollable +
      " !important; color:" +
      textBlockColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorParryRollableText) {
    textParryColor = "#000000 !important";
  } else {
    textParryColor = "#ffffff !important";
  }
  $("#melee, #ranged")
    .on("mouseenter", ".parry.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorParryRollableHover +
          " !important; color:" +
          textParryColor
      );
    })
    .on("mouseleave", ".parry.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorParryRollable +
          " !important; color:" +
          textParryColor
      );
    });
  $(".parry.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorParryRollable +
      " !important; color:" +
      textParryColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorWeaponsRollableText) {
    textWeaponsColor = "#000000 !important";
  } else {
    textWeaponsColor = "#ffffff !important";
  }
  $("#melee, #ranged")
    .on("mouseenter", ".usage.rollable, .level.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorWeaponsRollableHover +
          " !important; color:" +
          textWeaponsColor
      );
    })
    .on("mouseleave", ".usage.rollable, .level.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorWeaponsRollable +
          " !important; color:" +
          textWeaponsColor
      );
    });
  $(
    "#melee .usage.rollable, #melee .level.rollable, #ranged .usage.rollable, #ranged .level.rollable"
  ).attr(
    "style",
    "background-color: " +
      GURPScolors.colorWeaponsRollable +
      " !important; color:" +
      textWeaponsColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorSkillsRollableText) {
    textSkillsColor = "#000000 !important";
  } else {
    textSkillsColor = "#ffffff !important";
  }
  $("#skills")
    .on("mouseenter", ".parry.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSkillsRollableHover +
          " !important; color:" +
          textSkillsColor
      );
    })
    .on("mouseleave", ".parry.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSkillsRollable +
          " !important; color:" +
          textSkillsColor
      );
    });
  $("#skills .sl.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorSkillsRollable +
      " !important; color:" +
      textSkillsColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorSkillsRollableText) {
    textSkillsColor = "#000000 !important";
  } else {
    textSkillsColor = "#ffffff !important";
  }
  $("#skills")
    .on("mouseenter", ".sl.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSkillsRollableHover +
          " !important; color:" +
          textSkillsColor
      );
    })
    .on("mouseleave", ".sl.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSkillsRollable +
          " !important; color:" +
          textSkillsColor
      );
    });
  $("#skills .sl.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorSkillsRollable +
      " !important; color:" +
      textSkillsColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorSpellsRollableText) {
    textSpellsColor = "#000000 !important";
  } else {
    textSpellsColor = "#ffffff !important";
  }
  $("#spells")
    .on("mouseenter", ".sl.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSpellsRollableHover +
          " !important; color:" +
          textSpellsColor
      );
    })
    .on("mouseleave", ".sl.rollable", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorSpellsRollable +
          " !important; color:" +
          textSpellsColor
      );
    });
  $("#spells .sl.rollable").attr(
    "style",
    "background-color: " +
      GURPScolors.colorSpellsRollable +
      " !important; color:" +
      textSpellsColor
  );

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (GURPScolors.colorGurpsLinksRollableText) {
    textGurpsLinksColor = "#000000 !important";
  } else {
    textGurpsLinksColor = "#ffffff !important";
  }
  $("#advantages")
    .on("mouseenter", ".gurpslink", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorGurpsLinksRollableHover +
          " !important; color:" +
          textGurpsLinksColor
      );
    })
    .on("mouseleave", ".gurpslink", function () {
      $(this).attr(
        "style",
        "background-color: " +
          GURPScolors.colorGurpsLinksRollable +
          " !important; color:" +
          textGurpsLinksColor
      );
    });
  $("#advantages .gurpslink").attr(
    "style",
    "background-color: " +
      GURPScolors.colorGurpsLinksRollable +
      " !important; color:" +
      textGurpsLinksColor
  );

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
