import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "./Components/ToolBar";
import "./font.css";

/**
 * Editor 컴포넌트
 * @author <sejin5>
 */

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["noto-sans-kr", "nanum-myeongjo"];
ReactQuill.Quill.register(Font, true);

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
