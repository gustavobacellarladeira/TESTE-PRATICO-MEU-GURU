import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AssetIcon } from "@/components/asset-icon";
import { GradientText } from "@/components/gradient-text";
import { useStyles, useTheme } from "@/theme";

import { createStyles } from "./styles";

type Tab = "ia" | "tutores";

type HomeTabsProps = {
  onChange?: (tab: Tab) => void;
};

const SPRING = {
  damping: 25,
  stiffness: 250,
  mass: 0.8,
  overshootClamping: true,
};

export function HomeTabs({ onChange }: HomeTabsProps) {
  const styles = useStyles(createStyles);
  const theme = useTheme();
  const [active, setActive] = useState<Tab>("ia");

  const gradientColors = theme.gradients.brand;
  const inactiveColors: [string, string] = [
    theme.colors.textBody,
    theme.colors.textBody,
  ];
  const tabWidth = useSharedValue(0);
  const translateX = useSharedValue(0);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: tabWidth.value,
  }));

  const handlePress = useCallback(
    (tab: Tab) => {
      setActive(tab);
      onChange?.(tab);
      translateX.value = withSpring(tab === "ia" ? 0 : tabWidth.value, SPRING);
    },
    [onChange, translateX, tabWidth],
  );

  return (
    <View
      style={styles.wrapper}
      onLayout={(e) => {
        const w = e.nativeEvent.layout.width;
        tabWidth.value = w / 2;
        translateX.value = 0;
      }}
    >
      {/* Sliding pill indicator */}
      <Animated.View style={[styles.indicator, indicatorStyle]} />

      {/* Tab: Com a IA */}
      <Pressable
        style={styles.tab}
        onPress={() => handlePress("ia")}
        accessibilityRole="tab"
        accessibilityState={{ selected: active === "ia" }}
      >
        <AssetIcon
          name="logo-icon"
          size={18}
          color={active === "ia" ? theme.colors.primary : theme.colors.textBody}
        />
        <GradientText
          colors={active === "ia" ? gradientColors : inactiveColors}
          style={active === "ia" ? styles.labelActive : styles.label}
        >
          Com a IA
        </GradientText>
      </Pressable>

      {/* Tab: Com tutores */}
      <Pressable
        style={styles.tab}
        onPress={() => handlePress("tutores")}
        accessibilityRole="tab"
        accessibilityState={{ selected: active === "tutores" }}
      >
        <AssetIcon
          name="fa-chalkboard-teacher-icon"
          size={18}
          color={
            active === "tutores" ? theme.colors.primary : theme.colors.textBody
          }
        />
        <GradientText
          colors={active === "tutores" ? gradientColors : inactiveColors}
          style={active === "tutores" ? styles.labelActive : styles.label}
        >
          Com tutores
        </GradientText>
      </Pressable>
    </View>
  );
}
