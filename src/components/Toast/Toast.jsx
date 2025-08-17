import { useEffect } from "react";
import icCompleted from "../../assets/icon/ic_completed.svg";
import icClosed from "../../assets/icon/ic_close.svg";
import { cn } from "../../utils";

const Toast = ({
  isOpen,
  onClose,
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

  return (
    <div
      className={cn(
        "fixed bg-black/80 text-16 text-white left-1/2 -translate-x-1/2",
        "flex items-center justify-between",
        "px-[30px] py-[19px] rounded-lg",
        "w-[70vw] bottom-[88px]",
        "tablet:w-[524px] tablet:bottom-[50px]",
        "desktop:w-[524px] desktop:bottom-[50px]"
      )}
    >
      <div className="flex items-center gap-[12px]">
        <img src={icCompleted} alt="완료 아이콘" />
        <span className="text-[14px]">{message}</span>
      </div>
      <button onClick={onClose} className="flex items-center">
        <img src={icClosed} alt="닫기 아이콘" />
      </button>
    </div>
  );
};

export default Toast;
