const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getProfileImages = async () => {
  const res = await fetch(`${API_BASE_URL}/profile-images/`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("이미지를 불러오는데 실패했습니다");
  }
  return data;
};
export default getProfileImages;
