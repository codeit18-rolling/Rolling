import { forwardRef } from "react";
import TextField from "../../TextField/TextField";

const MessageEditor = forwardRef(({ style, value, onChange, onBlur }, ref) => {
  return (
    <div>
      <h2 className={style.font}>내용을 입력해 주세요</h2>
      <TextField ref={ref} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
});

export default MessageEditor;
