import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      minHeight: 56,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: theme.spacing.md,
      paddingHorizontal: theme.spacing["2xl"],
      backgroundColor: theme.colors.background,
    },
    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
    },
    fireGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: theme.spacing.sm,
    },
    fireCount: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.sm,
      color: theme.colors.text,
    },
    avatar: {
      width: theme.spacing["3xl"],
      height: theme.spacing["3xl"],
      borderRadius: theme.radii.xl,
      overflow: "hidden",
    },
  });
