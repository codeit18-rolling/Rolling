import { useParams } from "react-router";
import { useState, useRef, useCallback, useEffect } from "react";
import Container from "../components/Container/Container";
import MessageInput from "../features/Message/MessageElements/MessageInput";
import MessageProfile from "../features/Message/MessageElements/MessageProfile";
import MessageSelect from "../features/Message/MessageElements/MessageSelect";
import MessageEditor from "../features/Message/MessageElements/MessageEditor";
import Button from "../components/Button/Button";
import useMessageProfile from "../features/Message/hooks/useMessageProfile";

const style = {
  font: "text-24 font-bold text-gray-900 mb-[10px]",
};

const Message = () => {
  const { id } = useParams();
  const editorRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [profileOptions, setProfileOptions] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [inputSender, setInputSender] = useState("");
  const [inputText, setInputText] = useState("");
  const { images } = useMessageProfile();

  const [postMessageData, setPostMessageData] = useState({
    team: "18-4",
    recipientId: id,
    sender: "",
    profileImageURL: "",
    relationship: "지인",
    content: "",
    font: "",
  });

  useEffect(() => {
    if (images.imageUrls) {
      setPostMessageData((prev) => ({
        ...prev,
        profileImageURL: images.imageUrls[0],
      }));
      setProfileOptions(images.imageUrls.slice(1));
    }
  }, [images]);

  const handleInputChange = useCallback((e) => {
    const inputValue = e.target.value;
    setPostMessageData((prev) => ({
      ...prev,
      sender: inputValue,
    }));
    if (errorMsg) {
      setErrorMsg("");
    }
  }, []);

  const handleInputBlur = (e) => {
    const inputValue = e.target.value.trim();
    const errorMsg = "값을 입력해 주세요.";

    if (!inputValue) {
      setErrorMsg(errorMsg);
    } else {
      setErrorMsg("");
    }

    //test
    setInputSender(inputValue);
    if (inputValue && inputText) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const handleProfile = (imageUrl) => {
    setSelectedProfile(imageUrl);
    setPostMessageData((prev) => ({
      ...prev,
      profileImageURL: imageUrl,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setPostMessageData((prev) => ({
      ...prev,
      relationship: selectedOption,
    }));
  };

  const handleTextChange = useCallback(() => {
    if (editorRef.current) {
      const html = editorRef.current.root.innerHTML;

      setPostMessageData((prev) => ({
        ...prev,
        content: html,
      }));
    }
  }, []);

  const handleButtonDisable = (type = "", e) => {
    if (type === "input") {
      const input = e.target.value.trim();
      setInputSender(input);
      if (input && inputText) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    } else if (type === "" && editorRef.current) {
      const text = editorRef.current.getText().trim();
      setInputText(text);
      if (inputSender && text) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    }
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
        onBlur={(e) => {
          handleInputBlur(e);
          handleButtonDisable("input", e);
        }}
        errorMsg={errorMsg}
      />
      <MessageProfile
        style={style}
        value={postMessageData.profileImageURL}
        options={profileOptions}
        onClick={handleProfile}
        selectedProfile={selectedProfile}
      />
      <MessageSelect
        style={style}
        value={postMessageData.relationship}
        onChange={handleSelectChange}
      />
      <MessageEditor
        style={style}
        ref={editorRef}
        value={postMessageData.content}
        onChange={handleTextChange}
        onBlur={handleButtonDisable}
      />
      <Button
        className="w-full"
        disabled={isDisable}
        onClick={() => handleSubmit(handleValidateSubmit)}
      >
        생성하기
      </Button>
    </Container>
  );
};

export default Message;
