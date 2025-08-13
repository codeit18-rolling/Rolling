import { createPortal } from "react-dom";
import { dateFunc } from "../../utils/dateFunc";
import ModalHeader from "./ModalElements/ModalHeader";
import ModalContent from "./ModalElements/ModalContent";
import ModalFooter from "./ModalElements/ModalFooter";

const Modal = ({
  isOpen,
  onClose,
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
}) => {
  if (!isOpen) return null;

  const onBackdropMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const formattedDate = createdAt ? dateFunc(createdAt) : "";

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-99 flex b g-black/40 items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="rounded-[20px] bg-white shadow-lg border border-gray-200 p-6 w-[600px] h-[476px] max-w-[90vw] max-h-[90vh]"
      >
        {/* Modal Header */}
        <ModalHeader
          profileImageURL={profileImageURL}
          sender={sender}
          relationship={relationship}
          formattedDate={formattedDate}
        />

        <div className="my-4 h-px bg-gray-200" />

        {/* Modal Content */}
        <ModalContent>{content}</ModalContent>

        {/* Modal Footer */}
        <ModalFooter onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
