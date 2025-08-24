const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 카드 전체 삭제 함수
async function deleteRecipient(recipientId) {
  try {
    const res = await fetch(`${API_BASE_URL}/18-4/recipients/${recipientId}/`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`삭제 실패: ${res.status} ${res.statusText} ${text}`);
    }
  } catch (err) {
    console.error("삭제 에러:", err);
  }
}

export default deleteRecipient;
