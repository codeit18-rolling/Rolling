import { useNavigate } from "react-router";

const useNavigateToEdit = (id) => {
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/post/${id}?delete=true`);
  };

  const navigateToBack = () => {
    navigate(`/post/${id}`);
  };

  return { navigateToEdit, navigateToBack };
};

export default useNavigateToEdit;
