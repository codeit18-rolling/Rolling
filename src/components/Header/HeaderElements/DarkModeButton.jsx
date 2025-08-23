import { useToggle } from "../../../hooks/useToggle";
import { cn } from "../../../utils";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

const DarkModeButton = () => {
  const { isOpen: isDark, onClickToggle } = useToggle();

  return (
    <Button
      btnStyle="secondary"
      onClick={onClickToggle}
      ariaLabel="다크모드 토글 버튼"
      btnSize="btn-icon-40"
      className={cn("rounded-md")}
    >
      <Icon
        iconName={isDark ? "darkMode" : "lightMode"}
        className="bg-purple-700"
      />
    </Button>
  );
};
export default DarkModeButton;
