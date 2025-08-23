const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!res.ok) {
      const errorText = await res.text(); // 서버 메시지 가져오기
      console.log(
        `Cloudinary 응답 실패: ${res.status} ${res.statusText} 서버 메시지: ${errorText}`
      );
    }
    const data = await res.json();
    return data.secure_url; // 업로드 후 URL 반환
  } catch (err) {
    alert("Cloudinary 업로드에 에러가 발생하여 실패했습니다", err);
    return null;
  }
};

export default uploadToCloudinary;
