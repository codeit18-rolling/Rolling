import { useLocation, useNavigate } from "react-router";

// 리스트 페이지 삭제/돌아가기 커스텀 훅
const useNavigateToEdit = (id) => {
  const location = useLocation();
  const isDeleteMode = location.search.includes("delete=true");

  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/post/${id}?delete=true`);
  };

  const navigateToBack = () => {
    navigate(-1);
  };

  return { isDeleteMode, navigateToEdit, navigateToBack };
};

export default useNavigateToEdit;
