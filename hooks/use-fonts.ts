import { useFonts } from "expo-font";

export function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Thin": require("@/resources/fonts/Inter_18pt-Thin.ttf"),
    "Inter-ThinItalic": require("@/resources/fonts/Inter_18pt-ThinItalic.ttf"),
    "Inter-ExtraLight": require("@/resources/fonts/Inter_18pt-ExtraLight.ttf"),
    "Inter-ExtraLightItalic": require("@/resources/fonts/Inter_18pt-ExtraLightItalic.ttf"),
    "Inter-Light": require("@/resources/fonts/Inter_18pt-Light.ttf"),
    "Inter-LightItalic": require("@/resources/fonts/Inter_18pt-LightItalic.ttf"),
    "Inter-Regular": require("@/resources/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Italic": require("@/resources/fonts/Inter_18pt-Italic.ttf"),
    "Inter-Medium": require("@/resources/fonts/Inter_18pt-Medium.ttf"),
    "Inter-MediumItalic": require("@/resources/fonts/Inter_18pt-MediumItalic.ttf"),
    "Inter-SemiBold": require("@/resources/fonts/Inter_18pt-SemiBold.ttf"),
    "Inter-SemiBoldItalic": require("@/resources/fonts/Inter_18pt-SemiBoldItalic.ttf"),
    "Inter-Bold": require("@/resources/fonts/Inter_18pt-Bold.ttf"),
    "Inter-BoldItalic": require("@/resources/fonts/Inter_18pt-BoldItalic.ttf"),
    "Inter-ExtraBold": require("@/resources/fonts/Inter_18pt-ExtraBold.ttf"),
    "Inter-ExtraBoldItalic": require("@/resources/fonts/Inter_18pt-ExtraBoldItalic.ttf"),
    "Inter-Black": require("@/resources/fonts/Inter_18pt-Black.ttf"),
    "Inter-BlackItalic": require("@/resources/fonts/Inter_18pt-BlackItalic.ttf"),
  });

  return { fontsLoaded, fontError };
}
