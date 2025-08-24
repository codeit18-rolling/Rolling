import { useCallback, useEffect } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { cn } from "../../../utils";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import { SCREEN_STYLE } from "../../../constants/screen";

/**
 * 다크모드 버튼을 표시하는 컴포넌트
 * @author hwitae
 * @returns 다크모드 버튼
 */
const DarkModeButton = () => {
  const screenStyle = localStorage.getItem(SCREEN_STYLE.key);
  const { isOpen: isDark, onClickToggle } = useToggle(
    screenStyle === SCREEN_STYLE.darkMode
  );

  const checkScreenStyle = useCallback(() => {
    if (isDark) {
      localStorage.setItem(SCREEN_STYLE.key, SCREEN_STYLE.darkMode);
      document.documentElement.classList.add(SCREEN_STYLE.darkMode);
    } else {
      localStorage.setItem(SCREEN_STYLE.key, SCREEN_STYLE.lightMode);
      document.documentElement.classList.remove(SCREEN_STYLE.darkMode);
    }
  }, [isDark]);

  useEffect(() => {
    checkScreenStyle();
  }, [isDark]);

  return (
    <Button
      btnStyle="secondary"
      onClick={onClickToggle}
      aria-label="다크모드 토글 버튼"
      btnSize="btn-icon-40"
      className={cn("rounded-md")}
    >
      <Icon
        iconName={isDark ? "lightMode" : "darkMode"}
        className="bg-purple-700"
      />
    </Button>
  );
};
export default DarkModeButton;
