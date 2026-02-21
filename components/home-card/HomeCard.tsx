import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { useStyles } from "@/theme";

import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { createStyles } from "./styles";

type Tab = "ia" | "tutores";

type HomeCardProps = {
  activeTab: Tab;
};

const CARD_CONTENT: Record<
  Tab,
  {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonColor: string;
    gradient: [string, string, ...string[]];
  }
> = {
  ia: {
    title: "Resolva com o Guru IA",
    subtitle: "Receba a resposta na hora com\naté 97% de assertividade",
    buttonLabel: "Perguntar para IA",
    buttonColor: "#7A00C6",
    gradient: ["#E4F1FF", "#F2EAFF", "#FCEBFF", "#F6DFFF"],
  },
  tutores: {
    title: "Resolva com Tutores especialistas",
    subtitle: "Envie sua atividade e receba tudo\nresolvido até o seu prazo",
    buttonLabel: "Enviar atividade",
    buttonColor: "#0D9488",
    gradient: ["#F6DFFF", "#EBECFF", "#EAF1FF", "#E4F1FF"],
  },
};

export function HomeCard({ activeTab }: HomeCardProps) {
  const styles = useStyles(createStyles);
  const content = CARD_CONTENT[activeTab];
  const router = useRouter();

  const scale = useSharedValue(1);

  const buttonAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      key={activeTab}
      entering={FadeIn.duration(300).springify()}
      exiting={FadeOut.duration(150)}
      style={styles.cardOuter}
    >
      <LinearGradient
        colors={content.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Icon area */}
        {activeTab === "ia" ? (
          <View style={styles.lottieWrapper}>
            <LottieView
              source={require("@/assets/lottie/Apple Image Playground Animation.json")}
              autoPlay
              loop
              style={styles.lottie}
            />
          </View>
        ) : (
          <View style={styles.avatarStack}>
            <Image
              source={require("@/assets/placeholders/avatar-4-placeholder.png")}
              style={[styles.avatar, { zIndex: 1 }]}
            />
            <Image
              source={require("@/assets/placeholders/avatar-3-placeholder.png")}
              style={[styles.avatar, styles.avatarOffset1, { zIndex: 2 }]}
            />
            <Image
              source={require("@/assets/placeholders/avatar-2-placeholder.png")}
              style={[styles.avatar, styles.avatarOffset2, { zIndex: 3 }]}
            />
          </View>
        )}

        {/* Texts */}
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.subtitle}>{content.subtitle}</Text>

        {/* Button */}
        <Animated.View style={[styles.buttonWrapper, buttonAnimStyle]}>
          <Pressable
            style={styles.button}
            onPressIn={() => {
              scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
            }}
            onPressOut={() => {
              scale.value = withSpring(1, { damping: 15, stiffness: 300 });
            }}
            onPress={() => activeTab === "ia" && router.push("/(tabs)/screen3")}
          >
            <Text style={[styles.buttonLabel, { color: content.buttonColor }]}>
              {content.buttonLabel}
            </Text>
          </Pressable>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
}
