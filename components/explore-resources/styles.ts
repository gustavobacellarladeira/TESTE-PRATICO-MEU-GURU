import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: 12,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 24,
      color: "#111827",
    },
    verTodos: {
      fontFamily: "Inter-Medium",
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
      color: "#7A00C6",
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 12,
    },
    card: {
      flex: 1,
      minWidth: "45%",
      height: 108,
      backgroundColor: "#F9FAFB",
      borderRadius: 12,
      padding: 16,
      justifyContent: "space-between",
    },
    cardPressed: {
      opacity: 0.75,
    },
    cardLabel: {
      fontFamily: "Inter-Medium",
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
      color: "#374151",
    },
  });
