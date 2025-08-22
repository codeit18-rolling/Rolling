import { useState } from "react";
import { cn } from "../../../utils";
import ProfileUploadButton from "./ProfileUploadButton";

const ProfileUpload = ({ style, onClick, selectedProfile }) => {
  const [uploadedImages, setUploadedImages] = useState([]); // 파일 업로드

  const handleUpload = (newImages) => {
    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  return (
    <>
      <ProfileUploadButton style={style} onUpload={handleUpload} />
      {uploadedImages.map((image, index) => (
        <button
          key={`upload-${index}`}
          onClick={() => onClick(image)}
          className={cn(
            style.option,
            selectedProfile === image && "ring-2 ring-blue-500"
          )}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
    </>
  );
};

export default ProfileUpload;
