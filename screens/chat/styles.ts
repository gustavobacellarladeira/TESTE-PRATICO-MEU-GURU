import { Theme } from "@/theme";
import { StyleSheet } from "react-native";

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: "center",
      paddingHorizontal: 24,
      paddingBottom: 160,
    },
    greetingLottie: {
      width: 35,
      height: 50,
    },
    greeting: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      marginBottom: 8,
    },
    greetingText: {
      fontFamily: "Inter-Medium",
      fontSize: 20,
      fontWeight: "500",
      lineHeight: 28,
      color: theme.colors.primary,
    },
    subtitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 24,
      fontWeight: "600",
      lineHeight: 32,
      marginBottom: 32,
    },
    chipsWrapper: {
      gap: 12,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 14,
      paddingHorizontal: 12,
      borderRadius: 999,
      backgroundColor: "#F3F4F6",
      alignSelf: "flex-start",
    },
    chipPressed: {
      opacity: 0.7,
    },
    chipLabel: {
      fontFamily: "Inter-Medium",
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 16,
      color: "#6B7280",
    },
    chipLottie: {
      width: 20,
      height: 20,
    },
    chipImage: {
      width: 20,
      height: 20,
    },
    chipAvatars: {
      flexDirection: "row",
    },
    chipAvatar: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    chipAvatarOffset: {
      marginLeft: -4,
    },
    inputBarWrapper: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: theme.colors.background,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -2 },
      shadowRadius: 6,
    },
    inputPill: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      paddingHorizontal: 12,
      paddingVertical: 14,
      borderRadius: 999,
      backgroundColor: "#F3F4F6",
    },
    plusButton: {
      width: 48,
      height: 48,
      borderRadius: 999,
      backgroundColor: "#F3F4F6",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      flex: 1,
      fontFamily: "Inter-Regular",
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 20,
      color: "#374151",
      paddingVertical: 0,
      includeFontPadding: false,
    },
    micButton: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
