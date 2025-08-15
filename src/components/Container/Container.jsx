import { cn } from "../../utils";
/**
 *  레이아웃을 위한 컨테이너 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 컨테이너 내부에 렌더링할 요소
 * @param {string} [props.className] - 컨테이너에 적용할 추가 CSS 클래스명
 * @param {boolean} [props.isInnerBox=false] - 내부 박스 사용 여부
 * @param {string} [props.innerBoxClassName] - 내부 박스에 적용할 추가 CSS 클래스명
 * @returns {JSX.Element} 컨테이너 요소
 *
 * @example
 * <Container>/Container> -- 기본
 * <Container isInnerBox ></Container> -- To / from
 * <Container isInnerBox innerBoxClassName="bg-white"></Container> --  To / from 커스텀
 */
const Container = ({
  children,
  className = "",
  isInnerBox = false,
  innerBoxClassName = "",
  isFull = true,
}) => {
  return (
    <main
      className={cn(
        "w-full px-[20px] py-[40px]",
        "tablet:px-[24px] tablet:py-[50px]",
        "desktop:py-[60px]",
        isFull && "mx-auto max-w-[1248px]",
        className
      )}
    >
      {isInnerBox ? (
        <div className={cn("mx-auto max-w-[720px]", innerBoxClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </main>
  );
};
export default Container;
