import type { SvgProps } from "react-native-svg";

import AlignJustifiedIcon from "@/assets/icons/align-justified-icon.svg";
import BgRemovalIcon from "@/assets/icons/bg_removal-icon.svg";
import CameraFullIcon from "@/assets/icons/camera-full-icon.svg";
import CameraIcon from "@/assets/icons/camera-icon.svg";
import CardsIcon from "@/assets/icons/cards-icon.svg";
import ChalkboardMiniIcon from "@/assets/icons/chalkboard-mini-icon.svg";
import ChecklistIcon from "@/assets/icons/checklist-icon.svg";
import FaChalkboardTeacherIcon from "@/assets/icons/fa-chalkboard-teacher-icon.svg";
import FileTextIcon from "@/assets/icons/file-text-icon.svg";
import FireIcon from "@/assets/icons/fire-icon.svg";
import HomeIcon from "@/assets/icons/home-icon.svg";
import LogoIcon from "@/assets/icons/logo-icon.svg";
import LogoMeuguruIcon from "@/assets/icons/logo-meuguru-icon.svg";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import MessageIcon from "@/assets/icons/message-icon.svg";
import MetalToolsIcon from "@/assets/icons/metal-tools-icon.svg";
import MicrophoneIcon from "@/assets/icons/microphone-icon.svg";
import NotesIcon from "@/assets/icons/notes-icon.svg";
import PencilIcon from "@/assets/icons/pencil-icon.svg";
import PhotoIcon from "@/assets/icons/photo-icon.svg";
import PlusIcon from "@/assets/icons/plus-icon.svg";
import ToolsIcon from "@/assets/icons/tools-icon.svg";

const IconMap = {
  "align-justified-icon": AlignJustifiedIcon,
  "bg_removal-icon": BgRemovalIcon,
  "camera-full-icon": CameraFullIcon,
  "camera-icon": CameraIcon,
  "cards-icon": CardsIcon,
  "chalkboard-mini-icon": ChalkboardMiniIcon,
  "checklist-icon": ChecklistIcon,
  "fa-chalkboard-teacher-icon": FaChalkboardTeacherIcon,
  "file-text-icon": FileTextIcon,
  "fire-icon": FireIcon,
  "home-icon": HomeIcon,
  "logo-icon": LogoIcon,
  "logo-meuguru-icon": LogoMeuguruIcon,
  "menu-icon": MenuIcon,
  "message-icon": MessageIcon,
  "metal-tools-icon": MetalToolsIcon,
  "microphone-icon": MicrophoneIcon,
  "notes-icon": NotesIcon,
  "pencil-icon": PencilIcon,
  "photo-icon": PhotoIcon,
  "plus-icon": PlusIcon,
  "tools-icon": ToolsIcon
} as const;

export default IconMap;

export type GeneratedIconKeys = keyof typeof IconMap;

export type IconProps = SvgProps & { name: GeneratedIconKeys };
