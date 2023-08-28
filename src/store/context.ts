import { createContext } from "react";
import { initialState } from "./initialState";
import { ContextType } from "./types";

// Create a context with initial values and placeholder functions.
// These functions will be replaced when providing the actual context value using the Provider.
export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => {}, // Placeholder function for dispatch
  updateEmoji: (moodId: number, emoji: string) => {}, // Placeholder function for updating emoji
  updateColor: (moodId: number, color: string) => {}, // Placeholder function for updating color
  selectMood: (moodId: number) => {}, // Placeholder function for selecting mood
});
