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
      fontFamily: "Inter-Bold",
      fontSize: 24,
      fontWeight: "700",
      color: theme.colors.text,
      marginBottom: 20,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    card: {
      width: "47%",
      backgroundColor: "#F9FAFB",
      borderRadius: 16,
      padding: 16,
      gap: 8,
    },
    cardPressed: {
      opacity: 0.7,
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "#EDE9FE",
      alignItems: "center",
      justifyContent: "center",
    },
    cardTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 14,
      fontWeight: "600",
      color: theme.colors.text,
    },
    cardDescription: {
      fontFamily: "Inter-Regular",
      fontSize: 12,
      fontWeight: "400",
      color: "#6B7280",
      lineHeight: 18,
    },
  });
