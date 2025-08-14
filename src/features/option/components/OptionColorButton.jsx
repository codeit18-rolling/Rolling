import OptionCheck from "./OptionCheck";
import OptionButton from "./OptionButton";

/**
 * 옵션 리스트 내부 버튼 컴포넌트 - 컬러
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.bgClass - 배경색에 적용할 Tailwind CSS 클래스명
 * @param {boolean} props.isActive - 활성화 여부
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @returns {JSX.Element} 컬러 옵션 버튼 요소
 */

const OptionColor = ({ bgClass, isActive, onClick }) => {
  return (
    <OptionButton className={bgClass} onClick={onClick} isActive={isActive}>
      <OptionCheck />
    </OptionButton>
  );
};

export default OptionColor;
