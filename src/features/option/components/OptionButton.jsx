import { cn } from "../../../utils";

/**
 * 옵션 공통 컴포넌트 - (컬러/이미지 등) 버튼
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isActive - 활성화 여부
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @param {React.ReactNode} props.children - 버튼 내부에 렌더링할 요소(활성화 시)
 * @returns {JSX.Element} 옵션 버튼 요소
 */

const OptionButton = ({
  isActive,
  onClick,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        "w-[calc(50%-1rem)] flex-auto aspect-square rounded-2xl relative ",
        "sm:w-auto",
        className
      )}
      onClick={onClick}
      aria-pressed={isActive}
      {...props}
    >
      {isActive && children}
    </button>
  );
};
export default OptionButton;
