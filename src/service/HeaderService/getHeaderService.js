const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getHeaderService = async (recipientId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/18-4/recipients/${recipientId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errMsg = response.text();
      throw new Error("HeaderService 데이터를 불러오지 못했습니다.", errMsg);
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
