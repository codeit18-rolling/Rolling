/**
 * 폰트 등록
 * @author <sejin5>
 */
import ReactQuill from "react-quill";

export const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = [
  "Noto Sans",
  "pretendard",
  "nanum-myeongjo",
  "nanum-brush-script",
];
ReactQuill.Quill.register(Font, true);
