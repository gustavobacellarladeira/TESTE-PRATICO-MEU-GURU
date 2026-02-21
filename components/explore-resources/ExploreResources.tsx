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
    lineHeight: 24,
    color: "#111827",
  },
  verTodos: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
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
    height: 108,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    justifyContent: "space-between",
  },
  cardPressed: {
    opacity: 0.75,
  },
  cardLabel: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    color: "#374151",
  },
});
