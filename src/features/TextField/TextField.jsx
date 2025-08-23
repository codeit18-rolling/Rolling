import React, { forwardRef, useRef, useState } from "react";
import Editor from "./TextFieldElements/Editor";

/**
 * Editor 컴포넌트
 * @author <sejin5>
 */
const TextField = forwardRef(({ value, onChange, onSelectionChange }, ref) => {
  return (
    <Editor
      ref={ref}
      defaultValue={value}
      onTextChange={onChange}
      onSelectionChange={onSelectionChange}
    />
  );
});

export default TextField;
