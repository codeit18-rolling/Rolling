export const validateName = (value) => {
  if (!value.trim()) return "이름을 입력해 주세요";
  if (value[0] === " ") return "이름은 첫 글자가 공백일 수 없습니다";
  return "";
};
