import { useState } from "react";
import OptionImageButton from "./OptionImageButton";
import OptionWrapper from "./OptionWrapper";

/**
 * 옵션 리스트 컴포넌트 - 이미지 버튼 리스트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Object} props.bgImages - 배경 이미지 데이터 객체 (imageUrls 배열 포함)
 * @returns {JSX.Element} 이미지 옵션 버튼 그룹
 *
 * @example
 * <OptionImage bgImages={BACKGROUND_IMG_DATA} />
 */
const OptionImage = ({ bgImages }) => {
  const firstImage = bgImages?.imageUrls?.[0] || null; // 기본 선택 이미지는 첫번째 고정
  const [selectedImage, setSelectedImage] = useState(firstImage);
  if (!firstImage) return null; // 이미지가 없으면 렌더링하지 않음

  return (
    <OptionWrapper>
      {bgImages.imageUrls.map((image, index) => (
        <OptionImageButton
          key={index}
          image={image}
          isActive={selectedImage === image}
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </OptionWrapper>
  );
};

export default OptionImage;
