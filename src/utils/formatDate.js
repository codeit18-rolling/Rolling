/**
 * 주어진 날짜(createdAt)를 "YYYY.MM.DD" 문자열 형식으로 변환하는 함수
 * @author <jinhyuk>
 * @param {string|number|Date} createdAt - 변환할 날짜 값 (Date 객체, 타임스탬프, 또는 문자열)
 * @returns {string} "YYYY.MM.DD" 형식의 문자열
 */
export const formatDate = (createdAt) => {
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
