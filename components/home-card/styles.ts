import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    cardOuter: {
      borderRadius: theme.radii.lg,
      overflow: "hidden",
    },
    card: {
      padding: theme.spacing.lg,
      alignItems: "center",
    },
    lottieWrapper: {
      width: 64,
      height: 64,
      marginBottom: theme.spacing.lg,
    },
    lottie: {
      width: 64,
      height: 64,
    },
    avatarStack: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing.lg,
      height: 64,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: theme.radii["2xl"],
    },
    avatarOffset1: {
      marginLeft: -theme.spacing.xs,
    },
    avatarOffset2: {
      marginLeft: -theme.spacing.xs,
    },
    title: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.md,
      color: theme.colors.text,
      textAlign: "center",
      marginBottom: theme.spacing.xs,
    },
    subtitle: {
      fontFamily: theme.typography.fonts.regular,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.regular,
      lineHeight: theme.typography.lineHeights.sm,
      color: theme.colors.textMuted,
      textAlign: "center",
      marginBottom: theme.spacing.lg,
    },
    buttonWrapper: {
      alignSelf: "stretch",
    },
    button: {
      paddingVertical: 14,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },
    buttonLabel: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.sm,
    },
  });
