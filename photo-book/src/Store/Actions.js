import {
  INITIALIZE,
  MOST_LIKED,
  MOST_COMMENTED,
  POST_COMMENT,
  SEARCH_CATEGORY,
} from "./constants/action-types";
export function initilizeFlowers(payload) {
  return { type: INITIALIZE, payload };
}
export function mostLiked() {
  return { type: MOST_LIKED };
}
export function mostCommented() {
  return { type: MOST_COMMENTED };
}
export function searchCategory(payload) {
  return { type: SEARCH_CATEGORY, payload };
}
export function addComment(payload) {
  return { type: POST_COMMENT, payload };
}
