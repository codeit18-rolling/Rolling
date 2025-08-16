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
 * <SkeletonUI count="5" boxClassName="w-[100%] sm:w-[calc((100%-1rem)/2)] tablet:w-[calc((100%-(1rem*2))/3)]" ></SkeletonUI> 
 * 
 * 반응형 작성시 개인 페이지에 맞개 수정이 필요합니다! 
 * 모든 페이지가 4칸/3칸/2칸/1칸 다 다르기때문에 모바일 기준 2칸으로만 작성되었습니다. 
 * example 코드를 참고해서 적용 부탁드립니다.
 */
const SkeletonUI = ({ count, className = "", boxClassName = "" }) => {
  return (
    <div className={cn("flex flex-row flex-wrap gap-4 w-full", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBox key={i} className={boxClassName} />
      ))}
    </div>
  );
};

export default SkeletonUI;
