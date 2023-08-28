import { FC, useContext, useState } from "react";
import { Context } from "../../../store/context";
import { Mood } from "../../../store/types";
import EditMoodItemFields from "./EditMoodItemFields";
import { MoodItemProps } from "./MoodItem.types";

const MoodItem: FC<MoodItemProps> = ({ mood }) => {
  const { updateEmoji, updateColor } = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmoji, setEditedEmoji] = useState(mood.emoji);
  const [editedColor, setEditedColor] = useState(mood.color);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (mood: Mood) => {
    updateEmoji(mood.id, editedEmoji);
    updateColor(mood.id, editedColor);
    setIsEditing(false);
  };

  const handleCancelClick = (mood: Mood) => {
    setEditedEmoji(mood.emoji);
    setEditedColor(mood.color);
    setIsEditing(false);
  };

  return (
    <div key={mood.id} className={`rounded-lg p-4 ${mood.color} mt-2 max-w-lg`}>
      <h2 className="text-xl font-semibold">
        {mood.name} {mood.emoji}
      </h2>
      {isEditing ? (
        <EditMoodItemFields
          editedEmoji={editedEmoji}
          setEditedEmoji={setEditedEmoji}
          editedColor={editedColor}
          setEditedColor={setEditedColor}
          mood={mood}
          handleSaveClick={handleSaveClick}
          handleCancelClick={handleCancelClick}
        />
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default MoodItem;
