import Button from "../../../components/Button/Button";
import { cn } from "../../../utils";
import Icon from "../../../components/Icon/Icon";

// 수정 버튼
export const EditButton = ({ navigateToEdit }) => {
  return (
    <Button
      btnStyle="outlined"
      onClick={navigateToEdit}
      className="w-[56px] h-[56px] flex items-center justify-center rounded-full shadow-md border border-gray-200 bg-white hover:bg-purple-50 hover:shadow-lg transition-all duration-200"
    >
      <Icon iconName={"icListEdit"} className="bg-purple-600" />
    </Button>
  );
};

// 삭제하기 버튼
export const DeleteButton = ({ deleteButtonHandler, isTablet }) => {
  return (
    <Button
      className={cn(
        "flex-1 h-[56px] rounded-[12px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] text-white transition-all duration-150 ease-in-out",
        "desktop:w-[92px] desktop:h-[39px] desktop:rounded-[6px]"
      )}
      aria-label="롤링페이퍼 삭제하기"
      onClick={deleteButtonHandler}
    >
      {isTablet ? "롤링페이퍼 삭제하기" : "삭제하기"}
    </Button>
  );
};

// 돌아가기 버튼
export const BackButton = ({ navigateToBack, isTablet }) => {
  return (
    <Button
      btnStyle="outlined"
      className={cn(
        "w-[56px] h-[56px] rounded-[12px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] !text-purple-600 bg-white border border-purple-600 transition-all duration-150 ease-in-out",
        "desktop:w-[92px] desktop:h-[39px] desktop:rounded-[6px]"
      )}
      aria-label="돌아가기"
      onClick={navigateToBack}
    >
      {isTablet ? (
        <Icon iconName={"back"} className="bg-purple-600" />
      ) : (
        "돌아가기"
      )}
    </Button>
  );
};
