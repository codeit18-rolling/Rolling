import { createPortal } from "react-dom";
import { cn } from "../../utils";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import useModalLockAndEsc from "./hooks/useModalLockAndESC";
import useModalBackdrop from "./hooks/useModalBackdrop";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  useModalLockAndEsc(isOpen, onClose);
  const onBackdropMouseDown = useModalBackdrop(onClose);

  if (!isOpen) return null;

  const button = [
    {
      btnStyle: "outlined",
      onClick: onClose,
      children: "취소",
    },
    {
      btnStyle: "primary",
      onClick: onConfirm,
      children: "삭제하기",
    },
  ];

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dimmed-opacity"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-desc"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "w-[90vw] max-w-[600px] rounded-[20px] bg-white shadow-lg border border-gray-200",
          "flex flex-col overflow-hidden",
          "tablet:w-[700px]",
          "desktop:w-[700px]"
        )}
      >
        <div className="px-8 pt-9 pb-6 flex items-start gap-4">
          <Icon
            iconName="warning"
            iconSize="ic-24"
            className="bg-red-500 mt-1"
          />
          <div className="flex-1">
            <h2 className="text-[18px] font-semibold leading-7 tracking-[-0.01em] text-gray-900">
              메세지를 포함하여 롤링페이퍼 전체가 삭제됩니다. 진행하시겠습니까?
            </h2>
            <p className="mt-1 text-[14px] leading-6 text-gray-600">
              삭제하면 되돌릴 수 없습니다.
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        <div className="px-8 py-6 flex justify-center gap-3">
          {button.map((button) => (
            <Button
              key={button.children}
              btnStyle={button.btnStyle}
              onClick={button.onClick}
              btnSize="btn-40"
              className={cn(
                "flex-1 text-[14px]",
                "tablet:flex-none tablet:w-[30%]",
                "desktop:flex-none desktop:w-[30%]"
              )}
            >
              {button.children}
            </Button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteModal;
