import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet } from "react-native";

import { AppHeader } from "@/components/app-header";
import { AssetIcon } from "@/components/asset-icon";
import { ChatHeader } from "@/screens/chat/ChatHeader";
import { useTheme } from "@/theme";

type TabBarIconProps = { color: string; focused: boolean };

export default function TabLayout() {
  const theme = useTheme();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const show = Keyboard.addListener(showEvent, () =>
      setKeyboardVisible(true),
    );
    const hide = Keyboard.addListener(hideEvent, () =>
      setKeyboardVisible(false),
    );
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <Tabs
      initialRouteName="chat"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabIconActive,
        tabBarInactiveTintColor: theme.colors.tabIconInactive,
        tabBarStyle: keyboardVisible
          ? { display: "none" }
          : {
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              borderTopWidth: 0,
              elevation: 0,
              height: 81,
              paddingTop: 16,
              paddingBottom: 16,
              paddingHorizontal: 8,
            },
        tabBarBackground: () => (
          <BlurView
            intensity={30}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
        headerShown: true,
        header: () => <AppHeader />,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="home-icon" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recursos"
        options={{
          title: "Recursos",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="tools-icon" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          header: () => <ChatHeader />,
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="message-icon" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen4"
        options={{
          title: "Tela 4",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="camera-icon" size={24} color={color} />
          ),
        }}
        listeners={{ tabPress: (e) => e.preventDefault() }}
      />
      <Tabs.Screen
        name="screen5"
        options={{
          title: "Tela 5",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon
              name="fa-chalkboard-teacher-icon"
              size={24}
              color={color}
            />
          ),
        }}
        listeners={{ tabPress: (e) => e.preventDefault() }}
      />
    </Tabs>
  );
}
