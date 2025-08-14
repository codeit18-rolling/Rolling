import styles from "./ModalContent.module.css";

const ModalContent = ({ children }) => {
  return (
    <div
      className={`${styles.scroll} w-full h-full overflow-y-auto pr-4 text-18 font-normal text-[#5A5A5A] font-sans`}
    >
      {children}
    </div>
  );
};

export default ModalContent;
