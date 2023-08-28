import { Dispatch } from "react";

export enum ActionType {
  EDIT_MOOD_COLOR = "EDIT_MOOD_COLOR",
  EDIT_MOOD_EMOJI = "EDIT_MOOD_EMOJI",
  SELECT_MOOD = "SELECT_MOOD",
}

export interface Mood {
  id: number;
  name: string;
  color: string;
  emoji: string;
}

export interface EditMoodPayload {
  index: number;
  newValue: string;
}

export interface SelectMoodPayload {
  moodId: number;
}

type ActionPayload = EditMoodPayload | SelectMoodPayload;

export interface Action {
  type: ActionType;
  payload: ActionPayload;
}

export interface State {
  moods: Mood[];
  selectedMoodId?: null | number;
}

export interface ContextType {
  state: State;
  dispatch: Dispatch<Action>;
  updateEmoji: (moodId: number, emoji: string) => void;
  updateColor: (moodId: number, color: string) => void;
  selectMood: (moodId: number) => void;
}
