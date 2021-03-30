import {
  INITIALIZE,
  TOGGLE_LIKE,
  MOST_COMMENTED,
  MOST_LIKED,
  SEARCH_CATEGORY,
  POST_COMMENT,
  DELETE_COMMENT,
  TOGGLE_MODAL
} from "./constants/action-types";
const initialState = {
  flowers: [],
  search: "",
  modal:{show:false,url:""}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      let updatedFlowers = action.payload.map((flower) => ({
        ...flower,
        likeStatus: "Like",
      }));
      return Object.assign({}, state, { flowers: updatedFlowers });
    case TOGGLE_LIKE: {
      let flowerId = action.payload;
      state.flowers.map(flower=>{
        if(flower.id===flowerId){
          if (flower.likeStatus === "Like") {
            flower.likeStatus = "Unlike";
            flower.likes++;
          } else {
            flower.likeStatus = "Like";
            flower.likes--;
          }
        }
        return flower;
      })
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
      state.flowers.map(flower=>{
        if(flower.id===action.payload.id){
          flower.comments.push(action.payload.comment);
        }
        return flower
      })
      return {
        ...state,
        flowers: [...state.flowers],
      };
    }
    case SEARCH_CATEGORY: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case DELETE_COMMENT:{
      state.flowers.map(flower=>{
        if(flower.id===action.payload.id){
          flower.comments.splice(action.payload.commentId,1);
        }
        return flower;
      })
      return {
        ...state,
        flowers:[...state.flowers]

      }
    }
    case TOGGLE_MODAL:{
      let _=state.flowers
      return{
        ...state,modal:{show:!state.modal.show,url:action?.payload?.id>=0?_[_.findIndex(flower=>flower.id===action.payload.id)].url:""}
      }
    }
    default:
      return state;
  }
}

export default rootReducer;
