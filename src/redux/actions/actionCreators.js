export const TOGGLE_TAG = "TOGGLE_TAG";

// make favourite
export function makeFavourite(mentorId, studentId) {
  return {
    type: "MAKE_FAVOURITE",
    mentorId,
    studentId
  };
}

// remove from favourite
export function removeFromFavourite(mentorId, studentId) {
  return {
    type: "REOVE_FROM_FAVOURITE",
    mentorId,
    studentId
  };
}

// select tag
export function toggleTag(tagName) {
  return {
    type: TOGGLE_TAG,
    tagName
  };
}

// toggle available

// click apply button

// show all tags
