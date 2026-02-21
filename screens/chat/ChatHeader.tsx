import { AssetIcon } from "@/components/asset-icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ChatHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      {/* Left: camera */}
      <Pressable style={styles.cameraButton} hitSlop={8}>
        <AssetIcon name="camera-icon" size={20} color="#374151" />
      </Pressable>

      {/* Center: Guru IA selector */}
      <Pressable style={styles.centerPill}>
        <AssetIcon name="logo-icon" size={16} color="#7A00C6" />
        <Text style={styles.centerLabel}>Guru IA</Text>
        <Ionicons name="chevron-down" size={16} color="#374151" />
      </Pressable>

      {/* Right: menu */}
      <Pressable hitSlop={8}>
        <AssetIcon name="menu-icon" size={24} color="#374151" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
