import { cn } from "../../utils";
import "./button.css";
import { BTN_SIZES, BTN_STYLES } from "./buttonStyles";

const getFocusShadowClass = (btnStyle, btnSize) => {
  if (btnStyle !== "primary") return "";
  if (btnSize === "btn-56") return "focus:shadow-purple-900-2";
  return "focus:shadow-purple-900";
};

/**
 * 커스텀 버튼 컴포넌트입니다.
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} [props.type="button"] - 버튼 타입 (예: "button", "submit", "reset")
 * @param {string} [props.btnStyle="primary"] - 버튼 스타일 ("primary", "secondary", "outlined", "gray")
 * @param {string} [props.btnSize="btn-56"] - 버튼 크기 (BTN_SIZES 객체의 key)
 * @param {string} [props.className=""] - 추가로 적용할 CSS 클래스명
 * @param {React.ReactNode} props.children - 버튼 내부에 렌더링할 요소
 * @param {Function} props.onClick - 버튼 클릭 이벤트 핸들러
 * @param {...Object} props - 기타 button 엘리먼트에 전달할 속성
 * @returns {JSX.Element} 버튼 요소
 *
 * @example
 * <Button btnStyle="primary" btnSize="btn-56">확인</Button>
 */
const Button = ({
  type = "button",
  btnStyle = "primary",
  btnSize = "btn-56",
  className = "",
  children,
  onClick,
  ...props
}) => {
  const sizeClass = BTN_SIZES[btnSize] || "";
  const styleClass = BTN_STYLES[btnStyle] || "";
  const focusShadowClass = getFocusShadowClass(btnStyle, btnSize);
  return (
    <button
      type={type}
      className={`btn inline-flex justify-center items-center ${sizeClass} ${styleClass} ${focusShadowClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
