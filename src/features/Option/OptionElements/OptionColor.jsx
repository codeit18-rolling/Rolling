import { useState, useEffect } from "react";
import OptionColorButton from "./OptionColorButton";
import BG_COLORS from "../../../constants/backgroundColor";
import OptionWrapper from "./OptionWrapper";

/**
 * 옵션 리스트 컴포넌트 - 컬러 버튼 리스트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {function} props.onColorSelect - 선택된 컬러 전달
 * @param {string} [props.className=""] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 컬러 옵션 버튼 그룹
 *
 * @example
 * <OptionColor />
 */
const OptionColor = ({ onColorSelect, className }) => {
  const firstColor = Object.keys(BG_COLORS)[0]; // 기본 선택 컬러는 첫번째 고정
  const [selectedColor, setSelectedColor] = useState(firstColor);

  useEffect(() => {
    onColorSelect(selectedColor);
  }, [selectedColor, onColorSelect]);
  return (
    <OptionWrapper className={className}>
      {Object.entries(BG_COLORS).map(([color, bgClass]) => (
        <OptionColorButton
          key={color}
          color={color}
          bgClass={bgClass}
          isActive={selectedColor === color}
          onClick={() => setSelectedColor(color)}
          ariaLabel={color}
        />
      ))}
    </OptionWrapper>
  );
};

export default OptionColor;
