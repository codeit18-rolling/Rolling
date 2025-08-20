import { useState } from "react";
import ProfileUploadButton from "./ProfileUploadButton";

const ProfileUpload = ({ style }) => {
  const [uploadedImages, setUploadedImages] = useState([]); // 파일 업로드

  const handleUpload = (newImages) => {
    setUploadedImages((prev) => [...prev, ...newImages]);
  };

  return <ProfileUploadButton style={style} onUpload={handleUpload} />;
};

export default ProfileUpload;
