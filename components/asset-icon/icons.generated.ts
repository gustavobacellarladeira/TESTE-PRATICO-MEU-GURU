import type { SvgProps } from "react-native-svg";

import CameraIcon from "@/assets/icons/camera-icon.svg";
import FaChalkboardTeacherIcon from "@/assets/icons/fa-chalkboard-teacher-icon.svg";
import FireIcon from "@/assets/icons/fire-icon.svg";
import HomeIcon from "@/assets/icons/home-icon.svg";
import LogoMeuguruIcon from "@/assets/icons/logo-meuguru-icon.svg";
import MessageIcon from "@/assets/icons/message-icon.svg";
import ToolsIcon from "@/assets/icons/tools-icon.svg";

const IconMap = {
  "camera-icon": CameraIcon,
  "fa-chalkboard-teacher-icon": FaChalkboardTeacherIcon,
  "fire-icon": FireIcon,
  "home-icon": HomeIcon,
  "logo-meuguru-icon": LogoMeuguruIcon,
  "message-icon": MessageIcon,
  "tools-icon": ToolsIcon
} as const;

export default IconMap;

export type GeneratedIconKeys = keyof typeof IconMap;

export type IconProps = SvgProps & { name: GeneratedIconKeys };
