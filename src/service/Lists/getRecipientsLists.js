const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getRecipientsLists = async ({ index, sortOrder }) => {
  const limit = 4;
  const offset = index * 4;
  const params = { limit, offset };
  if (sortOrder === "reactionCount") {
    params.sort = "like";
  }
  console.log(index, sortOrder);
  const searchParams = new URLSearchParams(params).toString();
  const response = await fetch(
    `${API_BASE_URL}/18-4/recipients/?${searchParams}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`${response.status}에러입니다.`);
  }

  return response.json();
};

export default getRecipientsLists;
