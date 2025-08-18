import { cn } from "../../utils";

/**
 * 반응형 하단 플로팅 버튼 컨테이너 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 버튼 내부에 렌더링할 요소
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 플로팅 버튼 컨테이너 요소
 *
 * @example
 * <FloatingButton>
 *   <Button>확인</Button>
 * </FloatingButton>
 */
const FloatingButton = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "w-full px-6 py-6 fixed left-0 bottom-0 z-20",
        "tablet:static",
        className
      )}
    >
      {children}
    </div>
  );
};
export default FloatingButton;
