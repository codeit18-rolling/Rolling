const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRecipientsDetailData = async (team, id) => {
  const res = await fetch(`${API_BASE_URL}/${team}/recipients/${id}/`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipient detail");
  }

  return res.json();
};