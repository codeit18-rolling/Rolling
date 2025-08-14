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
      className="fixed inset-0 z-99 flex bg-black/40 items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="
          rounded-[20px] bg-white shadow-lg border border-gray-200 p-6
          min-w-[320px] h-[280px]   
          mobile:w-[400px] mobile:h-[320px] 
          tablet:w-[600px] tablet:h-[476px] 
          desktop:w-[600px] desktop:h-[476px] 
          flex flex-col overflow-hidden
        "
      >
        {/* Modal Header */}
        <ModalHeader
          profileImageURL={profileImageURL}
          sender={sender}
          relationship={relationship}
          formattedDate={formattedDate}
        />

        <hr className="my-4 h-px bg-gray-200" />

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
