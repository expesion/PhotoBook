import { INITIALIZE } from "./constants/action-types";
export function initilizeFlowers(payload) {
  return { type: INITIALIZE, payload };
}
