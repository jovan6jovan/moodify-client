import { FC, useContext } from "react";
import { Context } from "../../store/context";
import MoodItem from "./MoodItem";

const MoodSelector: FC = () => {
  const { state, selectMood } = useContext(Context);
  const { moods, selectedMoodId } = state;

  const selectValueToUse = selectedMoodId ?? "";
  // Can't use nullish coalescing operator here because 0 is a valid value for selectedMoodId
  const shouldRenderMoodItem =
    selectedMoodId !== null && selectedMoodId !== undefined;

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto max-w-xl">
        <select
          value={selectValueToUse}
          onChange={(e) => selectMood(Number(e.target.value))}
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="" disabled>
            Select a mood
          </option>
          {moods.map((mood) => (
            <option key={mood.id} value={mood.id}>
              {mood.name}
            </option>
          ))}
        </select>
        {shouldRenderMoodItem && (
          <MoodItem
            key={selectedMoodId}
            mood={moods[selectedMoodId as number]}
          />
        )}
      </div>
    </div>
  );
};

export default MoodSelector;
