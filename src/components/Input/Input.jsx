import { cn } from "../../utils";
import {
  baseInputClass,
  activeInputClass,
  errorInputClass,
} from "./inputStyle";
/**
 * 인풋 컴포넌트 wrapper
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트들
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 인풋 래퍼 요소
 */
export const InputWrapper = ({ children, className = "", ...props }) => {
  return (
    <div className={cn("flex flex-col w-full gap-1", className)} {...props}>
      {children}
    </div>
  );
};

/**
 * 에러/활성 상태를 지원하는 input 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} [props.type="text"] - 인풋 타입
 * @param {string} [props.placeholder="이름을 입력해 주세요"] - 플레이스홀더 텍스트
 * @param {string} [props.value] - 인풋 값
 * @param {function} [props.onChange] - 값 변경 핸들러
 * @param {string} [props.errorMsg] - 에러 메시지
 * @param {string} [props.className] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 인풋 요소
 *
 * @example
 * <Input value={name} onChange={handleChange} errorMsg="이름을 입력해 주세요" />
 */
const Input = ({
  type = "text",
  placeholder = "이름을 입력해 주세요",
  value,
  onChange,
  errorMsg,
  className = "",
  ...props
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          ...baseInputClass,
          errorMsg ? errorInputClass : activeInputClass,
          className
        )}
        {...props}
      />
      {errorMsg && <p className="text-error text-12">{errorMsg}</p>}
    </InputWrapper>
  );
};

export default Input;
