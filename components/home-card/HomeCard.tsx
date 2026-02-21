import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
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

const styles = StyleSheet.create({
  cardOuter: {
    borderRadius: 12,
    overflow: "hidden",
  },
  card: {
    padding: 16,
    alignItems: "center",
  },
  lottieWrapper: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },
  lottie: {
    width: 64,
    height: 64,
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    height: 64,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  avatarOffset1: {
    marginLeft: -4,
  },
  avatarOffset2: {
    marginLeft: -4,
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    color: "#111827",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonWrapper: {
    alignSelf: "stretch",
  },
  button: {
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  buttonLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
});
