import { useState } from "react";

/**
 * 커스텀 입력값 유효성 검사 훅
 *
 * 주어진 초기값과 검증 함수를 기반으로 입력값 상태를 관리하며,
 * blur(포커스 해제) 이후에만 에러 메시지를 UI에 표시합니다.
 * 
 * @author <sohyun>
 * @param {string} [initialValue=""] - 초기 입력값
 * @param {(value: string) => string} validateFn - 입력값을 검증하는 함수
 *   - 유효하면 빈 문자열을 반환하고(에러메세지 제거), 유효하지 않으면 에러 메시지를 반환
 *
 * @returns {{
 *   value: string,                          // 현재 입력값
 *   errorMsg: string,                       // 에러 메시지 (blur 전에는 항상 빈 문자열)
 *   focused: boolean,                       // blur 이벤트가 발생했는지 여부
 *   setValue: (value: string) => void,       // 입력값 수동 설정 함수
 *   handleChange: (e) => void,               // onChange 핸들러
 *   handleBlur: () => void,                  // onBlur 핸들러
 * }}
 *
 * @example

 * const { value, errorMsg, handleChange, handleBlur } = useInputValidator("", validateName);
 *
 * <input
 *   value={value}
 *   onChange={handleChange}
 *   onBlur={handleBlur}
 * />
 * {errorMsg && <span>{errorMsg}</span>}
 */
const useInputValidator = (initialValue = "", validateFn) => {
  const [value, setValue] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState("");
  const [focused, setFocused] = useState(false); // blur 이후 검증 표시 여부

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    // 입력 중에도 에러 상태는 유지하지만, blur 전에는 UI에 안 보이게
    if (focused) {
      setErrorMsg(validateFn(newValue));
    }
  };

  const handleBlur = () => {
    setFocused(true); // blur 됐음을 표시
    setErrorMsg(validateFn(value));
  };

  return {
    value,
    errorMsg: focused ? errorMsg : "",
    focused,
    setValue,
    handleChange,
    handleBlur,
  };
};

export default useInputValidator;
