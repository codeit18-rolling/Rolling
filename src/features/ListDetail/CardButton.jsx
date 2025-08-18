import useMediaQuery from "../../features/HeaderService/Hooks/useMediaQuery";
import deleteRecipient from "../../service/ListDetails/deleteRecipientsDetail";
import { Link, useNavigate } from "react-router";
import ButtonGroup from "./ListDetailElements/ButtonGroup";
import {
  EditButton,
  DeleteButton,
  BackButton,
} from "./ListDetailElements/ActionButton";

const CardButton = ({ isDeleteMode, navigateToEdit, navigateToBack, id }) => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1199px)");

  // 카드 전체 삭제 함수
  const deleteButtonHandler = async () => {
    await deleteRecipient(id);
    navigate("/list", { replace: true });
  };

  return (
    <div className="flex gap-2 justify-end">
      {/* 수정 모드 */}
      <Link
        to={"/list"}
        className="flex items-center justify-center w-[141px] h-[39px] border border-purple-600 bg-white text-purple-600 rounded-[6px] font-normal text-16 leading-[26px] tracking-[-0.01em]"
      >
        목록으로 가기
      </Link>
      {!isDeleteMode && (
        <ButtonGroup>
          <EditButton navigateToEdit={navigateToEdit} />
        </ButtonGroup>
      )}

      {/* 삭제 모드 */}
      {isDeleteMode && (
        <ButtonGroup>
          <DeleteButton
            deleteButtonHandler={deleteButtonHandler}
            isTablet={isTablet}
          />
          <BackButton navigateToBack={navigateToBack} isTablet={isTablet} />
        </ButtonGroup>
      )}
    </div>
  );
};

export default CardButton;
