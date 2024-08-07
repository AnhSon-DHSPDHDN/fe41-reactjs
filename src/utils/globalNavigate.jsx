import { useNavigate } from "react-router-dom";

export let globalNavigate = null;

const GlobalNavigate = () => {
  globalNavigate = useNavigate();
  return null
}

export default GlobalNavigate
