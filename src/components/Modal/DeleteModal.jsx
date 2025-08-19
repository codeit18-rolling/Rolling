import { createPortal } from "react-dom";
import { cn } from "../../utils";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import useModalLockAndEsc from "./hooks/useModalLockAndESC";
import useModalBackdrop from "./hooks/useModalBackdrop";

const style = {
  buttonBase:
    "flex-1 h-9 px-4 rounded-lg text-[14px] leading-[44px] tablet:min-w-[120px]",
};

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  useModalLockAndEsc(isOpen, onClose);
  const onBackdropMouseDown = useModalBackdrop(onClose);

  if (!isOpen) return null;

  const button = [
    {
      btnStyle: "outlined",
      onClick: onClose,
      className: cn(style.buttonBase, "border border-gray-100 text-gray-700"),
      children: "취소",
    },
    {
      btnStyle: "primary",
      onClick: onConfirm,
      className: cn(style.buttonBase, "font-semibold text-white"),
      children: "삭제하기",
    },
  ];

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
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
          "tablet:w-[600px]",
          "desktop:w-[600px]"
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
              정말 롤링페이퍼를 삭제할까요?
            </h2>
            <p className="mt-1 text-[14px] leading-6 text-gray-600">
              삭제하면 되돌릴 수 없습니다.
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        <div className="px-8 py-6 flex gap-3">
          {button.map((button) => (
            <Button
              key={button.children}
              btnStyle={button.btnStyle}
              onClick={button.onClick}
              className={button.className}
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
