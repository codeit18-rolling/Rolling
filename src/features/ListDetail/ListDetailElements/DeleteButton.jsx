import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router";
import deleteRecipient from "../../../service/ListDetails/deleteRecipientsDetail";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  // 카드 전체 삭제 함수
  const deleteButtonHandler = async () => {
    await deleteRecipient(id);
    navigate("/list", { replace: true });
  };

  return (
    <div className="flex justify-end">
      <Button
        onClick={deleteButtonHandler}
        btnStyle="primary"
        className="flex justify-end w-[92px] h-[39px] rounded-[8px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] text-white bg-purple-600"
      >
        삭제하기
      </Button>
    </div>
  );
};

export default DeleteButton;
