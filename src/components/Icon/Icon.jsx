import { cn } from "../../utils";
import { ICONS, ICON_SIZES } from "../../constants/icon";
import "./icon.css";

/**
 * SVG 아이콘을 마스킹하여 렌더링하는 컴포넌트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.iconName - 사용할 아이콘의 이름 (ICONS 객체의 key)
 * @param {string} [props.iconSize="ic-24"] - 아이콘 크기 (ICON_SIZES 객체의 key)
 * @param {string} [props.className=""] - 추가로 적용할 CSS 클래스명
 * @returns {JSX.Element} 마스킹된 아이콘 span 요소
 *
 * @example
 * <Icon iconName="add_20" iconSize="ic-20" className="bg-purple-600" />
 */
const Icon = ({ iconName, iconSize = "ic-24", className = "" }) => {
  const url = ICONS[iconName];
  const size = ICON_SIZES[iconSize];
  return (
    <span
      className={cn("ic", size, className)}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
      }}
    />
  );
};

// box-shadow: 0px 4px 8px 0px #00000014;

export default Icon;
