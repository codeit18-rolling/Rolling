const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createRecipient = async (data) => {
  try {
    const res = await fetch(`${API_BASE_URL}/18-4/recipients/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorText = await res.text(); // 서버 메시지 가져오기
      throw new Error(
        `응답 실패: ${res.status} ${res.statusText} 서버 메시지: ${errorText}`
      );
    }
    return await res.json();
  } catch (error) {
    console.error("Create Recipient 실패:", error);
    throw error;
  }
};

export default createRecipient;
