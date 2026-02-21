import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { AssetIcon } from "@/components/asset-icon";
import type { GeneratedIconKeys } from "@/components/asset-icon/icons.generated";
import { useStyles } from "@/theme";

import { createStyles } from "./styles";

type Chip = { icon: GeneratedIconKeys; label: string };

const CHIPS: Chip[] = [
  { icon: "logo-icon", label: "Resolvedor de tarefas" },
  { icon: "metal-tools-icon", label: "Explorar recursos" },
  { icon: "camera-icon", label: "Enviar foto da questão" },
  {
    icon: "fa-chalkboard-teacher-icon",
    label: "Resolver atividade com Tutores",
  },
];

export default function Chat() {
  const styles = useStyles(createStyles);
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {/* Body */}
        <View style={styles.body}>
          {/* Greeting */}
          <View style={styles.greeting}>
            <AssetIcon name="logo-icon" size={28} color="#7A00C6" />
            <Text style={styles.greetingText}>Olá, Lucas!</Text>
          </View>

          <Text style={styles.subtitle}>Como posso te ajudar?</Text>

          {/* Chips */}
          <View style={styles.chipsWrapper}>
            {CHIPS.map((chip) => (
              <Pressable
                key={chip.label}
                style={({ pressed }) => [
                  styles.chip,
                  pressed && styles.chipPressed,
                ]}
                onPress={() => inputRef.current?.focus()}
              >
                <AssetIcon name={chip.icon} size={18} color="#7A00C6" />
                <Text style={styles.chipLabel}>{chip.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Input bar */}
      <View style={styles.inputBarWrapper}>
        <View style={styles.inputBar}>
          <Pressable style={styles.plusButton}>
            <Ionicons name="add" size={20} color="#374151" />
          </Pressable>

          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Pergunte ou tire foto"
            placeholderTextColor="#9CA3AF"
            value={text}
            onChangeText={setText}
            multiline
          />

          <Pressable style={styles.micButton}>
            <Ionicons name="mic-outline" size={20} color="#374151" />
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
