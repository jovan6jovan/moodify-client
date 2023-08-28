import { Mood, State } from "./types";

/**
 * Update a specific property of a mood object at the given index in an array of moods.
 *
 * @param {Mood[]} moods - The array of mood objects.
 * @param {number} index - The index of the mood to update.
 * @param {string} propertyName - The name of the property to update (e.g., 'color', 'emoji').
 * @param {string} newValue - The new value for the specified property.
 * @returns {Mood[]} The updated array of mood objects.
 */
export const updateMoodProperty = (
  moods: Mood[],
  index: number,
  propertyName: string,
  newValue: string
): Mood[] =>
  moods.map((mood, i) =>
    i === index ? { ...mood, [propertyName]: newValue } : mood
  );

/**
 * Update the moods array in the state with the provided updated moods.
 *
 * @param {State} state - The current state.
 * @param {Mood[]} updatedMoods - The array of mood objects with updated values.
 * @returns {State} The updated state with the new moods array.
 */
export const updateMoodsState = (
  state: State,
  updatedMoods: Mood[]
): State => ({
  ...state,
  moods: updatedMoods,
});
