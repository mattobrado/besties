import { BACKGROUNDS } from "../theme/colors";

const getBackground = (color?: string) => {
  if (!color) return BACKGROUNDS.default;
  const { r, g, b } = hex2rgb(color);
  const lowerBrightnessAmount = 100;
  const increaseBrightnessAmount = 59;
  return `linear-gradient(90deg, rgb(${r - lowerBrightnessAmount}, ${
    g - lowerBrightnessAmount
  }, ${b - lowerBrightnessAmount}), rgb(${r + increaseBrightnessAmount}, ${
    g + increaseBrightnessAmount
  }, ${b + increaseBrightnessAmount}))`;
};

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // return {r, g, b}
  return { r, g, b };
};

export default getBackground;
