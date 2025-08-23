import { cn } from "../../../utils";

/**
 * Select 컴포넌트의 Option 부분
 *
 * @author <sejin5>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - dropdown 클릭 유무
 * @param {array} [props.options] - dropdown 에서 선택할 옵션들
 * @param {Object} props.style - 공통으로 사용되는 스타일
 * @returns {JSX.Element} Select option 요소
 *
 */

const SelectOptions = ({ isOpen, options, onSelect, style }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-[60px] left-0 right-0 z-40 shadow-black-opacity",
        style.boxSelect
      )}
    >
      {options.map((option, index) => (
        <div
          key={option.value || index}
          className={cn(
            "py-3 px-4 hover:bg-gray-100 text-gray-900",
            style.fontSelect
          )}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SelectOptions;
