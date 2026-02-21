import Ionicons from "@expo/vector-icons/Ionicons";
import { useHeaderHeight } from "@react-navigation/elements";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { AssetIcon } from "@/components/asset-icon";
import type { GeneratedIconKeys } from "@/components/asset-icon/icons.generated";
import { GradientText } from "@/components/gradient-text";
import { useStyles } from "@/theme";

import { createStyles } from "./styles";

type Chip =
  | { type: "icon"; icon: GeneratedIconKeys; label: string }
  | { type: "image"; source: ReturnType<typeof require>; label: string }
  | { type: "avatars"; label: string };

const CHIPS: Chip[] = [
  { type: "icon", icon: "bg_removal-icon", label: "Resolvedor de tarefas" },
  {
    type: "image",
    source: require("@/assets/images/camera-full-icon.png"),
    label: "Explorar recursos",
  },
  {
    type: "image",
    source: require("@/assets/images/tools-icon.png"),
    label: "Enviar foto da questão",
  },
  { type: "avatars", label: "Resolver atividade com Tutores" },
];

const LINE_HEIGHT = 20;
const MAX_LINES = 3;
const MAX_INPUT_HEIGHT = LINE_HEIGHT * MAX_LINES;

export default function Chat() {
  const styles = useStyles(createStyles);
  const inputRef = useRef<TextInput>(null);
  const scrollRef = useRef<ScrollView>(null);
  const [text, setText] = useState("");
  const [inputHeight, setInputHeight] = useState(LINE_HEIGHT);
  const headerHeight = useHeaderHeight();

  const keyboardHeight = useSharedValue(0);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardWillShow", (e) => {
      keyboardHeight.value = e.endCoordinates.height;
    });
    const hide = Keyboard.addListener("keyboardWillHide", () => {
      keyboardHeight.value = 0;
    });
    return () => {
      show.remove();
      hide.remove();
    };
  }, [keyboardHeight]);

  const inputBarAnimStyle = useAnimatedStyle(() => {
    const kh = keyboardHeight.value;
    const isOpen = kh > 0;
    return {
      bottom: kh,
      paddingBottom: Math.max(12, 89 - kh),
      shadowOpacity: isOpen ? 0.06 : 0,
      elevation: isOpen ? 4 : 0,
    };
  });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
      >
        {/* Greeting */}
        <View style={styles.greeting}>
          <LottieView
            source={require("@/assets/lottie/Apple Image Playground Animation.json")}
            autoPlay
            loop
            style={styles.greetingLottie}
          />
          <Text style={styles.greetingText}>Olá, Lucas!</Text>
        </View>

        <GradientText
          colors={["#7A00C6", "#B453FE", "#8682FF", "#56B8E2"]}
          style={styles.subtitle}
        >
          Como posso te ajudar?
        </GradientText>

        {/* Chips */}
        <View style={styles.chipsWrapper}>
          {CHIPS.map((chip) => (
            <Pressable
              key={chip.label}
              style={({ pressed }) => [
                styles.chip,
                pressed && styles.chipPressed,
              ]}
              onPress={() => inputRef.current?.focus()}
            >
              {chip.type === "icon" && (
                <AssetIcon name={chip.icon} size={18} color="#6B7280" />
              )}
              {chip.type === "image" && (
                <Image source={chip.source} style={styles.chipImage} />
              )}
              {chip.type === "avatars" && (
                <View style={styles.chipAvatars}>
                  <Image
                    source={require("@/assets/placeholders/avatar-4-placeholder.png")}
                    style={styles.chipAvatar}
                  />
                  <Image
                    source={require("@/assets/placeholders/avatar-3-placeholder.png")}
                    style={[styles.chipAvatar, styles.chipAvatarOffset]}
                  />
                  <Image
                    source={require("@/assets/placeholders/avatar-2-placeholder.png")}
                    style={[styles.chipAvatar, styles.chipAvatarOffset]}
                  />
                </View>
              )}
              <Text style={styles.chipLabel}>{chip.label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {/* Input bar — absolutely positioned, tracks keyboard pixel-perfectly */}
      <Animated.View style={[styles.inputBarWrapper, inputBarAnimStyle]}>
        <Pressable style={styles.plusButton}>
          <Ionicons name="add" size={24} color="#374151" />
        </Pressable>

        <View style={styles.inputPill}>
          <TextInput
            ref={inputRef}
            style={[styles.input, { height: inputHeight }]}
            placeholder="Pergunte ou tire foto"
            placeholderTextColor="#374151"
            value={text}
            onChangeText={setText}
            multiline
            scrollEnabled={inputHeight >= MAX_INPUT_HEIGHT}
            onContentSizeChange={(e) => {
              const h = Math.min(
                e.nativeEvent.contentSize.height,
                MAX_INPUT_HEIGHT,
              );
              setInputHeight(Math.max(h, LINE_HEIGHT));
            }}
          />
          <Pressable style={styles.micButton}>
            <Ionicons name="mic-outline" size={24} color="#374151" />
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}
