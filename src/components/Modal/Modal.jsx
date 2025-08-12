import { createPortal } from "react-dom";
import Button from "../Button/Button";

const Modal = ({
  isOpen,
  onClose,
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const onBackdropMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const formattedDate = createdAt
    ? new Date(createdAt)
        .toLocaleDateString("ko-KR")
        .replace(/\./g, ".")
        .replace(/\s/g, "")
    : "";

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-99 flex bg-black/40 items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="rounded-[20px] bg-white shadow-lg border border-gray-200 p-6 w-[600px] h-[476px] max-w-[90vw] max-h-[90vh]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profileImageURL}
              alt={`${sender} 프로필`}
              className="size-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="text-20 font-normal">
                From. <span className="text-24 font-bold">{sender}</span>
              </div>
              <span className="inline-flex w-fit px-2 py-0.5 mt-1 rounded-md">
                {relationship}
              </span>
            </div>
          </div>
          <span className="text-14 font-normal text-gray-400">
            {formattedDate}
          </span>
        </div>

        <div className="my-4 h-px bg-gray-200" />

        <div className="h-[260px] overflow-y-auto pr-1">{content}</div>

        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="primary"
            btnSize="btn-40"
            className="w-[120px]"
            onClick={onConfirm ?? onClose}
          >
            확인
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
