import type { GestureResponderEvent, Insets, ViewProps } from "react-native";
import type { NumberProp, SvgProps } from "react-native-svg";

import type { GeneratedIconKeys } from "./icons.generated";

export type IconMode = "fill" | "outline";

export interface AssetIconProps<T extends GeneratedIconKeys> extends Omit<
  ViewProps,
  "height" | "width" | "opacity"
> {
  name: T;
  size?: NumberProp;
  color?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: NumberProp;
  opacity?: NumberProp;
  onPress?: (event: GestureResponderEvent) => void;
  svgProps?: SvgProps;
  mode?: IconMode;
  hitSlop?: Insets;
  disabled?: boolean;
}
