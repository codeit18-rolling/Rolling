import { createPortal } from "react-dom";
import { useEffect } from "react";
import { dateFunc } from "../../utils/dateFunc";
import ModalHeader from "./ModalElements/ModalHeader";
import ModalContent from "./ModalElements/ModalContent";
import ModalFooter from "./ModalElements/ModalFooter";
import { cn } from "../../utils";

const Modal = ({
  isOpen,
  onClose,
  sender,
  profileImageURL,
  relationship,
  content,
  createdAt,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const onBackdropMouseDown = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const formattedDate = createdAt ? dateFunc(createdAt) : "";

  return createPortal(
    <div
      onMouseDown={onBackdropMouseDown}
      className="fixed inset-0 z-50 flex bg-black/40 items-center justify-center"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "rounded-[20px] bg-white shadow-lg border border-gray-200 p-6",
          "flex flex-col overflow-hidden",
          "w-[70vw] h-[40vh] min-h-[300px]",
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
