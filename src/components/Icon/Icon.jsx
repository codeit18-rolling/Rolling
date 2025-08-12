import add_20 from "/src/assets/icon/ic_add_20.svg";
import add_24 from "/src/assets/icon/ic_add_24.svg";
import arrow_down from "/src/assets/icon/ic_arrow_down.svg";
import arrow_left from "/src/assets/icon/ic_arrow_left.svg";
import arrow_right from "/src/assets/icon/ic_arrow_right.svg";
import check from "/src/assets/icon/ic_check.svg";
import close from "/src/assets/icon/ic_close.svg";
import completed from "/src/assets/icon/ic_completed.svg";
import deleted from "/src/assets/icon/ic_deleted.svg";
import edit from "/src/assets/icon/ic_edit.svg";
import person from "/src/assets/icon/ic_person.svg";
import plus from "/src/assets/icon/ic_plus.svg";
import share_20 from "/src/assets/icon/ic_share_20.svg";
import share_24 from "/src/assets/icon/ic_share_24.svg";
import "./icon.css";

const ICONS = {
  add_20,
  add_24,
  arrow_down,
  arrow_left,
  arrow_right,
  check,
  close,
  completed,
  deleted,
  edit,
  person,
  plus,
  share_20,
  share_24,
};
const ICON_SIZES = {
  "ic-16": "w-4 h-4",
  "ic-20": "w-5 h-5",
  "ic-24": "w-6 h-6",
  "ic-32": "w-8 h-8",
};

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
      className={`ic ${size} ${className}`}
      style={{
        maskImage: `url(${url})`,
        WebkitMaskImage: `url(${url})`,
      }}
    />
  );
};


// box-shadow: 0px 4px 8px 0px #00000014;


export default Icon;
