import { ImageList } from "./ProfileElements/ProfileImages";
import { profileImagesData } from "../../MockData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const basicProfileIcon = profileImagesData.imageUrls.slice(0, 1);
const imageList = profileImagesData.imageUrls.slice(1);

const SUB_TEXT = "프로필 이미지를 선택해주세요!";
const Profile = () => {
  return (
    <>
      <div className="flex justify-between h-[95px] items-center">
        <div className="bg-gray-300 rounded-full w-[80px] h-[80px]"></div>
        <div className="">
          <ImageList text={SUB_TEXT} imageList={imageList} />
        </div>
      </div>
    </>
  );
};

export default Profile;
