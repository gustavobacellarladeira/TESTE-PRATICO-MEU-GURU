import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { AssetIcon } from "@/components/asset-icon";
import type { GeneratedIconKeys } from "../asset-icon/icons.generated";

type ResourceItem = {
  icon: GeneratedIconKeys;
  label: string;
};

const RESOURCES: ResourceItem[] = [
  { icon: "camera-icon", label: "Resolvedor de\ntarefas" },
  { icon: "microphone-icon", label: "Gravador de aula" },
  { icon: "checklist-icon", label: "Gerar prova" },
  { icon: "cards-icon", label: "Gerar flashcard" },
];

type ExploreResourcesProps = {
  onVerTodos?: () => void;
  onItemPress?: (label: string) => void;
};

export function ExploreResources({
  onVerTodos,
  onItemPress,
}: ExploreResourcesProps) {
  return (
    <View style={styles.wrapper}>
      {/* Header row */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore mais recursos</Text>
        <Pressable onPress={onVerTodos}>
          <Text style={styles.verTodos}>Ver todos</Text>
        </Pressable>
      </View>

      {/* 2x2 Grid */}
      <View style={styles.grid}>
        {RESOURCES.map((item) => (
          <Pressable
            key={item.label}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => onItemPress?.(item.label)}
          >
            <AssetIcon name={item.icon} size={28} color="#374151" />
            <Text style={styles.cardLabel}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  verTodos: {
    fontFamily: "Inter-Medium",
    fontSize: 14,
    fontWeight: "500",
    color: "#7A00C6",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  cardPressed: {
    opacity: 0.75,
  },
  cardLabel: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#374151",
    lineHeight: 20,
  },
});
