import { useLocation } from "react-router";
import { SHARE_MENU } from "../../../constants/shareMenu";
import { cn } from "../../../utils";

/**
 * 공유 버튼 클릭시 표출되는 드롭다운
 * @author <hwitae>
 */
const ShareDropdownExpand = () => {
  const { pathname } = useLocation();

  /**
   * 카카오톡 공유하기 기능
   * @param {Event} e
   * @returns
   */
  const onClickShareKakao = (e) => {
    if (e.target.id !== "kakao") return;

    Kakao.Share.sendCustom({
      templateId: 123485,
      templateArgs: {
        path: pathname,
      },
    });
  };

  return (
    <>
      <div
        className={cn(
          "absolute top-11 w-[140px] py-[10px] bg-white z-50 right-px",
          "border border-gray-300 rounded-lg",
          "drop-shadow-dropdownBorder"
        )}
        onClick={onClickShareKakao}
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
    </>
  );
};
export default ShareDropdownExpand;
