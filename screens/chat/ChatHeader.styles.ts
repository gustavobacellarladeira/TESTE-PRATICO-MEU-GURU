import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 24,
      paddingBottom: 12,
      backgroundColor: "#FFFFFF",
    },
    cameraButton: {
      width: 40,
      height: 40,
      borderRadius: 999,
      backgroundColor: "#F9FAFB",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    centerPill: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#E5E7EB",
      backgroundColor: "#FFFFFF",
      height: 32,
    },
    centerLabel: {
      fontFamily: "Inter-Medium",
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
      color: "#374151",
    },
  });
