import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextStyle } from "react-native";

type GradientTextProps = {
  children: string;
  colors: [string, string, ...string[]];
  style?: TextStyle;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

export function GradientText({
  children,
  colors,
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}: GradientTextProps) {
  return (
    <MaskedView maskElement={<Text style={style}>{children}</Text>}>
      <LinearGradient colors={colors} start={start} end={end}>
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
