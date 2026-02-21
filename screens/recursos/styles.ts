import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      paddingTop: theme.spacing.lg,
      paddingHorizontal: theme.spacing["2xl"],
      paddingBottom: 100,
    },
    pageTitle: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.lg,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.lg,
      color: theme.colors.text,
      marginBottom: theme.spacing.xl,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.spacing.lg,
    },
    card: {
      width: "47%",
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      padding: theme.spacing.lg,
      gap: theme.spacing.xs,
    },
    cardPressed: {
      opacity: 0.7,
    },
    iconWrapper: {
      width: 34,
      height: 34,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surfaceTint,
      alignItems: "center",
      justifyContent: "center",
    },
    cardTitle: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.sm,
      color: theme.colors.text,
    },
    cardDescription: {
      fontFamily: theme.typography.fonts.regular,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.regular,
      lineHeight: theme.typography.lineHeights.xs,
      color: theme.colors.textMuted,
    },
  });
