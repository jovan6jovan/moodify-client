import { State } from "./types";

export const initialState: State = {
  moods: [
    {
      id: 0,
      name: "Happy",
      color: "bg-yellow-500",
      emoji: "😊",
    },
    {
      id: 1,
      name: "Sad",
      color: "bg-gray-400",
      emoji: "🙁",
    },
    {
      id: 2,
      name: "Dancing",
      color: "bg-red-500",
      emoji: "💃",
    },
    {
      id: 3,
      name: "Let's get wasted!",
      color: "bg-fuchsia-600",
      emoji: "🍻😃",
    },
  ],
  selectedMoodId: null,
};
