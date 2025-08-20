/**
 * 폰트 등록
 * @author <sejin5>
 */
import ReactQuill from "react-quill";

export const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["noto-sans", "pretendard", "nanum-myeongjo", "handletter"];
ReactQuill.Quill.register(Font, true);
