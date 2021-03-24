import { INITIALIZE } from "./constants/action-types";
const initialState = {
  flowers: [],
};

function rootReducer(state = initialState, action) {
  console.log(action);
  if (action.type === INITIALIZE) {
    return Object.assign({}, state, { flowers: action.payload });
  }
  return state;
}

export default rootReducer;
