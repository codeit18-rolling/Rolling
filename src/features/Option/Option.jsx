import OptionColor from "./OptionElements/OptionColor";
import OptionImage from "./OptionElements/OptionImage";

/**
 * 배경 컬러/이미지 옵션을 선택할 수 있는 옵션 컴포넌트입니다.
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {"color"|"image"} [props.type="color"] - 옵션 타입 ("color" 또는 "image")
 * @param {Object} [props.bgImages] - 배경 이미지 데이터 객체 (type이 "image"일 때)
 * @param {boolean} [props.isLoading] - 이미지 옵션 로딩 여부로 스켈레톤 UI노출 (type이 "image"일 때)
 * @param {function} props.onColorSelect - 선택된 컬러 전달
 * @param {function} props.onImageSelect - 선택된 이미지 전달
 * @returns {JSX.Element} 옵션 선택 컴포넌트
 *
 * @example
 * <Option type="color" />
 * <Option type="image" bgImages={BACKGROUND_IMG_DATA} />
 */

const Option = ({
  type = "color",
  bgImages,
  isLoading,
  onColorSelect,
  onImageSelect,
}) => {
  if (type === "image") {
    if (!bgImages?.imageUrls?.length) return null;
    return (
      <OptionImage
        bgImages={bgImages}
        onImageSelect={onImageSelect}
        isLoading={isLoading}
      />
    );
  }
  return <OptionColor onColorSelect={onColorSelect} />;
};

export default Option;
