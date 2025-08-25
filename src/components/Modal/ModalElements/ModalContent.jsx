import styles from "./ModalContent.module.css";
import { cn } from "../../../utils";
import { cleanHtml } from "../../../utils/sanitizeHtml";

const ModalContent = ({ children }) => {
  const cleanChildren = cleanHtml(children);

  return (
    <div
      className={cn(
        styles.scroll,
        "h-full w-full overflow-y-auto pr-4 text-18 text-gray-550 text-viewer ql-editor"
      )}
      dangerouslySetInnerHTML={{ __html: cleanChildren }}
    />
  );
};

export default ModalContent;
