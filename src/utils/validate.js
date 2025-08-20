/**
 * 이름 입력값 검증 유틸함수
 *
 * @author <sohyun>
 * @param {string} value - 입력값
 * @returns {string} 에러 메시지 (유효하면 빈 문자열 반환)
 *
 * @example
 * const error = validateName(" 홍길동"); // "이름은 첫 글자가 공백일 수 없습니다"
 * const error2 = validateName(""); // "이름을 입력해 주세요"
 * const error3 = validateName("홍길동"); // ""
 */
export const validateName = (value) => {
  if (!value.trim()) return "이름을 입력해 주세요";
  if (value[0] === " ") return "이름은 첫 글자가 공백일 수 없습니다";
  return "";
};
export const validateFile = (value, limit) => {
  const validFiles = value.filter((file) => {
    if (file.size > limit * 1024 * 1024) {
      alert(`${limit}MB 이하만 업로드 가능합니다.`);
      return false;
    }
    return true;
  });
  return validFiles;
};
