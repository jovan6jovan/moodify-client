import {
  Action,
  ActionType,
  EditMoodPayload,
  SelectMoodPayload,
  State,
} from "./types";
import { updateMoodProperty, updateMoodsState } from "./utils";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.EDIT_MOOD_COLOR: {
      const { index, newValue } = action.payload as EditMoodPayload;

      const updatedMoods = updateMoodProperty(
        state.moods,
        index,
        "color",
        newValue
      );

      return updateMoodsState(state, updatedMoods);
    }
    case ActionType.EDIT_MOOD_EMOJI: {
      const { index, newValue } = action.payload as EditMoodPayload;

      const updatedMoods = updateMoodProperty(
        state.moods,
        index,
        "emoji",
        newValue
      );

      return updateMoodsState(state, updatedMoods);
    }
    case ActionType.SELECT_MOOD: {
      const { moodId } = action.payload as SelectMoodPayload;

      return {
        ...state,
        selectedMoodId: moodId,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
