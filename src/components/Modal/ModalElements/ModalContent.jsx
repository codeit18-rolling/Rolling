import styles from "./ModalContent.module.css";
import { cn } from "../../../utils";
import DOMPurify from "dompurify";

const ModalContent = ({ children }) => {
  const cleanChildren = DOMPurify.sanitize(children);

  return (
    <div
      className={cn(
        styles.scroll,
        "h-full w-full overflow-y-auto pr-4 text-18 text-gray-550 text-viewer"
      )}
      dangerouslySetInnerHTML={{ __html: cleanChildren }}
    />
  );
};

export default ModalContent;
