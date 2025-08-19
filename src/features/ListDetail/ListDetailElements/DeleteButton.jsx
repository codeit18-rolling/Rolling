import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router";
import deleteRecipient from "../../../service/ListDetails/deleteRecipientsDetail";
import { cn } from "../../../utils";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  // 카드 전체 삭제 함수
  const deleteButtonHandler = async () => {
    await deleteRecipient(id);
    navigate("/list", { replace: true });
  };

  return (
    <div
      className={cn(
        "flex justify-end fixed order-1 bottom-8 left-8",
        "desktop:ml-auto desktop:w-[130px] desktop:static desktop:order-1"
      )}
    >
      <Button
        onClick={deleteButtonHandler}
        btnStyle="primary"
        className="flex justify-end h-[39px] rounded-[8px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] text-white bg-purple-600 desktop:w-[92px]"
      >
        삭제하기
      </Button>
    </div>
  );
};

export default DeleteButton;
