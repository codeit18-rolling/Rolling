import { useState } from "react";

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

  const reset = () => {
    setValue("");
    setErrorMsg("");
    setFocused(false);
  };

  return {
    value,
    errorMsg: focused ? errorMsg : "",
    focused,
    setValue,
    handleChange,
    handleBlur,
    reset,
  };
};

export default useInputValidator;
