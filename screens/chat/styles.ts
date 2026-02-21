import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    body: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 32,
    },
    greeting: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 8,
    },
    greetingText: {
      fontFamily: "Inter-SemiBold",
      fontSize: 20,
      fontWeight: "600",
      color: theme.colors.primary,
    },
    subtitle: {
      fontFamily: "Inter-Bold",
      fontSize: 26,
      fontWeight: "700",
      color: theme.colors.primary,
      marginBottom: 32,
    },
    chipsWrapper: {
      gap: 10,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 999,
      backgroundColor: "#F3F4F6",
      alignSelf: "flex-start",
    },
    chipPressed: {
      opacity: 0.7,
    },
    chipLabel: {
      fontFamily: "Inter-Medium",
      fontSize: 14,
      fontWeight: "500",
      color: "#374151",
    },
    inputBarWrapper: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 100,
      backgroundColor: theme.colors.background,
      borderTopWidth: 1,
      borderTopColor: "#F3F4F6",
    },
    inputBar: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 999,
      backgroundColor: "#F3F4F6",
    },
    plusButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "#F3F4F6",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      flex: 1,
      fontFamily: "Inter-Regular",
      fontSize: 15,
      color: theme.colors.text,
    },
    micButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: "#F3F4F6",
      alignItems: "center",
      justifyContent: "center",
    },
  });
