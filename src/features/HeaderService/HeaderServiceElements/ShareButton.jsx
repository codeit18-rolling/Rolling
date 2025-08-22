import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icon/Icon";
import { useToggle } from "../../../hooks/useToggle";
import ShareDropdownExpand from "./ShareDropdownExpand";

/**
 * 공유 하기 버튼
 * @author <hwitae>
 */
export const ShareButton = () => {
  const { isOpen, onClickToggle } = useToggle();

  return (
    <div onClick={onClickToggle} className="relative">
      <Button
        aria-label="공유 메뉴 버튼"
        btnStyle="outlined"
        btnSize={"btn-icon-36"}
        className={"tablet:w-[56px] tablet:h-[36px] mobile:h-[32px]"}
      >
        <Icon iconName={"share_24"} className="bg-black hidden tablet:block" />
        <Icon
          iconName={"share_20"}
          iconSize="ic-20"
          className="bg-black block tablet:hidden"
        />
      </Button>
      {isOpen && <ShareDropdownExpand />}
    </div>
  );
};
