import React, { useState } from "react";
import { ScrollView, View } from "react-native";

import { ExploreResources } from "@/components/explore-resources";
import { GradientText } from "@/components/gradient-text";
import { HomeCard } from "@/components/home-card";
import { HomeTabs } from "@/components/home-tabs";
import { useStyles } from "@/theme";

import { createStyles } from "./styles";

type Tab = "ia" | "tutores";

export default function Home() {
  const styles = useStyles(createStyles);
  const [activeTab, setActiveTab] = useState<Tab>("ia");

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <GradientText
        style={styles.title}
        colors={["#7A00C6", "#8453FE", "#8682FF", "#56B8E2"]}
      >
        Resolva suas atividades
      </GradientText>

      <View style={styles.tabsContainer}>
        <HomeTabs onChange={(tab) => setActiveTab(tab as Tab)} />
      </View>

      <View style={styles.cardContainer}>
        <HomeCard activeTab={activeTab} />
      </View>

      <View style={styles.exploreContainer}>
        <ExploreResources />
      </View>
    </ScrollView>
  );
}
