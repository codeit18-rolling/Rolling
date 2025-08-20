import Container from "../components/Container/Container";
import MessageInput from "../features/Message/MessageElements/MessageInput";
import MessageProfile from "../features/Message/MessageElements/MessageProfile";
import MessageSelect from "../features/Message/MessageElements/MessageSelect";
import MessageEditor from "../features/Message/MessageElements/MessageEditor";
import Button from "../components/Button/Button";
import useMessage from "../features/Message/hooks/useMessage";

const style = {
  font: "text-24 font-bold text-gray-900 mb-[15px]",
};

const Message = () => {
  const {
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
  } = useMessage();

  return (
    <Container
      isInnerBox={true}
      innerBoxClassName="flex flex-col gap-[32px] tablet:gap-[50px]"
    >
      <MessageInput
        style={style}
        value={postMessageData.sender}
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
        onChange={handleEditorChange}
        onSelectionChange={handleFontChange}
        onBlur={handleButtonDisable}
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
