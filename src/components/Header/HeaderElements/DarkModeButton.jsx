import { useEffect } from "react";
import { useToggle } from "../../../hooks/useToggle";
import { cn } from "../../../utils";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

const DarkModeButton = () => {
  const { isOpen: isDark, onClickToggle } = useToggle();

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
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
