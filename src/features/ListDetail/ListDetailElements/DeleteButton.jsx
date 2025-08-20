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
        className={cn(
          "flex justify-end w-[calc(100vw-130px)] h-[44px] rounded-[8px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] text-white bg-purple-600",
          "tablet:w-[200px] tablet:h-[46px]",
          "desktop:w-[92px] desktop:h-[42px]"
        )}
      >
        삭제하기
      </Button>
    </div>
  );
};

export default DeleteButton;
