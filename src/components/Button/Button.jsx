import { cn } from "../../utils";
import "./button.css";

const BTN_SIZES = {
  "btn-28": "py-0.5 px-4 text-14 font-normal rounded-md",
  "btn-36": "py-1.5 px-4 text-16 font-medium rounded-md",
  "btn-40": "py-2 px-4 text-16 font-normal rounded-md",
  "btn-56": "py-3.5 px-4 text-18 font-bold rounded-xl",
  "btn-icon-32": "w-8 h-8 rounded-md relative",
  "btn-icon-36": "w-9 h-9 rounded-md relative",
  "btn-icon-40": "w-10 h-10 rounded-full relative",
  "btn-icon-56": "w-14 h-14 rounded-full relative",
};
const BTN_STYLES = {
  primary:
    "bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 focus:bg-purple-800",
  gray: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-700 focus:shadow-gray-800",
  secondary:
    "bg-white text-purple-700 shadow-purple-600 hover:bg-purple-100 hover:text-purple-600 hover:shadow-purple-700 active:bg-purple-100 active:text-purple-600 active:shadow-purple-800 focus:bg-white focus:shadow-purple-800",
  outlined:
    "bg-white text-gray-900 shadow-gray-300 hover:bg-gray-100 active:bg-gray-100 focus:bg-white focus:shadow-gray-500",
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
  ...props
}) => {
  const sizeClass = BTN_SIZES[btnSize] || "";
  const styleClass = BTN_STYLES[btnStyle] || "";
  const focusShadowClass =
    btnStyle === "primary"
      ? btnSize === "btn-56"
        ? "focus:shadow-purple-900-2"
        : "focus:shadow-purple-900"
      : "";
  return (
    <button
      type={type}
      className={cn("btn", sizeClass, styleClass, focusShadowClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
