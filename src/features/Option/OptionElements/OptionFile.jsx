import { useState } from "react";
import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";
import { validateFile } from "../../../utils/validate";
const LIMIT_SIZE = 2;
const OptionFile = ({ onUpload }) => {
  const [isActive, setIsActive] = useState(false);
  const handleDragStart = () => setIsActive(true);
  const handleDragEnd = () => setIsActive(false);
  const handleDragOver = (e) => e.preventDefault(); // 파일 드롭시 새창 이슈

  const getFileInfo = (files) => {
    const validFiles = validateFile(files, LIMIT_SIZE);
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    onUpload(newPreviews);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsActive(false);
    const files = Array.from(e.dataTransfer.files);
    getFileInfo(files);
  };

  const handleFile = (e) => {
    const files = Array.from(e.target.files);
    getFileInfo(files);
  };
  return (
    <label
      htmlFor="imageUpload"
      aria-label="이미지 업로드"
      className={cn(
        "group w-full cursor-pointer p-6 mt-10",
        "flex flex-col items-center justify-center gap-2 rounded-2xl relative",
        "border-[3px] border-dotted border-gray-300",
        "after:w-full after:h-full after:relative after:z-[1]",
        "focus:shadow-purple-500 focus:border-purple-500 hover:border-purple-500",
        isActive && "border-purple-500"
      )}
      onDragOver={handleDragOver}
      onDragEnter={handleDragStart}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <Icon
        iconName="plus"
        className={cn(
          "bg-gray-400 group-hover:bg-purple-500",
          isActive && "bg-purple-500"
        )}
      ></Icon>
      <p
        className={cn(
          "text-14 text-center break-keep text-gray-400 font-semibold",
          "group-hover:text-purple-500",
          isActive && "text-purple-500"
        )}
      >
        {LIMIT_SIZE}MB 이하만 업로드 가능합니다
      </p>
      <input
        type="file"
        name="imageUpload"
        id="imageUpload"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
    </label>
  );
};
export default OptionFile;
