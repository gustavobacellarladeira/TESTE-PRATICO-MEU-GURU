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
    title: {
      fontFamily: theme.typography.fonts.semibold,
      fontSize: theme.typography.sizes.xl,
      fontWeight: theme.typography.weights.semibold,
      lineHeight: theme.typography.lineHeights.xl,
      color: theme.colors.text,
    },
    tabsContainer: {
      marginTop: theme.spacing["3xl"],
    },
    cardContainer: {
      marginTop: theme.spacing["2xl"],
    },
    exploreContainer: {
      marginTop: theme.spacing["3xl"],
    },
  });
