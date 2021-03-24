import {
  INITIALIZE,
  TOGGLE_LIKE,
  MOST_COMMENTED,
  MOST_LIKED,
  SEARCH_CATEGORY,
  POST_COMMENT,
} from "./constants/action-types";
const initialState = {
  flowers: [],
  search: "",
};

function rootReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case INITIALIZE:
      let updatedFlowers = action.payload.map((flower) => ({
        ...flower,
        likeStatus: "Like",
      }));
      return Object.assign({}, state, { flowers: updatedFlowers });
    case TOGGLE_LIKE: {
      let flowerId = action.payload;
      let flower = state.flowers.find((flower) => flower.id === flowerId);
      if (flower.likeStatus === "Like") {
        flower.likeStatus = "Dislike";
        flower.likes++;
      } else {
        flower.likeStatus = "Like";
        flower.likes--;
      }
      console.log(flower);
      state.flowers[flowerId] = { ...flower };
      return {
        ...state,
        flowers: [...state.flowers],
      };
    }
    case MOST_LIKED: {
      let sortedFlowers = state.flowers.sort((a, b) => -a.likes + b.likes);
      return {
        ...state,
        flowers: [...sortedFlowers],
      };
    }
    case MOST_COMMENTED:
      let sortedFlowers = state.flowers.sort(
        (a, b) => -a.comments.length + b.comments.length
      );
      return {
        ...state,
        flowers: [...sortedFlowers],
      };
    case POST_COMMENT: {
      let modifiedFlowers = state.flowers[action.payload.id];
      modifiedFlowers.comments.push(action.payload.comment);
      state.flowers[action.payload.id] = modifiedFlowers;
      return {
        ...state,
        flowers: [...state.flowers],
      };
    }
    case SEARCH_CATEGORY: {
      console.log(`from reducer ${action.payload}`);
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
