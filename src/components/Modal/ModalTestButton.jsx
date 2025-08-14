// src/pages/ModalTestPage.jsx
import { useState } from "react";
import Modal from "./Modal.jsx";

const ModalTestButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg"
      >
        모달 열기
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sender="김진혁"
        profileImageURL="https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8"
        relationship="동료"
        content="열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다.열심히 하시는 모습 항상 응원합니다."
        createdAt="2025-08-12T08:05:25.399056Z"
      />
    </div>
  );
};

export default ModalTestButton;
