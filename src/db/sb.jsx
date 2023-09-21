import { K_KOOP_USER } from "../helpers/const";

export function GetLoogedInUser() {
  let user = localStorage.getItem(K_KOOP_USER) || false;

  return user && JSON.parse(user);
}
