import React from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/theme";

import { createStyles } from "./styles";

export default function Screen3() {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 3</Text>
    </View>
  );
}
