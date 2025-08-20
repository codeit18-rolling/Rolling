import { useState, useCallback, useRef } from "react";
import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";
import { validateFile } from "../../../utils/validate";
import useCloudinaryUpload from "../../Post/hooks/useCloudinaryUpload";

const LIMIT_SIZE = 3;

const ProfileUploadButton = ({ style, onUpload }) => {
  const { uploadFiles, isUploading } = useCloudinaryUpload();
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const imageUploadBtn = () => {
    inputRef.current.click();
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
    <button
      className={cn(
        style.option,
        "bg-gray-400 hover:bg-gray-600 relative transition-all duration-150 ease-in-out"
      )}
      disabled={isUploading}
      onClick={imageUploadBtn}
    >
      <Icon
        iconName="plus"
        className="bg-white absolute top-[20%] left-[20%] tablet:top-[28%] tablet:left-[29%]"
      />
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        onChange={(e) => handleFiles(Array.from(e.target.files))}
        className="hidden"
        ref={inputRef}
      />
    </button>
  );
};

export default ProfileUploadButton;
