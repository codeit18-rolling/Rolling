import OptionCheck from "./OptionCheck";
import OptionButton from "./OptionButton";
import defaultBgImage from "../../../assets/empty/img_background_null.png";
import { cn } from "../../../utils";
import getFetchCloudinary from "../../../service/Post/getFetchCloudinary";
const whiteDimmedStyled =
  "after:absolute after:inset-0 after:bg-white/50 after:rounded-2xl after:z-[1]";
/**
 * 옵션 리스트 내부 버튼 컴포넌트 - 이미지
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.image - 버튼에 표시할 배경 이미지 URL
 * @param {boolean} props.isActive - 활성화 여부
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @param {...Object} props - 기타 img 엘리먼트에 전달할 속성
 * @returns {JSX.Element} 이미지 옵션 버튼 요소
 */
const OptionImageButton = ({ image, isActive, onClick, onLoad, ...props }) => {
  const optimizedUrl = getFetchCloudinary(image);
  return (
    <OptionButton
      className={cn(
        "overflow-hidden sm:w-[calc((100%-(1rem*3))/4)]",
        isActive && whiteDimmedStyled
      )}
      onClick={onClick}
      isActive={isActive}
    >
      <img
        src={optimizedUrl}
        alt="배경 이미지 옵션"
        width={300}
        height={300}
        className="w-full h-full object-cover"
        loading="eager" // 페이지 로드와 동시에 이미지를 최우선으로 다운로드
        onError={(e) => {
          e.target.src = defaultBgImage; // 이미지 로딩 실패 시
        }}
        onLoad={onLoad}
        {...props}
      />
      {isActive && <OptionCheck />}
    </OptionButton>
  );
};

export default OptionImageButton;
