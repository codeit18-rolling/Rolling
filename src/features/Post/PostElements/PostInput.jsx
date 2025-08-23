import Input from "../../../components/Input/Input";

const PostInput = ({ value, errorMsg, onChange, onBlur }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-24 font-bold">To.</h2>
      <form>
        <Input
          placeholder="받는 사람 이름을 입력해 주세요"
          name="recipientName"
          value={value}
          errorMsg={errorMsg}
          onChange={onChange}
          onBlur={onBlur}
          maxLength="40"
        />
      </form>
    </div>
  );
};
export default PostInput;
