import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderColor: "#E5E7EB",
      position: "relative",
    },
    indicator: {
      position: "absolute",
      top: -1,
      left: -1,
      bottom: -1,
      borderRadius: 8,
      backgroundColor: "#F6EDFB",
      borderWidth: 1,
      borderColor: "#A14BD7",
    },
    tab: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingVertical: 12,
      borderRadius: 10,
      zIndex: 1,
    },
    label: {
      fontFamily: "Inter-Medium",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
      color: "#374151",
    },
    labelActive: {
      fontFamily: "Inter-SemiBold",
      fontSize: 14,
      fontWeight: "600",
      lineHeight: 20,
    },
  });
