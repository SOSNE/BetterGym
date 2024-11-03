/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    secondaryBackground: '#d8d8d8',
    tint: tintColorLight,
    icon: '#687076',
    altGreenColor: '#00897b',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#a9a9a9',
    background: '#282828',
    secondaryBackground: '#363636',
    tint: tintColorDark,
    icon: '#9BA1A6',
    altGreenColor: '#00897b',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
