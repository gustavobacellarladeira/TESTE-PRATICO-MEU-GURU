import { AssetIcon } from "@/components/asset-icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useStyles, useTheme } from "@/theme";

import { createStyles } from "./ChatHeader.styles";

export function ChatHeader() {
  const styles = useStyles(createStyles);
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      {/* Left: camera */}
      <Pressable style={styles.cameraButton} hitSlop={8}>
        <AssetIcon name="camera-icon" size={20} color={theme.colors.textBody} />
      </Pressable>

      {/* Center: Guru IA selector */}
      <Pressable style={styles.centerPill}>
        <AssetIcon name="logo-icon" size={16} color={theme.colors.primary} />
        <Text style={styles.centerLabel}>Guru IA</Text>
        <Ionicons name="chevron-down" size={16} color={theme.colors.textBody} />
      </Pressable>

      {/* Right: menu */}
      <Pressable hitSlop={8}>
        <AssetIcon name="menu-icon" size={24} color={theme.colors.textBody} />
      </Pressable>
    </View>
  );
}
