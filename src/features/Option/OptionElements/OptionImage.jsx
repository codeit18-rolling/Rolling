import { useState, useEffect } from "react";
import OptionImageButton from "./OptionImageButton";
import OptionWrapper from "./OptionWrapper";
import SkeletonUI from "../../../components/Skeleton/SkeletonUI";
/**
 * 옵션 리스트 컴포넌트 - 이미지 버튼 리스트
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Object} props.bgImages - 배경 이미지 데이터 객체 (imageUrls 배열 포함)
 * @param {function} props.onImageSelect - 선택된 이미지 전달
 * @param {boolean} props.isLoading - API 로딩 여부
 * @returns {JSX.Element} 이미지 옵션 버튼 그룹
 *
 * @example
 * <OptionImage bgImages={BACKGROUND_IMG_DATA} />
 */
const OptionImage = ({ bgImages, onImageSelect, isLoading }) => {
  const firstImage = bgImages?.imageUrls?.[0] || null; // 기본 선택 이미지는 첫번째 고정
  const imageUrlCount = bgImages.imageUrls.length;
  const [selectedImage, setSelectedImage] = useState(firstImage);
  const [loadedCount, setLoadedCount] = useState(0); // 브라우저 이미지 로딩 완료 체크

  useEffect(() => {
    onImageSelect(selectedImage);
  }, [selectedImage, onImageSelect]);

  // API 로딩 중이거나 브라우저 이미지 로딩이 완료되지 않았으면 Skeleton 표시
  const showSkeleton = isLoading || loadedCount < imageUrlCount;

  return (
    <OptionWrapper className="relative">
      {showSkeleton && (
        <SkeletonUI
          count={imageUrlCount}
          className="tablet:flex-nowrap absolute z-20"
        />
      )}
      {bgImages.imageUrls.map((image, index) => (
        <OptionImageButton
          key={index}
          image={image}
          isActive={selectedImage === image}
          onClick={() => setSelectedImage(image)}
          onLoad={() => setLoadedCount((prev) => prev + 1)} // 이미지 로딩 체크
        />
      ))}
    </OptionWrapper>
  );
};

export default OptionImage;
