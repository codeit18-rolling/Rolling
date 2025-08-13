import { memo } from "react";

/**
 * 작성자 프로필 이미지를 표출한다.
 * @author <hwitae>
 * @param {Object{}} writerData 작성자 데이터
 */
const WritersImgIcon = ({ writerData = {} }) => {
  const { profileImageURL } = writerData;
  return (
    <>
      <img
        className="w-[28px] h-[28px] border-solid border-[1.4px] border-white rounded-[140px]"
        src={profileImageURL}
        alt="프로필 이미지"
      />
    </>
  );
};
export default memo(WritersImgIcon);
