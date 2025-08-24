import Icon from "../../../components/Icon/Icon";
import Button from "../../../components/Button/Button";
import { cn } from "../../../utils";
const directionData = {
  right: {
    iconName: "arrow_right",
    position: "right-0",
    ariaLabel: "다음페이지",
  },
  left: {
    iconName: "arrow_left",
    position: "left-0",
    ariaLabel: "이전페이지",
  },
};
const ArrowButton = ({ direction, onClick }) => {
  const btn_design = "absolute z-10 top-[110px]";
  const { iconName, position, ariaLabel } = directionData[direction];

  return (
    <div className={cn(btn_design, position)}>
      <Button
        btnStyle="outlined"
        btnSize="btn-icon-40"
        onClick={onClick}
        aria-label={ariaLabel}
      >
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
