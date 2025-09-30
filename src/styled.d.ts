// src/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    colors: {
      background: string;
      surface: string;
      primary: string;
      secondary: string;
      onPrimary: string;
      onSurface: string;
      text: string;
      muted: string;
      border: string;
      danger: string;
      dangerHover: string;
      soft: string;
    };
    fonts: {
      main: string;
      body: string;
      heading: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: string;
  }
}
