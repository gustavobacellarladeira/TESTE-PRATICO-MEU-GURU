import { useAppSelector } from "@/store";

import { Colors, darkColors, lightColors } from "./colors";
import { Spacing, spacing } from "./spacing";
import { Typography, typography } from "./typography";

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
  spacing,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
  spacing,
  isDark: true,
};

export function useTheme(): Theme {
  const mode = useAppSelector((state) => state.theme.mode);
  return mode === "dark" ? darkTheme : lightTheme;
}

export function useStyles<T>(createStylesFn: (theme: Theme) => T): T {
  const theme = useTheme();
  return createStylesFn(theme);
}

export { darkColors, lightColors, spacing, typography };
export type { Colors, Spacing, Typography };
