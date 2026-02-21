import React from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/theme";

import { createStyles } from "./styles";

export default function Screen1() {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 1</Text>
    </View>
  );
}
