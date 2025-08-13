import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/**
 * Editor 컴포넌트
 * @author <sejin5>
 */

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ header: [1, 2, 3, 4, 5, false] }],
  ["image", "link"],
  [{ color: [] }, { background: [] }],
];

const TextField = () => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder="test holder"
        className="w-[720px] m-auto h-[260px] rounded-[8px] border-[1px]"
      />
    </>
  );
};

export default TextField;
