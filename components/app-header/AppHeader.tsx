import { AssetIcon } from "@/components/asset-icon";
import { useStyles } from "@/theme";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export function AppHeader() {
  const styles = useStyles(createStyles);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12 }]}>
      {/* Logo lado esquerdo */}
      <AssetIcon name="logo-meuguru-icon" color="#374151" />

      {/* Grupo direito: fogo + contagem + avatar */}
      <View style={styles.rightGroup}>
        <View style={styles.fireGroup}>
          <AssetIcon name="fire-icon" color="#7A00C6" />
          <Text style={styles.fireCount}>2</Text>
        </View>
        <Image
          source={require("@/assets/placeholders/avatar-1-placeholder.png")}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
