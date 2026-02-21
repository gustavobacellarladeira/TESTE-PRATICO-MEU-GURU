import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      paddingTop: 16,
      paddingHorizontal: 24,
      paddingBottom: 100,
    },
    title: {
      fontFamily: "Inter-SemiBold",
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 32,
      color: theme.colors.text,
    },
    tabsContainer: {
      marginTop: 32,
    },
    cardContainer: {
      marginTop: 24,
    },
    exploreContainer: {
      marginTop: 32,
    },
  });
