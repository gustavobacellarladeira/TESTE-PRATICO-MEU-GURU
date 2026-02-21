import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { AppHeader } from "@/components/app-header";
import { AssetIcon } from "@/components/asset-icon";
import { useTheme } from "@/theme";

type TabBarIconProps = { color: string; focused: boolean };

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabIconActive,
        tabBarInactiveTintColor: theme.colors.tabIconInactive,
        tabBarStyle: {
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
      <Tabs.Screen
        name="index"
        options={{
          title: "Tela 1",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="home-icon" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen2"
        options={{
          title: "Tela 2",
          tabBarIcon: ({ color }: TabBarIconProps) => (
            <AssetIcon name="tools-icon" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="screen3"
        options={{
          title: "Tela 3",
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
      />
    </Tabs>
  );
}
