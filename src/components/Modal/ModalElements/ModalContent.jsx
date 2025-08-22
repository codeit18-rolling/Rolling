import styles from "./ModalContent.module.css";
import { cn } from "../../../utils";

const ModalContent = ({ children }) => {
  return (
    <div
      className={cn(
        styles.scroll,
        "h-full w-full overflow-y-auto pr-4 text-18 text-gray-550"
      )}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default ModalContent;
