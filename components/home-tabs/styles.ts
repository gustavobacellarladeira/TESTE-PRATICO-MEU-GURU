import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      borderRadius: theme.radii.sm,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      position: "relative",
    },
    indicator: {
      position: "absolute",
      top: -1,
      left: -1,
      bottom: -1,
      borderRadius: theme.radii.sm,
      backgroundColor: theme.colors.surfaceTint,
      borderWidth: 1,
      borderColor: theme.colors.primaryMid,
    },
    tab: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingVertical: theme.spacing.md,
      borderRadius: theme.radii.md,
      zIndex: 1,
    },
    label: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.sm,
      color: theme.colors.textBody,
    },
    labelActive: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.sm,
    },
  });
