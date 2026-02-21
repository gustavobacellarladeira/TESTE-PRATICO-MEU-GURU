import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: theme.spacing["2xl"],
      paddingBottom: theme.spacing.md,
      backgroundColor: theme.colors.background,
    },
    cameraButton: {
      width: 40,
      height: 40,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surface,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    centerPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.radii.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.background,
      height: 32,
    },
    centerLabel: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.xs,
      color: theme.colors.textBody,
    },
  });
