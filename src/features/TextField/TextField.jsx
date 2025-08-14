import React, { useRef } from "react";
import Editor from "./TextFieldElements/Editor";

/**
 * Editor 컴포넌트
 * @author <sejin5>
 */
const TextField = () => {
  const quillRef = useRef();
  return (
    <>
      <Editor ref={quillRef} />
    </>
  );
};

export default TextField;
