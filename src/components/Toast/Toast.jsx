import { useEffect } from "react";
import { ICONS } from "../../constants/icon";
import { cn } from "../../utils";
import { createPortal } from "react-dom";

const Toast = ({
  isOpen,
  onClose,
  image = "completed",
  message = "URL이 복사되었습니다.",
  duration = 2000,
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const toastNode = (
    <div
      className={cn(
        "fixed bg-black/80 text-16 text-white left-1/2 -translate-x-1/2",
        "flex items-center justify-between z-50",
        "px-[30px] py-[19px] rounded-lg",
        "w-[70vw] bottom-[88px]",
        "tablet:w-[524px] tablet:bottom-[50px]",
        "desktop:w-[524px] desktop:bottom-[50px]"
      )}
    >
      <div className="flex items-center gap-[12px]">
        <img src={ICONS[image]} alt="상태 아이콘" />
        <span className="text-[14px]">{message}</span>
      </div>
      <button onClick={onClose} className="flex items-center">
        <img src={ICONS["close"]} alt="닫기 아이콘" />
      </button>
    </div>
  );

  return createPortal(toastNode, document.body);
};

export default Toast;
