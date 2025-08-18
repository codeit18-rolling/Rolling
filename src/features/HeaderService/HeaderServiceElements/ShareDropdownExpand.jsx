import { useLocation } from "react-router";
import { SHARE_MENU } from "../../../constants/shareMenu";
import { cn } from "../../../utils";
import Toast from "../../../components/Toast/Toast";
import { useState } from "react";

/**
 * 공유 버튼 클릭시 표출되는 드롭다운
 * @author <hwitae>
 */
const ShareDropdownExpand = () => {
  const { pathname } = useLocation();
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleClose = (e) => {
    setIsToastOpen((prevState) => !prevState);
  };

  /**
   * 카카오톡 공유하기
   */
  const onClickShareKakao = () => {
    Kakao.Share.sendCustom({
      templateId: 123485,
      templateArgs: {
        path: pathname,
      },
    });
  };

  /**
   * URL로 공유하기
   */
  const onClickCopyUrl = async () => {
    try {
      const clipBoardUrl = `${import.meta.env.VITE_BASE_URL}${pathname}`;
      await navigator.clipboard.writeText(clipBoardUrl);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * 공유할 옵션 버튼을 클릭했을 때 실행
   * @param {Event} e
   */
  const handleClick = (e) => {
    e.stopPropagation();

    if (e.target.id === "kakao") {
      onClickShareKakao();
    } else if (e.target.id === "url") {
      onClickCopyUrl();
    }
  };

  return (
    <>
      <div
        className={cn(
          "absolute top-11 w-[140px] py-[10px] bg-white z-50 right-px",
          "border border-gray-300 rounded-lg",
          "drop-shadow-dropdownBorder"
        )}
        onClick={handleClick}
      >
        {SHARE_MENU.map((option) => {
          return (
            <div key={option.id} className="hover:bg-gray-100">
              <button id={option.id} className="py-3 px-4">
                {option.name}
              </button>
            </div>
          );
        })}
      </div>
      <Toast isOpen={isToastOpen} onClose={handleClose} />
    </>
  );
};
export default ShareDropdownExpand;
