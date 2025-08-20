import Input from "../../../components/Input/Input";

const MessageInput = ({ style, value, onChange, onBlur, errorMsg }) => {
  return (
    <div>
      <h2 className={style.font}>From.</h2>
      <Input
        value={value}
        placeholder="이름을 입력해 주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default MessageInput;
