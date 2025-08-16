import { cn } from "../../../utils";

/**
 * Skeleton UI에서 사용되는 박스 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 스켈레톤 박스 요소
 *
 * @example
 * <SkeletonBox />
 */
const SkeletonBox = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "w-[100%] flex-0 aspect-square rounded-2xl",
        "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200",
        "bg-[length:400%_100%]",
        "animate-skeleton-shimmer",
        className
      )}
    ></div>
  );
};
export default SkeletonBox;
