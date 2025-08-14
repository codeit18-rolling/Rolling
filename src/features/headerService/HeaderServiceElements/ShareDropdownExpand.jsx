import { SHARE_MENU } from "../../../constants/shareMenu";

/**
 * 공유 버튼 클릭시 표출되는 드롭다운
 */
const ShareDropdownExpand = () => {
  return (
    <>
      <div
        className={`absolute top-11 w-[140px] py-[10px] bg-white z-50
                    border border-gray-300 rounded-lg
                    drop-shadow-dropdownBorder
                    tablet:left-px
                    mobile:right-px`}
      >
        {SHARE_MENU.map((option) => {
          return (
            <div key={option.id} className="hover:bg-gray-100">
              <button className="py-3 px-4">{option.name}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ShareDropdownExpand;
