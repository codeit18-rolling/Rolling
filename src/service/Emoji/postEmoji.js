const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postEmoji = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/18-4/recipients/reactions/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errMsg = await response.text();
      throw new Error(`이모지를 등록하지 못했습니다. ${errMsg}`);
    }
  } catch (error) {
    console.error(error);
  }
};
