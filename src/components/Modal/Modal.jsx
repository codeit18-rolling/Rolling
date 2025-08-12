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
    <div onMouseDown={onBackdropMouseDown}>
      <div role="dialog" aria-modal="true">
        <div>
          <div>
            <img src={profileImageURL} alt={`${sender} 프로필`} />
            <div>
              <div>
                From. <span>{sender}</span>
              </div>
              <span>{relationship}</span>
            </div>
          </div>
          <span>{formattedDate}</span>
        </div>

        <div />

        <div>{content}</div>

        <div>
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
