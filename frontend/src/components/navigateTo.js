import { useNavigate } from "react-router-dom"

/* Only use this function when component has useNavigate only */
export function navigateTo(navigateFunc, navigatePath) {
  navigateFunc(navigatePath);
  window.scrollTo(0, 0);
}