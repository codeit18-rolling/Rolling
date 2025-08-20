import React, { forwardRef, useRef, useState } from "react";
import Editor from "./TextFieldElements/Editor";

/**
 * Editor 컴포넌트
 * @author <sejin5>
 */
const TextField = forwardRef(({ value, onChange, onBlur }, ref) => {
  const [range, setRange] = useState();
  return (
    <>
      <Editor
        ref={ref}
        defaultValue={value}
        onTextChange={onChange}
        onSelectionChange={setRange}
        onBlur={onBlur}
      />
    </>
  );
});

export default TextField;
