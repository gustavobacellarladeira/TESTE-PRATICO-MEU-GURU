import React from "react";
import { Pressable, Text, View } from "react-native";

import { AssetIcon } from "@/components/asset-icon";
import type { GeneratedIconKeys } from "../asset-icon/icons.generated";
import { useStyles } from "@/theme";

import { createStyles } from "./styles";

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
  const styles = useStyles(createStyles);

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


