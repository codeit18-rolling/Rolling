import { ImageList } from "./ProfileElements/ProfileImages";
import BasicProfile from "./ProfileElements/BasicProfile";
import { profileImagesData } from "../../MockData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const basicIconUrl = profileImagesData.imageUrls.slice(0, 1);
const imageUrlLists = profileImagesData.imageUrls.slice(1);

const SUB_TEXT = "프로필 이미지를 선택해주세요!";
const Profile = () => {
  return (
    <>
      <div className="flex justify-between h-[95px] items-center">
        <BasicProfile basicIconUrl={basicIconUrl} />
        <div>
          <ImageList text={SUB_TEXT} imageUrlLists={imageUrlLists} />
        </div>
      </div>
    </>
  );
};

export default Profile;
