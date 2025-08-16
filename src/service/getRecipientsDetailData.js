const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRecipientsDetailData = async (id) => {
  const res = await fetch(`${API_BASE_URL}/18-4/recipients/${id}/`, {
    method: "GET",
  });

  return res.json();
};