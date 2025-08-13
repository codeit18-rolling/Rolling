import styles from "./ModalContent.module.css";

const ModalContent = ({ children }) => {
  return (
    <div
      className={`${styles.scroll} h-[256px] w-[520px] overflow-y-auto pr-4 text-18 font-normal text-[#5A5A5A] font-sans`}
    >
      {children}
    </div>
  );
};

export default ModalContent;
