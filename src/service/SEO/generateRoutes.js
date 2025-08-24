// 모든 데이터 가져오기
export const fetchAllRecipients = async (apiUrl) => {
  let results = [];
  let url = `${apiUrl}/18-4/recipients/?limit=10&offset=0`;

  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    results = results.concat(data.results); // 기존 데이터 누적
    url = data.next; // next가 있으면 다음 페이지로 없으면 null 종료
  }

  return results;
};
// 렌더링 경로 생성
const generateRoutes = async (apiUrl) => {
  const staticRoutes = ["/", "/list", "/post"]; // 정적 경로
  try {
    const recipients = await fetchAllRecipients(apiUrl);
    const dynamicRoutes = recipients.map((route) => `/post/${route.id}`); // 동적 경로 저장 -- /post/:id
    return staticRoutes.concat(dynamicRoutes); // 정적 경로와 동적 경로를 합쳐서 반환
  } catch (err) {
    console.error("리스트를 불러올 수 없습니다 :", err);
    return staticRoutes; // 정적 라우트만 반환
  }
};
export default generateRoutes;
