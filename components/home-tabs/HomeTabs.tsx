import React, { useCallback, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AssetIcon } from "@/components/asset-icon";
import { GradientText } from "@/components/gradient-text";

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

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: -1,
    left: -1,
    bottom: -1,
    borderRadius: 8,
    backgroundColor: "#F6EDFB",
    borderWidth: 1,
    borderColor: "#A14BD7",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10,
    zIndex: 1,
  },
  label: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#374151",
  },
  labelActive: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
  },
});
