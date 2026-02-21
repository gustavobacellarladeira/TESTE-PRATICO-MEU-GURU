import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      minHeight: 56,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: 12,
      paddingHorizontal: 24,
      backgroundColor: "#FFFFFF",
    },
    rightGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    fireGroup: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingHorizontal: 8,
    },
    fireCount: {
      fontFamily: "Inter-Medium",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
      color: theme.colors.text,
    },
    avatar: {
      width: 32,
      height: 32,
      borderRadius: 16,
      overflow: "hidden",
    },
  });
