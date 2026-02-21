import { useFonts } from "expo-font";

export function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("@/resources/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Medium": require("@/resources/fonts/Inter_18pt-Medium.ttf"),
    "Inter-SemiBold": require("@/resources/fonts/Inter_18pt-SemiBold.ttf"),
  });

  return { fontsLoaded, fontError };
}
