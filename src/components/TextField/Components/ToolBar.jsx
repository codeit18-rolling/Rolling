import { Font } from "./Font";
export const toolbarOptions = [
  [{ font: Font.whitelist }],
  ["bold", "italic", "underline"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ header: [1, 2, 3, 4, 5, false] }],
  ["image", "link"],
  [{ color: [] }, { background: [] }],
];
