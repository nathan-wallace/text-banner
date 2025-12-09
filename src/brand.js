import { colorTokens } from "./tokens/colors";

export const brand = {
  logoUrl:
    "https://www.hhs.gov/sites/default/files/hhs-symbol-2022.png",
  fonts: {
    primary:
      '"Source Sans Pro Web", "Helvetica Neue", Helvetica, Arial, sans-serif',
    secondary:
      '"Arial Black", "Helvetica Black", Helvetica, Arial, sans-serif',
    tertiary:
      '"Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: colorTokens.brand.primary[500],
    secondary: colorTokens.brand.secondary[500],
    accent: colorTokens.status.info,
  },
};
