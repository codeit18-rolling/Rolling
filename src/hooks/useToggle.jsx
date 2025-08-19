import { useCallback, useState } from "react";

/**
 * 드롭다운의 열고 닫힘 상태를 설정하기 위한 커스텀 훅
 * @author <hwitae>
 * @returns {Object{}} isOpen: 열림, 닫힘 상태 / onClickToggle: 상태를 다룰 함수
 */
export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return { isOpen, onClickToggle };
};
