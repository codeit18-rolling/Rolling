import styles from "./ModalContent.module.css";
import { cn } from "../../../utils";
import { cleanHtml } from "../../../utils/sanitizeHtml";
import { useMemo } from "react";

const ModalContent = ({ content }) => {
  const cleanContent = useMemo(() => cleanHtml(content), [content]);

  return (
    <div
      className={cn(
        styles.scroll,
        "h-full w-full overflow-y-auto pr-4 text-18 text-gray-550 text-viewer ql-editor"
      )}
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  );
};

export default ModalContent;
