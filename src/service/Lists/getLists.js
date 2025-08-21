const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getLists = async (index, sort) => {
  const limit = 4;
  const offset = index * 4;
  const params = { limit, offset };
  if (sort === "reactionCount") {
    params.sort = "like";
  }
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

export default getLists;
