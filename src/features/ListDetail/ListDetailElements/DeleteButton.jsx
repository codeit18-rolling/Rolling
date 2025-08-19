import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router";
import deleteRecipient from "../../../service/ListDetails/deleteRecipientsDetail";
import { cn } from "../../../utils";
import { useState } from "react";
import DeleteModal from "../../../components/Modal/DeleteModal";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
        onClick={() => setIsDeleteModalOpen(true)}
        btnStyle="primary"
        btnSize="btn-40"
        className={cn(
          "flex justify-end w-[calc(100vw-130px)] h-[44px] leading-[26px] tracking-[-0.01em] text-nowrap",
          "tablet:w-[200px] tablet:h-[46px]",
          "desktop:h-[42px]"
        )}
      >
        롤링페이퍼 삭제하기
      </Button>

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={deleteButtonHandler}
        />
      )}
    </div>
  );
};

export default DeleteButton;
