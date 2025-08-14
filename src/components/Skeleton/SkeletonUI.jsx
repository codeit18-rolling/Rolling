import { cn } from "../../utils";
import SkeletonBox from "./SkeletonElements/SkeletonBox";
/**
 * Skeleton UI(로딩 박스) 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {number} props.count - 표시할 스켈레톤 박스 개수
 * @param {string} [props.className] - Skeleton UI 래퍼에 적용할 추가 CSS 클래스명
 * @param {string} [props.boxClassName] - 각 SkeletonBox에 적용할 추가 CSS 클래스명
 * @returns {JSX.Element} Skeleton 박스 리스트
 *
 * @example
 * <SkeletonUI count={3} />
 */
const SkeletonUI = ({ count, className = "", boxClassName = "" }) => {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap justify-between gap-4 w-full",
        className
      )}
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBox key={i} className={boxClassName} />
      ))}
    </div>
  );
};

export default SkeletonUI;
