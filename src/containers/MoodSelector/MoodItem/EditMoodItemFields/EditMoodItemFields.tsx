import { FC } from "react";
import { EditMoodItemFieldsProps } from "./EditMoodItemFields.types";

const EditMoodItemFields: FC<EditMoodItemFieldsProps> = ({
  editedEmoji,
  setEditedEmoji,
  editedColor,
  setEditedColor,
  mood,
  handleSaveClick,
  handleCancelClick,
}) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div>
        <label htmlFor="emoji" className="font-semibold mb-1">
          Emoji:
        </label>
        <input
          id="emoji"
          type="text"
          placeholder="Enter an emoji"
          className="input-style"
          value={editedEmoji}
          onChange={(event) => setEditedEmoji(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color" className="font-semibold mb-1">
          Color:
        </label>
        <input
          id="color"
          type="text"
          placeholder="Enter a color code"
          className="input-style"
          value={editedColor}
          onChange={(event) => setEditedColor(event.target.value)}
        />
        <p className="text-sm text-white mt-1">
          {/* TODO: Change this helper text and see how colors can be customized to be easier for the user */}
          For the color, please enter a text that follows the rule: bg<b>-</b>
          $COLOR_NAME<b>-</b>$VALUE_BETWEEN_100_AND_900 (e.g., bg-green-500).
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleSaveClick(mood)}
          className="flex items-center px-2 py-1 rounded-md bg-green-500 text-white"
        >
          <span role="img" aria-label="Save" className="pr-1">
            💾
          </span>
          Save
        </button>
        <button
          onClick={() => handleCancelClick(mood)}
          className="flex items-center px-2 py-1 rounded-md bg-red-500 text-white"
        >
          <span role="img" aria-label="Cancel" className="pr-1">
            🚫
          </span>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditMoodItemFields;
