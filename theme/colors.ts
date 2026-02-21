/** Raw color palette — never use directly in component code */
const palette = {
  purple: {
    900: "#7A00C6", // primary brand
    700: "#A14BD7", // indicator border
    500: "#B453FE", // gradient mid-stop
    400: "#8453FE", // alt gradient mid-stop
    50: "#F6EDFB", // tint surface
  },
  indigo: {
    400: "#8682FF", // gradient cool-stop
  },
  cyan: {
    400: "#56B8E2", // gradient end-stop
  },
  teal: {
    600: "#0D9488", // tutores accent
  },
  gray: {
    900: "#111827", // headings
    700: "#374151", // body text & icons
    500: "#6B7280", // muted text
    200: "#E5E7EB", // borders
    100: "#F3F4F6", // muted surface (chips, inputs)
    50: "#F9FAFB", // card surface
  },
  white: "#FFFFFF",
  black: "#000000",
} as const;

export const lightColors = {
  // Surfaces
  background: palette.white,
  surface: palette.gray[50],
  surfaceMuted: palette.gray[100],
  surfaceTint: palette.purple[50],
  // Text
  text: palette.gray[900],
  textBody: palette.gray[700],
  textMuted: palette.gray[500],
  // Brand
  primary: palette.purple[900],
  primaryMid: palette.purple[700],
  primaryLight: palette.purple[500],
  // Accents
  accent: palette.indigo[400],
  teal: palette.teal[600],
  // Utility
  border: palette.gray[200],
  shadow: palette.black,
  // Tab bar
  tabIconActive: palette.purple[900],
  tabIconInactive: palette.gray[700],
};

export type Colors = Record<keyof typeof lightColors, string>;

export const darkColors: Colors = {
  background: "#121212",
  surface: "#1E1E1E",
  surfaceMuted: "#2A2A2A",
  surfaceTint: "#2D0052",
  text: "#FFFFFF",
  textBody: "#D1D5DB",
  textMuted: "#9CA3AF",
  primary: palette.purple[900],
  primaryMid: palette.purple[700],
  primaryLight: palette.purple[500],
  accent: palette.indigo[400],
  teal: palette.teal[600],
  border: "#374151",
  shadow: palette.black,
  tabIconActive: palette.purple[500],
  tabIconInactive: "#9CA3AF",
};
