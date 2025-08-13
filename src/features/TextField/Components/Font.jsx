import ReactQuill from "react-quill";

export const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["noto-sans-kr", "nanum-myeongjo"];
ReactQuill.Quill.register(Font, true);
