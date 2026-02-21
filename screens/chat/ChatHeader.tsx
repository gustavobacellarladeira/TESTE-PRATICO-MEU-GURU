import { AssetIcon } from "@/components/asset-icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ChatHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      {/* Left: camera */}
      <Pressable hitSlop={8}>
        <AssetIcon name="camera-icon" size={24} color="#374151" />
      </Pressable>

      {/* Center: Guru IA selector */}
      <Pressable style={styles.centerPill}>
        <AssetIcon name="logo-icon" size={18} color="#7A00C6" />
        <Text style={styles.centerLabel}>Guru IA</Text>
        <Ionicons name="chevron-down" size={14} color="#374151" />
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
  centerPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  centerLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
});
