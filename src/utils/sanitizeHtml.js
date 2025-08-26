import DOMPurify from "dompurify";

export const cleanHtml = (content) => {
  if (typeof content === "string") return DOMPurify.sanitize(content);

  return content;
};
