// scripts/generate-icons.js
const fs = require("fs");
const path = require("path");

const iconsPath = path.resolve(__dirname, "../assets/icons");
const outputPath = path.resolve(
  __dirname,
  "../components/asset-icon/icons.generated.ts",
);

const RESERVED_KEYWORDS = ["delete", "package", "default", "class", "function"];

const toCamelCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "");
};

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const retrieveIcons = () => {
  if (!fs.existsSync(iconsPath)) {
    console.error(`Icons directory not found: ${iconsPath}`);
    process.exit(1);
  }
  return fs.readdirSync(iconsPath).filter((f) => f.endsWith(".svg"));
};

(async () => {
  const icons = retrieveIcons();

  if (icons.length === 0) {
    console.warn("No SVG icons found in", iconsPath);
    return;
  }

  const iconMap = {};
  const imports = [];

  icons.forEach((fileName) => {
    const iconName = fileName.replace(".svg", "");
    let importName = capitalizeFirst(
      toCamelCase(iconName).replace(/[- ]+/g, ""),
    );

    if (RESERVED_KEYWORDS.includes(importName.toLowerCase())) {
      importName = `${importName}Icon`;
    }

    iconMap[iconName] = importName;
    imports.push(`import ${importName} from "@/assets/icons/${fileName}";`);
  });

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let content = 'import type { SvgProps } from "react-native-svg";\n\n';
  content += imports.join("\n");
  content += "\n\nconst IconMap = {\n";

  Object.keys(iconMap).forEach((key, index, arr) => {
    content += `  "${key}": ${iconMap[key]}${index < arr.length - 1 ? "," : ""}\n`;
  });

  content += "} as const;\n\n";
  content += "export default IconMap;\n\n";
  content += "export type GeneratedIconKeys = keyof typeof IconMap;\n\n";
  content +=
    "export type IconProps = SvgProps & { name: GeneratedIconKeys };\n";

  fs.writeFileSync(outputPath, content);
  console.log(`✅ Icons generated successfully! (${icons.length} icons)`);
  console.log(`   Output: ${outputPath}`);
})();
