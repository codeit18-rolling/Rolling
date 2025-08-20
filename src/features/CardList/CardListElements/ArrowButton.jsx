import Icon from "../../../components/Icon/Icon";
import Button from "../../../components/Button/Button";
import { cn } from "../../../utils";

const ArrowButton = ({ direction, onClick }) => {
  const btn_design = "absolute z-10 top-[110px]";
  const iconName = direction === "right" ? "arrow_right" : "arrow_left";
  const position = direction === "right" ? "right-0" : "left-0";
  const ariaLabel = direction === "right" ? "다음페이지" : "이전페이지";

  return (
    <div className={cn(btn_design, position)} aria-label={ariaLabel}>
      <Button btnStyle="outlined" btnSize="btn-icon-40" onClick={onClick}>
        <Icon
          iconName={iconName}
          iconSize="ic-16"
          className="bg-gray-900 btn-icon"
        />
      </Button>
    </div>
  );
};

export default ArrowButton;
