import Input from "../../../components/Input/Input";

const MessageInput = ({ style, value, onChange, onBlur, errorMsg }) => {
  return (
    <div>
      <h2 className={style.font}>From.</h2>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default MessageInput;
