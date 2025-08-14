const SHARE_OPTION = [
  { id: "kakao", name: "카카오톡 공유" },
  { id: "url", name: "URL 공유" },
];

/**
 * 공유 버튼 클릭시 표출되는 드롭다운
 */
const ShareDropdownExpand = () => {
  return (
    <>
      <div
        className={`absolute top-11 w-[140px] py-[10px] bg-white
                    border border-gray-300 rounded-lg
                    drop-shadow-dropdownBorder`}
      >
        {SHARE_OPTION.map((option) => {
          return (
            <div className="hover:bg-gray-100">
              <button key={option.id} className="py-3 px-4">
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
