import { Dispatch, SetStateAction } from "react";
import { Mood } from "../../../../store/types";

export interface EditMoodItemFieldsProps {
  editedEmoji: string;
  setEditedEmoji: Dispatch<SetStateAction<string>>;
  editedColor: string;
  setEditedColor: Dispatch<SetStateAction<string>>;
  mood: Mood;
  handleSaveClick: (mood: Mood) => void;
  handleCancelClick: (mood: Mood) => void;
}
