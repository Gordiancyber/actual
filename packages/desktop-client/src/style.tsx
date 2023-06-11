import type { CSSProperties } from 'glamor';

import * as Platform from 'loot-core/src/client/platform';

import tokens from './tokens';

export const debug = { borderWidth: 1, borderColor: 'red' };

const colorsDark = {
  primary: '#AB091E',
  primaryText: '#AB091E',
  primaryAccent: '#AB091E',
  primaryAccentText: '#AB091E',

  secondary: '#AB091E',
  secondaryText: '#AB091E',
  secondaryAccent: '#AB091E',
  secondaryAccentText: '#AB091E',

  error: '#AB091E',
  errorText: '#AB091E',
  errorAccent: '#AB091E',

  warning: '#AB091E',
  warningText: '#AB091E',
  warningAccent: '#AB091E',

  notice: '#AB091E',
  noticeText: '#AB091E',
  noticeAccent: '#AB091E',
  noticeAccentText: '#AB091E',

  background: '#AB091E',
};

const colorsLight = {};

const colorThemes = [
  { name: 'dark', colors: colorsDark, type: 'dark' },
  { name: 'dark', colors: colorsLight, type: 'dark' },
];

export const colorsn = colorThemes[0].colors;

// Only for use in contextual color definitions
const colorPallet = {
  orange900: '#331302',
  orange800: '#5f1a05',
  orange700: '#842106',
  orange600: '#a82c00',
  orange500: '#c84801',
  orange400: '#ed6704',
  orange300: '#ff8f0e',
  orange200: '#fcbd3a',
  orange150: '#fcd579',
  orange100: '#fcedb9',
  orange50: '#fef9da',
  red900: '#3e021a',
  red800: '#68052b',
  red700: '#890d37',
  red600: '#b3093c',
  red500: '#df1b41',
  red400: '#fc526a',
  red300: '#fe87a1',
  red200: '#ffb1cd',
  red150: '#ffccdf',
  red100: '#ffe7f2',
  red50: '#fff5fa',
  navy50: '#f5f7f9',
  navy100: '#e4effb',
  navy150: '#cadcf1',
  navy200: '#afcaeb',
  navy300: '#86afe1',
  navy400: '#6590d2',
  navy500: '#4871b8',
  navy600: '#375699',
  navy700: '#2a4378',
  navy800: '#1c305a',
  navy900: '#0e193c',
  gray900: '#1a1b25',
  gray800: '#30313d',
  gray700: '#414552',
  gray600: '#545969',
  gray500: '#687385',
  gray400: '#87909f',
  gray300: '#a3acba',
  gray200: '#c0c8d2',
  gray150: '#d5dbe1',
  gray100: '#ebeef1',
  gray50: '#f6f8fa',
  green900: '#02220d',
  green800: '#043b15',
  green700: '#0b5019',
  green600: '#006908',
  green500: '#228403',
  green400: '#3fa40d',
  green300: '#48c404',
  green200: '#76df47',
  green150: '#a6eb84',
  green100: '#d7f7c2',
  green50: '#ecfed7',
  purple900: '#14134e',
  purple800: '#302476',
  purple700: '#3f32a1',
  purple600: '#513dd9',
  purple500: '#625afa',
  purple400: '#8d7ffa',
  purple300: '#b49cfc',
  purple200: '#d1befe',
  purple150: '#dfd3fc',
  purple100: '#f2ebff',
  purple50: '#f9f7ff',
  white: '#fafafa',
  black: '#0a0a0a',
};

// Contextual colors, only pull from the pallet
export const colorsm = {
  pageBackground: colorPallet.black,
  pageText: colorPallet.gray100,
  cardBackground: colorPallet.gray900,
  cardBorder: colorPallet.purple300,
  cardShadow: colorPallet.gray700,
  tableBackground: colorPallet.gray900,
  tableBackgroundHover: colorPallet.gray800,
  tableText: colorPallet.gray100,
  tableTextSelected: colorPallet.gray100,
  tableTextHover: colorPallet.gray300,
  tableTextEditing: colorPallet.gray800,
  tableTextEditingBackground: colorPallet.purple300,
  tableTextInactive: colorPallet.gray400,
  tableHeaderText: colorPallet.gray100,
  tableHeaderBackground: colorPallet.gray700,
  tableBorder: colorPallet.gray600,
  tableBorderSelected: colorPallet.purple300,
  tableBorderHover: colorPallet.purple200,
  tableBorderSeparator: colorPallet.gray500,
  tableRowBackgroundHighlight: colorPallet.purple300,
  tableRowHeaderBackground: colorPallet.gray700,
  tableRowHeaderBackgroundText: colorPallet.gray100,
  sidebarBackground: colorPallet.navy900,
  sidebarItemBackground: colorPallet.navy900,
  sidebarItemBackgroundSelected: colorPallet.navy900,
  sidebarItemBackgroundHover: colorPallet.navy800,
  sidebarItemAccent: colorPallet.navy900,
  sidebarItemAccentSelected: colorPallet.purple300,
  sidebarItemAccentHover: colorPallet.navy800,
  sidebarItemText: colorPallet.gray50,
  sidebarItemTextSelected: colorPallet.gray50,
  sidebarItemTextHover: colorPallet.gray50,
  tooltipBackground: colorPallet.gray800,
  tooltipBorder: colorPallet.purple300,
  menuBackground: colorPallet.gray700,
  menuItemBackground: colorPallet.gray700,
  menuItemBackgroundHover: colorPallet.gray600,
  menuItemBackgroundSelected: colorPallet.purple300,
  menuItemText: colorPallet.gray200,
  menuItemTextHover: colorPallet.gray200,
  menuItemTextSelected: colorPallet.gray200,
  menuItemTextHeader: colorPallet.purple400,
  menuBorder: colorPallet.gray900,
  menuBorderHover: colorPallet.purple300,
  buttonPositiveText: colorPallet.gray800,
  buttonPositiveTextHover: colorPallet.gray800,
  buttonPositiveTextSelected: colorPallet.gray800,
  buttonPositiveBackground: colorPallet.purple300,
  buttonPositiveBorder: colorPallet.purple300,
  buttonNeutralText: colorPallet.gray100,
  buttonNeutralBackground: colorPallet.gray700,
  buttonNeutralBackgroundHover: colorPallet.gray900,
  buttonNeutralBorder: colorPallet.gray400,
  buttonNeutralBorderHover: colorPallet.gray900,
  buttonDisabledText: colorPallet.gray100,
  buttonDisabledBackground: colorPallet.gray900,
  buttonDisabledBorder: colorPallet.gray400,
  buttonShadow: colorPallet.gray700,
  noticeBackground: colorPallet.gray900,
  noticeText: colorPallet.green400,
  noticeAccent: colorPallet.gray700,
  warningBackground: colorPallet.orange400,
  warningText: colorPallet.gray900,
  warningAccent: colorPallet.orange100,
  errorBackground: colorPallet.gray200,
  errorText: colorPallet.red500,
  errorAccent: colorPallet.red500,
  searchBackground: colorPallet.gray900,
  searchBackgroundFocus: colorPallet.gray900,
  searchTextFocus: colorPallet.gray100,
  formLabelText: colorPallet.gray100,
  formInputBackground: colorPallet.gray900,
  formInputBackgroundSelected: colorPallet.purple300,
  formInputBackgroundSelection: colorPallet.purple300,
  formInputBorder: colorPallet.gray900,
  formInputTextReadOnlySelection: colorPallet.gray900,
  formInputBorderSelected: colorPallet.purple300,
  formInputText: colorPallet.gray100,
  formInputTextSelected: colorPallet.gray800,
  formInputTextPlaceholder: colorPallet.gray100,
  formInputTextSelection: colorPallet.gray900,
  formInputShadowSelected: colorPallet.purple300,
  formInputTextHighlight: colorPallet.purple300,
};

const _colors = {
  y1: '#733309',
  y2: '#87540d',
  y3: '#B88115',
  y4: '#D4A31C',
  y5: '#E6BB20',
  y6: '#F2D047',
  y7: '#F5E35D',
  y8: '#FCF088',
  y9: '#FFF7C4',
  y10: '#FFFBEA',
  y11: '#FFFEFA',
  r1: '#610316',
  r2: '#8A041A',
  r3: '#AB091E',
  r4: '#CF1124',
  r5: '#E12D39',
  r6: '#EF4E4E',
  r7: '#F86A6A',
  r8: '#FF9B9B',
  r9: '#FFBDBD',
  r10: '#FFE3E3',
  r11: '#FFF1F1',
  b1: '#034388',
  b2: '#0B5FA3',
  b3: '#1271BF',
  b4: '#1980D4',
  b5: '#2B8FED',
  b6: '#40A5F7',
  b7: '#66B5FA',
  b8: '#8BCAFD',
  b9: '#B3D9FF',
  b10: '#E3F0FF',
  b11: '#F5FCFF',
  n1: '#102A43',
  n2: '#243B53',
  n3: '#334E68',
  n4: '#486581',
  n5: '#627D98',
  n6: '#829AB1',
  n7: '#9FB3C8',
  n8: '#BCCCDC',
  n9: '#D9E2EC',
  n10: '#E8ECF0',
  n11: '#F7FAFC',
  g1: '#014D40',
  g2: '#0C6B58',
  g3: '#147D64',
  g4: '#199473',
  g5: '#27AB83',
  g6: '#3EBD93',
  g7: '#65D6AD',
  g8: '#8EEDC7',
  g9: '#C6F7E2',
  g10: '#EFFCF6',
  g11: '#FAFFFD',
  p1: '#44056E',
  p2: '#580A94',
  p3: '#690CB0',
  p4: '#7A0ECC',
  p5: '#8719E0',
  p6: '#9446ED',
  p7: '#A368FC',
  p8: '#B990FF',
  p9: '#DAC4FF',
  p10: '#F2EBFE',
  p11: '#F9F6FE',

  border: '#610316',
  hover: '#610316',
  selected: '#610316',
};

export const colors = {
  ..._colors,
  resolve(name, offset) {
    switch (name) {
      case 'border':
        return _colors['n' + (8 + offset)];
      default:
    }
    throw new Error('Unknown color name: ' + name);
  },
};

export const styles = {
  veryLargeText: {
    fontSize: 30,
    fontWeight: 600,
  },
  largeText: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  mediumText: {
    fontSize: 15,
    fontWeight: 500,
  },
  smallText: {
    fontSize: 13,
    [`@media (min-width: ${tokens.breakpoint_small})`]: {
      // lineHeight: 21 // TODO: This seems like trouble, but what's the right value?
    },
  },
  verySmallText: {
    fontSize: 13,
  },
  page: {
    flex: 1,
    minHeight: 700, // ensure we can scroll on small screens
    paddingTop: 8, // height of the titlebar
    [`@media (min-width: ${tokens.breakpoint_small})`]: {
      paddingTop: 36,
    },
  },
  pageHeader: {
    fontSize: 25,
    borderBottomWidth: 5,
    borderColor: '#610316',
    borderStyle: 'solid',
    display: 'inline',
    flex: 0,
    color: '#610316',
    marginTop: 40,
    marginBottom: 20,
    paddingBottom: 5,
  },
  pageContent: {
    paddingLeft: 2,
    paddingRight: 2,
    [`@media (min-width: ${tokens.breakpoint_small})`]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  settingsPageContent: {
    padding: 20,
    [`@media (min-width: ${tokens.breakpoint_small})`]: {
      padding: 'inherit',
    },
  },
  staticText: {
    cursor: 'default',
    userSelect: 'none',
  },
  shadow: {
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
  },
  shadowLarge: {
    boxShadow: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
  },
  tnum: {
    // eslint-disable-next-line rulesdir/typography
    fontFeatureSettings: '"tnum"',
  },
  notFixed: { fontFeatureSettings: '' },
  text: {
    fontSize: 16,
    // lineHeight: 22.4 // TODO: This seems like trouble, but what's the right value?
  },
  // Dynamically set
  lightScrollbar: null as CSSProperties | null,
  darkScrollbar: null as CSSProperties | null,
  scrollbarWidth: null as number | null,
};

let hiddenScrollbars = false;

function onScrollbarChange() {
  styles.lightScrollbar = hiddenScrollbars
    ? null
    : {
        '& ::-webkit-scrollbar': {
          width: 11,
          backgroundColor: 'rgba(200, 200, 200, .2)',
        },
        '& ::-webkit-scrollbar-thumb': {
          width: 7,
          borderRadius: 30,
          backgroundClip: 'padding-box',
          border: '2px solid rgba(0, 0, 0, 0)',
        },
        '& ::-webkit-scrollbar-thumb:vertical': {
          backgroundColor: '#d0d0d0',
        },
      };

  styles.darkScrollbar = hiddenScrollbars
    ? null
    : {
        '& ::-webkit-scrollbar': {
          width: 7,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        '& ::-webkit-scrollbar-thumb:vertical': {
          backgroundColor: 'rgba(200, 200, 200, .5)',
        },
      };

  styles.scrollbarWidth = hiddenScrollbars ? 0 : 13;
}

if (Platform.env === 'web') {
  function testScrollbars() {
    let el = document.createElement('div');
    el.innerHTML =
      '<div style="width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;"/>';
    document.body.appendChild(el);
    let testNode = el.childNodes[0] as HTMLDivElement;
    if (testNode.offsetWidth === testNode.clientWidth) {
      return true;
    }
    return false;
  }

  hiddenScrollbars = testScrollbars();
  onScrollbarChange();

  window.addEventListener('focus', () => {
    hiddenScrollbars = testScrollbars();
    onScrollbarChange();
  });
}

export const hasHiddenScrollbars = () => hiddenScrollbars;
