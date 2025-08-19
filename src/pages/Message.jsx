import Container from "../components/Container/Container";
import MessageInput from "../features/Message/MessageElements/MessageInput";
import { TextDropdown } from "../features/TextDropdown/TextDropdown";
import TextField from "../features/TextField/TextField";
import Button from "../components/Button/Button";

const style = {
  font: "text-24 font-bold text-gray-900 mb-[10px]",
};

const Message = () => {
  return (
    <Container
      isInnerBox={true}
      innerBoxClassName="flex flex-col gap-[32px] tablet:gap-[50px]"
    >
      <MessageInput style={style} />
      <div>
        <h2 className={style.font}>프로필 이미지</h2>
        <Profile />
      </div>
      <div>
        <h2 className={style.font}>상대와의 관계</h2>
        <TextDropdown />
      </div>
      <div>
        <h2 className={style.font}>내용을 입력해 주세요</h2>
        <TextField />
      </div>
      <Button
        className="w-full"
        onClick={() => handleSubmit(handleValidateSubmit)}
      >
        생성하기
      </Button>
    </Container>
  );
};

export default Message;
