import { useEffect } from "react";

// 모달이 열릴 때 스크롤을 방지하고 ESC 키를 눌렀을 때 모달을 닫는 훅
const useModalLockAndEsc = (isOpen, onClose) => {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow || "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);
};

export default useModalLockAndEsc;
