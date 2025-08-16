import Button from "../../components/Button/Button";
import { cn } from "../../utils";
import useMediaQuery from "../../features/HeaderService/Hooks/useMediaQuery";
import Icon from "../../components/Icon/Icon";
import deleteRecipient from "../../service/ListDetails/deleteRecipientsDetail";
import { useNavigate } from "react-router-dom";

const CardButton = ({ isDeleteMode, navigateToEdit, navigateToBack, id }) => {
  const navigate = useNavigate();
  const isTablet = useMediaQuery("(max-width: 1199px)");

  // 카드 전체 삭제 함수
  const deleteButtonHandler = async () => {
    await deleteRecipient(id);
    navigate("/list", { replace: true });
  };

  return (
    <div className="flex justify-end">
      {!isDeleteMode && (
        <div
          className={cn(
            "fixed bottom-6 left-5 right-5 z-50 flex justify-end",
            "desktop:static desktop:inset-auto desktop:mx-0 desktop:self-end"
          )}
        >
          <Button
            onClick={navigateToEdit}
            className={cn(
              "flex items-center justify-center rounded-full shadow-md border border-gray-200 bg-white hover:bg-purple-50 hover:shadow-lg transition-all duration-200",
              "w-[56px] h-[56px]",
              "hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600 active:bg-purple-50 active:text-purple-600 active:border-none"
            )}
          >
            <Icon
              iconName={"icListEdit"}
              className="bg-purple-600"
              style={{ transform: "rotate(0deg)" }}
            />
          </Button>
        </div>
      )}
      {isDeleteMode && (
        <div
          className={cn(
            "fixed bottom-6 left-5 right-5 z-50 flex gap-4",
            "desktop:static desktop:inset-auto desktop:mx-0 desktop:self-end"
          )}
        >
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
          <Button
            className={cn(
              "w-[56px] h-[56px] rounded-[12px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] !text-purple-600 bg-white border border-purple-600 transition-all duration-150 ease-in-out",
              "desktop:w-[92px] desktop:h-[39px] desktop:rounded-[6px]",
              "hover:bg-purple-50 hover:text-purple-600 focus:bg-purple-50 focus:text-purple-600 active:bg-purple-50 active:text-purple-600"
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
        </div>
      )}
    </div>
  );
};

export default CardButton;
