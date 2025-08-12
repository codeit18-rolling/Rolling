import { createPortal } from "react-dom";

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

  const formattedDate = createdAt
    ? new Date(createdAt)
        .toLocaleDateString("ko-KR")
        .replace(/\./g, ".")
        .replace(/\s/g, "")
    : "";

  return createPortal(
    <div
      // onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-99 flex bg-black/40 items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="rounded-[20px] bg-white shadow-lg border border-gray-200 p-6 w-[600px] h-[476px] max-w-[90vw] max-h-[90vh]"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profileImageURL}
              alt={`${sender} 프로필`}
              className="size-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <div className="">
                From. <span>{sender}</span>
              </div>
              <span className="inline-flex w-fit px-2 py-0.5 mt-1 rounded-md">
                {relationship}
              </span>
            </div>
          </div>
          <span>{formattedDate}</span>
        </div>

        <div className="my-4 h-px bg-gray-200" />

        <div className="h-[260px] overflow-y-auto pr-1">{content}</div>

        <div className="mt-6 flex justify-center">
          <button type="button" onClick={onConfirm ?? onClose}>
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
