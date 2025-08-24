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
      console.error(
        `createRecipient 응답 실패: ${res.status} ${res.statusText} 서버 메시지: ${errorText}`
      );
    }
    return await res.json();
  } catch (err) {
    console.error("Post 요청 실패:",err);
    alert("메세지 생성에 실패했습니다!");
  }
};

export default createRecipient;
