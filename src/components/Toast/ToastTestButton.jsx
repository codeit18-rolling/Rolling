import { useState } from "react";
import Toast from "./Toast";

export default function CopyUrlButton() {
  const [toastOpen, setToastOpen] = useState(false);

  const copyURL = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setToastOpen(true);
  };

  return (
    <>
      <button
        onClick={copyURL}
        className="px-4 py-2 bg-purple-400 text-white rounded-lg"
      >
        URL 공유
      </button>

      <Toast
        isOpen={toastOpen}
        onClose={() => setToastOpen(false)}
        message="URL이 복사되었습니다."
      />
    </>
  );
}
