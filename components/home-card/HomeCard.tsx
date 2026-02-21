import LottieView from "lottie-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Tab = "ia" | "tutores";

type HomeCardProps = {
  activeTab: Tab;
};

const CARD_CONTENT: Record<
  Tab,
  { title: string; subtitle: string; buttonLabel: string }
> = {
  ia: {
    title: "Resolva com o Guru IA",
    subtitle: "Receba a resposta na hora com\naté 97% de assertividade",
    buttonLabel: "Perguntar para IA",
  },
  tutores: {
    title: "Resolva com Tutores",
    subtitle: "Conecte-se com especialistas\nprontos para te ajudar agora",
    buttonLabel: "Falar com tutor",
  },
};

export function HomeCard({ activeTab }: HomeCardProps) {
  const content = CARD_CONTENT[activeTab];

  const scale = useSharedValue(1);

  const buttonAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      key={activeTab}
      entering={FadeIn.duration(300).springify()}
      exiting={FadeOut.duration(150)}
      style={styles.card}
    >
      {/* Lottie icon */}
      <View style={styles.lottieWrapper}>
        <LottieView
          source={require("@/assets/lottie/Apple Image Playground Animation.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>

      {/* Texts */}
      <Text style={styles.title}>{content.title}</Text>
      <Text style={styles.subtitle}>{content.subtitle}</Text>

      {/* Button */}
      <Animated.View style={buttonAnimStyle}>
        <Pressable
          style={styles.button}
          onPressIn={() => {
            scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
          }}
          onPressOut={() => {
            scale.value = withSpring(1, { damping: 15, stiffness: 300 });
          }}
        >
          <Text style={styles.buttonLabel}>{content.buttonLabel}</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3EAFF",
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 8,
  },
  lottieWrapper: {
    width: 64,
    height: 64,
    marginBottom: 4,
  },
  lottie: {
    width: 64,
    height: 64,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
  },
  button: {
    marginTop: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  buttonLabel: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    color: "#7A00C6",
  },
});
