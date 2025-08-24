import { createPortal } from "react-dom";
import { formatDate } from "../../utils/formatDate";
import ModalHeader from "./ModalElements/ModalHeader";
import ModalContent from "./ModalElements/ModalContent";
import ModalFooter from "./ModalElements/ModalFooter";
import { cn } from "../../utils";
import useModalLockAndEsc from "./hooks/useModalLockAndESC";
import useModalBackdrop from "./hooks/useModalBackdrop";

const Modal = ({
  isOpen,
  onClose,
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
}) => {
  useModalLockAndEsc(isOpen, onClose);
  const onBackdropMouseDown = useModalBackdrop(onClose);

  const formattedDate = createdAt ? formatDate(createdAt) : "";

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-50 flex bg-dimmed-opacity items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "rounded-[20px] bg-white shadow-lg border border-gray-200 p-6",
          "flex flex-col overflow-hidden",
          "w-[90vw] max-w-[600px] h-[40vh] min-h-[300px]",
          "tablet:w-[600px] tablet:h-[476px]",
          "desktop:w-[600px] desktop:h-[476px]"
        )}
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
