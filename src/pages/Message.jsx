import { useParams } from "react-router";
import { useState, useRef, useCallback, useEffect } from "react";
import Container from "../components/Container/Container";
import MessageInput from "../features/Message/MessageElements/MessageInput";
import MessageProfile from "../features/Message/MessageElements/MessageProfile";
import MessageSelect from "../features/Message/MessageElements/MessageSelect";
import MessageEditor from "../features/Message/MessageElements/MessageEditor";
import Button from "../components/Button/Button";
import useMessageProfile from "../features/Message/hooks/useMessageProfile";
import useMessageSubmit from "../features/Message/hooks/useMessageSubmit";

const style = {
  font: "text-24 font-bold text-gray-900 mb-[15px]",
};

const Message = () => {
  const { id } = useParams();
  const editorRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [profileOptions, setProfileOptions] = useState([]);
  const [isDisable, setIsDisable] = useState(true);
  const [inputText, setInputText] = useState("");
  const { images } = useMessageProfile();
  const { mutate } = useMessageSubmit();

  const [postMessageData, setPostMessageData] = useState({
    team: "18-4",
    recipientId: id,
    sender: "",
    profileImageURL: "",
    relationship: "지인",
    content: "",
    font: "Noto Sans",
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

  useEffect(() => {
    if (postMessageData.sender.trim() && inputText.trim()) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [postMessageData.sender, inputText]);

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
      relationship: selectedOption.value,
    }));
  };

  const handleTextChange = useCallback(() => {
    if (editorRef.current) {
      const html = editorRef.current.root.innerHTML;
      const text = editorRef.current.getText().trim();
      setInputText(text);
      setPostMessageData((prev) => ({
        ...prev,
        content: html,
      }));
    }
  }, []);

  const handleSelectionChange = useCallback((range, oldRange, source) => {
    if (range && editorRef.current) {
      const format = editorRef.current.getFormat();
      let fontName = format.font;

      if (
        !fontName ||
        Array.isArray(fontName) ||
        typeof fontName !== "string"
      ) {
        fontName = "Noto Sans";
      } else {
        fontName = fontName.replace(/^['"]+|['"]+$/g, "");

        if (!fontName) fontName = "Noto Sans";
      }

      setPostMessageData((prev) => ({
        ...prev,
        font: "Noto Sans",
      }));
    }
  }, []);

  const handleSubmit = () => {
    mutate(postMessageData);
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
        onSelectionChange={handleSelectionChange}
      />
      <Button
        className="w-full"
        disabled={isDisable}
        onClick={() => handleSubmit()}
      >
        생성하기
      </Button>
    </Container>
  );
};

export default Message;
