import { createContext } from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = `${ThemeEnum}`;

export const ThemeContext = createContext<Theme>("light");
