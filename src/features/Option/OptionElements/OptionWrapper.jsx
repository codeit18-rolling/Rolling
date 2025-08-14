import { cn } from "../../../utils";

/**
 * 옵션 공통 컴포넌트 - (컬러/이미지 등) 버튼 그룹 래퍼
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @param {React.ReactNode} props.children - 자식 컴포넌트들
 * @returns {JSX.Element} 옵션 그룹 래퍼 요소
 */
const OptionWrapper = ({ className = "", children, ...props }) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap justify-between gap-4 w-full",
        "sm:flex-nowrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default OptionWrapper;
