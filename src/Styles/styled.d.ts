import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    keyBlue: string;
    keyDeepBlue: string;
    black: string;
    headerBg: string;
    blackBg: string;
    white: string;
    cream: string;
    gray: string;
    beige: string;
    headerText: string;
    fontSizeS: string;
    fontSizeM: string;
    fontSizeL: string;
    fontSizeXL: string;
    fontSizeXXL: string;
    fontSizeXXXL: string;
    deviceScreen: { [T in "mobile" | "tablet" | "laptop"]: string };
  }
}
