const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getBackgroundImage = async () => {
  const res = await fetch(`${API_BASE_URL}/background-images/`);
  const data = await res.json();
  if (!res.ok) {
    console.log("이미지를 불러오는데 실패했습니다");
  }
  return data;
};
export default getBackgroundImage;
