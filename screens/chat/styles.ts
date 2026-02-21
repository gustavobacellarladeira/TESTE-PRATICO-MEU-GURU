import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: "center",
      paddingHorizontal: theme.spacing["2xl"],
      paddingBottom: 160,
    },
    greetingLottie: {
      width: 35,
      height: 50,
    },
    greeting: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: theme.spacing.sm,
    },
    greetingText: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.lg,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.lg,
      color: theme.colors.primary,
    },
    subtitle: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.xl,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.xl,
      marginBottom: theme.spacing["3xl"],
    },
    chipsWrapper: {
      gap: theme.spacing.md,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      paddingVertical: 14,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surfaceMuted,
      alignSelf: "flex-start",
    },
    chipPressed: {
      opacity: 0.7,
    },
    chipLabel: {
      fontFamily: theme.typography.fonts.medium,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.medium,
      lineHeight: theme.typography.lineHeights.xs,
      color: theme.colors.textMuted,
    },
    chipLottie: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    chipImage: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
    },
    chipAvatars: {
      flexDirection: "row",
    },
    chipAvatar: {
      width: theme.spacing.xl,
      height: theme.spacing.xl,
      borderRadius: theme.radii.md,
    },
    chipAvatarOffset: {
      marginLeft: -theme.spacing.xs,
    },
    inputBarWrapper: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.sm,
      paddingHorizontal: theme.spacing["2xl"],
      paddingVertical: theme.spacing.md,
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.shadow,
      shadowOffset: { width: 0, height: -2 },
      shadowRadius: 6,
    },
    inputPill: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: 14,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surfaceMuted,
    },
    plusButton: {
      width: theme.spacing["4xl"],
      height: theme.spacing["4xl"],
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surfaceMuted,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      flex: 1,
      fontFamily: theme.typography.fonts.regular,
      fontSize: theme.typography.sizes.sm,
      fontWeight: theme.typography.weights.regular,
      lineHeight: theme.typography.lineHeights.sm,
      color: theme.colors.textBody,
      paddingVertical: 0,
      includeFontPadding: false,
    },
    micButton: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
