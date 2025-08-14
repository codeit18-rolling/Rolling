import { useState } from "react";
import OptionColorButton from "./OptionColorButton";
import BG_COLORS from "../../../constants/backgroundcolor";
import OptionWrapper from "./OptionWrapper";

/**
 * 옵션 리스트 컴포넌트 - 컬러 버튼 리스트
 *
 * @author <sohyun>
 * @component
 * @returns {JSX.Element} 컬러 옵션 버튼 그룹
 *
 * @example
 * <OptionColor />
 */
const OptionColor = () => {
  const firstColor = Object.keys(BG_COLORS)[0]; // 기본 선택 컬러는 첫번째 고정
  const [selectedColor, setSelectedColor] = useState(firstColor);
  return (
    <OptionWrapper>
      {Object.entries(BG_COLORS).map(([color, bgClass]) => (
        <OptionColorButton
          key={color}
          color={color}
          bgClass={bgClass}
          isActive={selectedColor === color}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </OptionWrapper>
  );
};

export default OptionColor;
