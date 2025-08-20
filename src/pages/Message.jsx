import { useParams } from "react-router";
import { useState } from "react";
import Container from "../components/Container/Container";
import MessageInput from "../features/Message/MessageElements/MessageInput";
import MessageProfile from "../features/Message/MessageElements/MessageProfile";
import MessageSelect from "../features/Message/MessageElements/MessageSelect";
import TextField from "../features/TextField/TextField";
import Button from "../components/Button/Button";

const style = {
  font: "text-24 font-bold text-gray-900 mb-[10px]",
};

const Message = () => {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [postMessageData, setPostMessageData] = useState({
    team: "18-4",
    recipientId: id,
    sender: "",
    profileImageURL: "",
    relationship: "지인",
    content: "",
    font: "",
  });

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setPostMessageData((prev) => ({
      ...prev,
      sender: inputValue,
    }));
    if (errorMsg) {
      setErrorMsg("");
    }
  };

  const handleInputBlur = (e) => {
    const inputValue = e.target.value.trim();
    const errorMsg = "값을 입력해 주세요.";
    if (!inputValue) {
      setErrorMsg(errorMsg);
    } else {
      setErrorMsg("");
    }
  };

  const handleSelectChange = (selectedOption) => {
    console.log(selectedOption);
    setPostMessageData((prev) => ({
      ...prev,
      relationship: selectedOption,
    }));
  };

  return (
    <Container
      isInnerBox={true}
      innerBoxClassName="flex flex-col gap-[32px] tablet:gap-[50px]"
    >
      <MessageInput
        style={style}
        value={setPostMessageData.sender}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        errorMsg={errorMsg}
      />
      <MessageProfile style={style} />
      <MessageSelect
        style={style}
        value={postMessageData.relationship}
        onChange={handleSelectChange}
      />
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
