import type { FC, ReactElement } from "react";
import { Pressable, View } from "react-native";
import type { SvgProps } from "react-native-svg";

import type { GeneratedIconKeys } from "./icons.generated";
import IconMap from "./icons.generated";
import type { AssetIconProps } from "./types";

export function AssetIcon<T extends GeneratedIconKeys>({
  name,
  color = "#000000",
  fill = "transparent",
  stroke,
  strokeWidth,
  size,
  opacity,
  testID,
  svgProps,
  onPress,
  mode = "fill",
  hitSlop,
  disabled = false,
  ...boxProps
}: AssetIconProps<T>): ReactElement | null {
  const SvgIcon: FC<SvgProps> = IconMap[name];
  const Container = onPress ? Pressable : View;

  return (
    <Container
      disabled={disabled}
      onPress={onPress}
      hitSlop={hitSlop}
      {...boxProps}
    >
      <SvgIcon
        testID={testID}
        color={color}
        stroke={stroke && mode === "outline" ? stroke : undefined}
        strokeWidth={strokeWidth}
        fill={fill && mode === "fill" ? fill : "transparent"}
        opacity={opacity}
        {...(size ? { width: size, height: size } : {})}
        {...svgProps}
      />
    </Container>
  );
}

export default AssetIcon;
