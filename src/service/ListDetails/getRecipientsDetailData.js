const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// TODO(지권): 엔드포인트 수정 필요
export const getRecipientsDetailData = async (id) => {
  const res = await fetch(`${API_BASE_URL}/18-4/recipients/${id}/messages/?limit=10&offset=0`, {
    method: "GET",
  });

  return res.json();
};