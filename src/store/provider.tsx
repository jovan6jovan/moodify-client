import { FC, ReactNode, useReducer } from "react";
import { Context } from "./context";
import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { ActionType, ContextType } from "./types";

interface Props {
  children: ReactNode;
}

export const Provider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateEmoji = (moodId: number, emoji: string) => {
    dispatch({
      type: ActionType.EDIT_MOOD_EMOJI,
      payload: {
        index: moodId,
        newValue: emoji,
      },
    });
  };

  const updateColor = (moodId: number, color: string) => {
    dispatch({
      type: ActionType.EDIT_MOOD_COLOR,
      payload: {
        index: moodId,
        newValue: color,
      },
    });
  };

  const selectMood = (moodId: number) => {
    dispatch({
      type: ActionType.SELECT_MOOD,
      payload: {
        moodId,
      },
    });
  };

  const store: ContextType = {
    state,
    dispatch,
    updateEmoji,
    updateColor,
    selectMood,
  };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};
