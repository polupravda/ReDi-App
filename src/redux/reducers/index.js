import { TOGGLE_TAG } from "../actions/actionCreators";

export const tagsReducer = (
  state = [
    {
      tagName: "HTML",
      isSelected: false
    },
    {
      tagName: "CSS",
      isSelected: false
    },
    {
      tagName: "JS",
      isSelected: false
    }
  ],
  action
) => {
  console.log(action)
  switch (action.type) {
    case TOGGLE_TAG:
      console.log(state)
      return state
      // return Object.assign({}, state, {
        
      // })
    default:
      return state;
  }
};

