import { useAppSelector } from "@/store";

import { Colors, darkColors, lightColors } from "./colors";
import { Gradients, gradients } from "./gradients";
import { Radii, Spacing, radii, spacing } from "./spacing";
import { Typography, typography } from "./typography";

export interface Theme {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  radii: Radii;
  gradients: Gradients;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
  spacing,
  radii,
  gradients,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
  spacing,
  radii,
  gradients,
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

export { darkColors, gradients, lightColors, radii, spacing, typography };
export type { Colors, Gradients, Radii, Spacing, Typography };
