import { useCallback, useEffect } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { cn } from "../../../utils";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

const SCREEN_STYLE = "screenStyle";
const LIGHT_MODE = "light";
const DARK_MODE = "dark";

/**
 * 다크모드 버튼을 표시하는 컴포넌트
 * @author hwitae
 * @returns 다크모드 버튼
 */
const DarkModeButton = () => {
  const screenStyle = localStorage.getItem(SCREEN_STYLE);
  const { isOpen: isDark, onClickToggle } = useToggle(
    screenStyle === DARK_MODE
  );

  const checkScreenStyle = useCallback(() => {
    if (isDark) {
      localStorage.setItem(SCREEN_STYLE, DARK_MODE);
      document.documentElement.classList.add(DARK_MODE);
    } else {
      localStorage.setItem(SCREEN_STYLE, LIGHT_MODE);
      document.documentElement.classList.remove(DARK_MODE);
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
