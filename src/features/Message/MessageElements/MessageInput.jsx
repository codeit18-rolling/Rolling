import { useState } from "react";
import Input from "../../../components/Input/Input";

const MessageInput = ({ style }) => {
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (errorMsg) {
      setErrorMsg("");
    }
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value.trim();
    const errorMsg = "값을 입력해 주세요.";
    if (!inputValue) {
      setErrorMsg(errorMsg);
    } else {
      setErrorMsg("");
    }
  };

  return (
    <div>
      <h2 className={style.font}>From.</h2>
      <Input
        value={value}
        placeholder="이름을 입력해 주세요."
        onChange={handleChange}
        onBlur={handleBlur}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default MessageInput;
