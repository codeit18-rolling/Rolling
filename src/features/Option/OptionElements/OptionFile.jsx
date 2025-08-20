import { useState, useCallback } from "react";
import { cn } from "../../../utils";
import { validateFile } from "../../../utils/validate";
import useCloudinaryUpload from "../../Post/hooks/useCloudinaryUpload";
import OptionFileLoadContent from "./OptionFileLoadContent";
const labelClasses = [
  "group w-full cursor-pointer p-6 mt-10",
  "flex flex-col items-center justify-center gap-2 rounded-2xl relative",
  "border-[3px] border-dotted border-gray-300",
  "after:w-full after:h-full after:relative after:z-[1]",
  "focus:shadow-purple-500 focus:border-purple-500 hover:border-purple-500",
];
const LIMIT_SIZE = 15;

const OptionFile = ({ onUpload }) => {
  const { uploadFiles, isUploading } = useCloudinaryUpload();
  const [isActive, setIsActive] = useState(false);
  const handleDrag = {
    start: () => setIsActive(true),
    end: () => setIsActive(false),
    over: (e) => e.preventDefault(), // 파일 드롭시 새창 이슈
    drop: (e) => {
      e.preventDefault();
      setIsActive(false);
      handleFiles(Array.from(e.dataTransfer.files));
    },
  };
  const handleFiles = useCallback(
    async (files) => {
      const validFiles = validateFile(files, LIMIT_SIZE);
      if (validFiles.length === 0) return;

      const uploadedUrls = await uploadFiles(validFiles); // 멀티업로드 후 URL 배열 반환
      onUpload(uploadedUrls);
    },
    [uploadFiles, onUpload]
  );

  return (
    <label
      htmlFor="imageUpload"
      aria-label="이미지 업로드"
      className={cn(labelClasses, isActive && "border-purple-500")}
      onDragOver={handleDrag.over}
      onDragEnter={handleDrag.start}
      onDragLeave={handleDrag.end}
      onDrop={handleDrag.drop}
    >
      <OptionFileLoadContent
        isUploading={isUploading}
        isActive={isActive}
        size={LIMIT_SIZE}
      />
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        onChange={(e) => handleFiles(Array.from(e.target.files))}
        className="hidden"
      />
    </label>
  );
};
export default OptionFile;
