import React, { useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { AssetIcon } from "@/components/asset-icon";

type Tab = "ia" | "tutores";

type HomeTabsProps = {
  onChange?: (tab: Tab) => void;
};

const SPRING = { damping: 18, stiffness: 200, mass: 0.8 };

export function HomeTabs({ onChange }: HomeTabsProps) {
  const [active, setActive] = useState<Tab>("ia");
  const containerWidth = useRef(0);

  const translateX = useSharedValue(0);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handlePress = useCallback(
    (tab: Tab) => {
      setActive(tab);
      onChange?.(tab);
      translateX.value = withSpring(
        tab === "ia" ? 0 : containerWidth.current / 2,
        SPRING,
      );
    },
    [onChange, translateX],
  );

  return (
    <View
      style={styles.wrapper}
      onLayout={(e) => {
        containerWidth.current = e.nativeEvent.layout.width;
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
          name="chalkboard-mini-icon"
          size={20}
          color={active === "ia" ? "#7A00C6" : "#6B7280"}
        />
        <Text style={[styles.label, active === "ia" && styles.labelActive]}>
          Com a IA
        </Text>
      </Pressable>

      {/* Tab: Com tutores */}
      <Pressable
        style={styles.tab}
        onPress={() => handlePress("tutores")}
        accessibilityRole="tab"
        accessibilityState={{ selected: active === "tutores" }}
      >
        <AssetIcon
          name="logo-icon"
          size={20}
          color={active === "tutores" ? "#7A00C6" : "#6B7280"}
        />
        <Text
          style={[styles.label, active === "tutores" && styles.labelActive]}
        >
          Com tutores
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    padding: 4,
    position: "relative",
    overflow: "hidden",
  },
  indicator: {
    position: "absolute",
    top: 4,
    left: 4,
    bottom: 4,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "#EDE9FE",
    borderWidth: 1.5,
    borderColor: "#7A00C6",
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    zIndex: 1,
  },
  label: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
  },
  labelActive: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#7A00C6",
  },
});
