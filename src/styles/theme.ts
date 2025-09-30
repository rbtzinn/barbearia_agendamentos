import { DefaultTheme } from "styled-components";

const base = {
  fonts: {
    main: "Inter, sans-serif",
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: "8px",
};

export const darkTheme: DefaultTheme = {
  mode: "dark",
  colors: {
    background: "#0c0e14",
    surface: "#1a1d24",
    primary: "#6366f1",
    secondary: "#9333ea",
    onPrimary: "#ffffff",
    onSurface: "#e5e7eb",
    text: "#f9fafb",
    muted: "#9ca3af",
    border: "#2d2f36",
    danger: "#ef4444",
    dangerHover: "#dc2626",
    soft: "#374151",
  },
  ...base,
};

export const lightTheme: DefaultTheme = {
  mode: "light",
  colors: {
    background: "#ffffff",
    surface: "#f9fafb",
    primary: "#6366f1",
    secondary: "#9333ea",
    onPrimary: "#ffffff",
    onSurface: "#111827",
    text: "#111827",
    muted: "#6b7280",
    border: "#e5e7eb",
    danger: "#ef4444",
    dangerHover: "#dc2626",
    soft: "#f3f4f6",
  },
  ...base,
};
