import Icon from "../../../components/Icon/Icon";

/**
 * 옵션 공통 컴포넌트 - (컬러/이미지 등) 선택 시 표시되는 아이콘
 *
 * @author <sohyun>
 * @component
 * @returns {JSX.Element} 체크 아이콘 요소
 */
const OptionCheck = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[44px] h-[44px] rounded-full bg-gray-500 btn-icon z-[2]">
      <Icon iconName="check" className="bg-white"></Icon>
    </div>
  );
};
export default OptionCheck;
