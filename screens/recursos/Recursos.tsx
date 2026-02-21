import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { AssetIcon } from "@/components/asset-icon";
import type { GeneratedIconKeys } from "@/components/asset-icon/icons.generated";
import { useStyles } from "@/theme";

import { createStyles } from "./styles";

type ResourceItem = {
  icon: GeneratedIconKeys;
  title: string;
  description: string;
};

const RECURSOS: ResourceItem[] = [
  {
    icon: "cards-icon",
    title: "Flashcards",
    description: "Memorize a matéria\ncom cartões",
  },
  {
    icon: "checklist-icon",
    title: "Provas",
    description: "Crie provas com a IA\nem segundos",
  },
  {
    icon: "photo-icon",
    title: "Imagem",
    description: "Gere imagens únicas\nem segundos",
  },
  {
    icon: "notes-icon",
    title: "Documento",
    description: "Gere documentos\ncompletos",
  },
  {
    icon: "pencil-icon",
    title: "Humanizador",
    description: "Remova o tom de IA\ndo texto",
  },
  {
    icon: "align-justified-icon",
    title: "Resumo",
    description: "Resuma textos\nrapidamente",
  },
];

export default function Recursos() {
  const styles = useStyles(createStyles);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageTitle}>Recursos</Text>
      <View style={styles.grid}>
        {RECURSOS.map((item) => (
          <Pressable
            key={item.title}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.iconWrapper}>
              <AssetIcon name={item.icon} size={24} color="#7A00C6" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
