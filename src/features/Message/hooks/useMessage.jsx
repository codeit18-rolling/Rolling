import { useState, useRef, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import useMessageProfile from "./useMessageProfile";
import useMessageSubmit from "./useMessageSubmit";

const useMessage = () => {
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
    if (inputSender && inputText) {
      //setIsDisable(false);
      console.log(false);
    } else {
      //setIsDisable(true);
      console.log(true);
    }
  }, [inputSender, inputText]);

  const handleInputChange = useCallback(
    (e) => {
      const inputValue = e.target.value;
      setPostMessageData((prev) => ({
        ...prev,
        sender: inputValue,
      }));
      if (errorMsg) {
        setErrorMsg("");
      }
    },
    [errorMsg]
  );

  const handleInputBlur = (e) => {
    const inputValue = e.target.value.trim();
    const errorMessage = "값을 입력해 주세요.";

    if (!inputValue) {
      setErrorMsg(errorMessage);
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

  const handleEditorChange = useCallback(() => {
    console.log(editorRef.current, "editor");
    if (editorRef.current) {
      const html = editorRef.current.root.innerHTML;
      setPostMessageData((prev) => ({
        ...prev,
        content: html,
      }));
    }
  }, []);

  const handleFontChange = useCallback((range, oldRange, source) => {
    console.log(editorRef.current, range, "fontchange");
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

  const handleButtonDisable = useCallback((type = "", e) => {
    if (type === "input") {
      const sender = e.target.value.trim();
      setInputSender(sender);
      if (sender && inputText) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    } else if (type === "" && editorRef.current) {
      console.log("goal?");
      const text = editorRef.current.getText().trim();
      setInputText(text);
      if (inputSender && text) {
        setIsDisable(false);
      } else {
        setIsDisable(true);
      }
    }
  }, []);

  const { handleSubmit } = useMessageSubmit(postMessageData);

  return {
    editorRef,
    errorMsg,
    selectedProfile,
    profileOptions,
    isDisable,
    postMessageData,
    handleInputChange,
    handleInputBlur,
    handleProfile,
    handleSelectChange,
    handleEditorChange,
    handleFontChange,
    handleButtonDisable,
    handleSubmit,
  };
};

export default useMessage;
