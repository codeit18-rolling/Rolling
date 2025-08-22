const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllEmojiData = async ({ id, limit = 8 }, pageParam) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/18-4/recipients/${id}/reactions/?limit=${limit}&offset=${pageParam}`,
      {
        method: "get",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      const errMsg = await response.text();
      throw new Error(`이모지 데이터를 받아오지 못했습니다. ${errMsg}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
