import React, { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AssetIcon } from "@/components/asset-icon";
import { GradientText } from "@/components/gradient-text";
import { useStyles } from "@/theme";

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

const GRADIENT_COLORS: [string, string, ...string[]] = [
  "#7A00C6",
  "#B453FE",
  "#8682FF",
  "#56B8E2",
];

const INACTIVE_COLORS: [string, string] = ["#374151", "#374151"];

export function HomeTabs({ onChange }: HomeTabsProps) {
  const styles = useStyles(createStyles);
  const [active, setActive] = useState<Tab>("ia");
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
          color={active === "ia" ? "#7A00C6" : "#374151"}
        />
        <GradientText
          colors={active === "ia" ? GRADIENT_COLORS : INACTIVE_COLORS}
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
          color={active === "tutores" ? "#7A00C6" : "#374151"}
        />
        <GradientText
          colors={active === "tutores" ? GRADIENT_COLORS : INACTIVE_COLORS}
          style={active === "tutores" ? styles.labelActive : styles.label}
        >
          Com tutores
        </GradientText>
      </Pressable>
    </View>
  );
}
