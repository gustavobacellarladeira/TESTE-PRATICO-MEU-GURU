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
    pageTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 20,
      fontWeight: "600",
      lineHeight: 28,
      color: theme.colors.text,
      marginBottom: 20,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 16,
    },
    card: {
      width: "47%",
      backgroundColor: "#F9FAFB",
      borderRadius: 12,
      padding: 16,
      gap: 4,
    },
    cardPressed: {
      opacity: 0.7,
    },
    iconWrapper: {
      width: 34,
      height: 34,
      borderRadius: 999,
      backgroundColor: "#F6EDFB",
      alignItems: "center",
      justifyContent: "center",
    },
    cardTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 20,
      color: theme.colors.text,
    },
    cardDescription: {
      fontFamily: "Inter-Regular",
      fontSize: 12,
      fontWeight: "400",
      lineHeight: 16,
      color: "#6B7280",
    },
  });
