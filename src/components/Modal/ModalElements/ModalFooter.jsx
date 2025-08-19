// src/components/Modal/ModalElements/ModalFooter.jsx
import Button from "../../Button/Button";

const ModalFooter = ({ onClose }) => {
  return (
    <div className="mt-6 flex justify-center">
      <Button btnSize="btn-40" className="w-[120px]" onClick={onClose}>
        확인
      </Button>
    </div>
  );
};

export default ModalFooter;
