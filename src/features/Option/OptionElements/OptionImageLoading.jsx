
import OptionImage from "./OptionImage";
import SkeletonUI from "../../../components/Skeleton/SkeletonUI";

/**
 * 이미지 옵션 로딩 상태를 처리하는 컴포넌트
 * 로딩 중에는 Skeleton UI를, 로딩이 끝나면 OptionImage를 표시합니다.
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Object} props.bgImages - 배경 이미지 데이터 객체 (imageUrls 배열 포함)
 * @param {boolean} props.isLoading - 이미지 옵션 로딩 여부
 * @returns {JSX.Element|null} Skeleton UI 또는 이미지 옵션 컴포넌트
 *
 * @example
 * <OptionImageLoading bgImages={BACKGROUND_IMG_DATA} isLoading={true} />
 */

const OptionImageLoading = ({ bgImages, isLoading }) => {
  if (!bgImages?.imageUrls?.length) return null;
  return (
    <>
      {isLoading ? (
        <SkeletonUI count={bgImages.imageUrls.length} />
      ) : (
        <>
        <OptionImage bgImages={bgImages} />
        </>
      )}
    </>
  );
};

export default OptionImageLoading;
