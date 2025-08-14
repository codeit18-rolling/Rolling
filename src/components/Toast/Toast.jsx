import { useEffect } from "react";
import icCompleted from "../../assets/icon/ic_completed.svg";
import icClosed from "../../assets/icon/ic_close.svg";

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
      className="fixed bg-black/80 text-white text-16 
        flex items-center justify-between
        px-[30px] py-[19px] rounded-lg
        mobile:w-[320px] mobile:h-[64px] mobile:bottom-[88px]
        tablet:w-[524px] tablet:h-[64px] tablet:bottom-[50px]
        desktop:w-[524px] desktop:h-[64px] desktop:bottom-[50px]"
    >
      <div className="flex items-center gap-[12px]">
        <img src={icCompleted} alt="완료" />
        <span className="text-[14px]">{message}</span>
      </div>
      <button onClick={onClose} className="flex items-center">
        <img src={icClosed} alt="닫기" />
      </button>
    </div>
  );
};

export default Toast;
