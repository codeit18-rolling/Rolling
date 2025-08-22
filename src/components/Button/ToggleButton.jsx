import { cn } from "../../utils";
/**
 * 토글 버튼 그룹을 감싸는 래퍼 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트들
 * @param {string} props.ariaLabel - 접근성 문구
 * @returns {JSX.Element} 토글 버튼 그룹 래퍼
 */
export const ToggleButtonWrapper = ({
  children,
  className = "",
  ariaLabel = "선택 방식",
}) => {
  return (
    <div
      className={cn("flex flex-row bg-gray-200 border border-gray-300 rounded-md", className)}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

/**
 * 활성/비활성 상태를 지원하는 토글 버튼 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} [props.isActive=false] - 활성화 여부
 * @param {function} [props.onClick] - 클릭 이벤트 핸들러
 * @param {React.ReactNode} props.children - 버튼 내부에 렌더링할 요소
 * @returns {JSX.Element} 토글 버튼 요소
 *
 * @example
 * <ToggleButton isActive={true} onClick={handleClick}>컬러</ToggleButton>
 */
const ToggleButton = ({
  isActive = false,
  onClick,
  children,
  ...props
}) => {
  const activeClass =
    isActive &&
    "bg-white shadow-purple-600-2 text-purple-700 font-bold hover:bg-purple-100 active:bg-purple-200";
  return (
    <button
      type="button"
      className={cn(
        "inline-flex justify-center items-center flex-auto",
        "btn py-2 px-4 rounded-md bg-gray-100",
        "text-16 text-gray-900 font-normal",
        "hover:bg-gray-200 active:bg-gray-100",
        activeClass
      )}
      onClick={onClick}
      aria-pressed={isActive}
      {...props}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
