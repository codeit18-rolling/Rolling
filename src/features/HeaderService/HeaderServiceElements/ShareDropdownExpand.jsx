import { useLocation } from "react-router";
import { SHARE_MENU } from "../../../constants/shareMenu";
import { cn } from "../../../utils";
import Toast from "../../../components/Toast/Toast";
import { useRef, useState } from "react";
import useClickOutside from "../../TextDropdown/hooks/useClickOutside";

const TEMPLATE_ID = 123485;

/**
 * 공유 버튼 클릭시 표출되는 드롭다운
 * @author <hwitae>
 */
const ShareDropdownExpand = ({ recipient, onClickClose }) => {
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);
  const [isToastOpen, setIsToastOpen] = useState(false);
  useClickOutside(dropdownRef, onClickClose);

  const handleClose = (e) => {
    setIsToastOpen((prevState) => !prevState);
  };

  /**
   * 카카오톡 공유하기
   */
  const onClickShareKakao = () => {
    Kakao.Share.sendCustom({
      templateId: TEMPLATE_ID,
      templateArgs: {
        path: pathname,
        name: recipient.name,
        messageCount: recipient.messageCount,
        reactionCount: recipient.reactionCount,
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
        ref={dropdownRef}
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
      <Toast isOpen={isToastOpen} onClose={handleClose} duration={5000} />
    </>
  );
};
export default ShareDropdownExpand;
