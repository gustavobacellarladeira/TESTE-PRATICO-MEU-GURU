import { StyleSheet } from "react-native";

import { Theme } from "@/theme";

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    cardOuter: {
      borderRadius: 12,
      overflow: "hidden",
    },
    card: {
      padding: 16,
      alignItems: "center",
    },
    lottieWrapper: {
      width: 64,
      height: 64,
      marginBottom: 16,
    },
    lottie: {
      width: 64,
      height: 64,
    },
    avatarStack: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
      height: 64,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
    },
    avatarOffset1: {
      marginLeft: -4,
    },
    avatarOffset2: {
      marginLeft: -4,
    },
    title: {
      fontFamily: "Inter-SemiBold",
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 24,
      color: "#111827",
      textAlign: "center",
      marginBottom: 4,
    },
    subtitle: {
      fontFamily: "Inter-Regular",
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 20,
      color: "#6B7280",
      textAlign: "center",
      marginBottom: 16,
    },
    buttonWrapper: {
      alignSelf: "stretch",
    },
    button: {
      paddingVertical: 14,
      borderRadius: 999,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
    },
    buttonLabel: {
      fontFamily: "Inter-Medium",
      fontSize: 14,
      fontWeight: "500",
      lineHeight: 20,
    },
  });
