import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: theme.spacing.md,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.md,
      color: theme.colors.text,
    },
    verTodos: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.xs,
      color: theme.colors.primary,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.md,
    },
    card: {
      flex: 1,
      minWidth: "45%",
      height: 108,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      padding: theme.spacing.lg,
      justifyContent: "space-between",
    },
    cardPressed: {
      opacity: 0.75,
    },
    cardLabel: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.xs,
      color: theme.colors.textBody,
    },
  });
