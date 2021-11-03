import { warn, error, debug, log } from '../main.js';
import { GURPScolors } from './GURPScolors.js';
export let readyHooks = async () => {
  warn('Ready Hooks processing...');
  Hooks.on('ready', function() {});
};

export function colorGurpsActorSheet() {
  GURPScolors.updateSettings();
  let textAttributescolor = ''
  let textDodgecolor = ''

  if (GURPScolors.colorAttributesRollableText) {
    textAttributescolor = '#000000 !important';
  }else {
    textAttributescolor = '#ffffff !important';
  }
  $('#attributes').on('mouseenter', '.rollable', function() {
    $(this).attr('style', 'background-color: ' + GURPScolors.colorAttributesRollableHover + ' !important; color:' + textAttributescolor);
  }).on('mouseleave', '.rollable', function() {
    $(this).attr('style', 'background-color: ' + GURPScolors.colorAttributesRollable + ' !important; color:' + textAttributescolor);
  });
  $('#attributes .rollable').attr('style', 'background-color: ' + GURPScolors.colorAttributesRollable + ' !important; color:' + textAttributescolor);

  if (GURPScolors.colorDodgeRollableText) {
    textDodgecolor = '#000000 !important';
  }else {
    textDodgecolor = '#ffffff !important';
  }
  $('#encumbrance').on('mouseenter', '.rollable', function() {
    $(this).attr('style', 'background-color: ' + GURPScolors.colorDodgeRollableHover + ' !important; color:' + textDodgecolor);
  }).on('mouseleave', '.rollable', function() {
    $(this).attr('style', 'background-color: ' + GURPScolors.colorDodgeRollable + ' !important; color:' + textDodgecolor);
  });
  $('.dodge.rollable').attr('style', 'background-color: ' + GURPScolors.colorDodgeRollable + ' !important; color:' + textDodgecolor);
}

export const setupHooks = async () => {
  warn('Setup Hooks processing...');
  GURPScolors.init();

  Hooks.on('renderActorSheet', (...args) => {
    colorGurpsActorSheet();
  });
};
export const initHooks = async () => {
  warn('Init Hooks processing...');
  Hooks.on('init', function() {});
};
