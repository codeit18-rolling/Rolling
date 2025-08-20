import { useCallback } from "react";

// 모달 백드롭 클릭 시 모달을 닫는 훅
const useModalBackdrop = (onClose) => {
  const onBackdropMouseDown = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose?.();
    },
    [onClose]
  );

  return onBackdropMouseDown;
};

export default useModalBackdrop;