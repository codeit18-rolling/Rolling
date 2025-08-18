import { useState } from "react";
import { ProfileOptions } from "./ProfileElements/ProfileOptions";
import { profileImagesData } from "../../MockData";

const basicIconUrl = profileImagesData.imageUrls.slice(0, 1);
const imageUrlLists = profileImagesData.imageUrls.slice(1);

const SUB_TEXT = "프로필 이미지를 선택해주세요!";

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(basicIconUrl[0]);

  const selectHandler = (imageUrl) => {
    setSelectedProfile(imageUrl);
  };

  return (
    <div className="flex justify-between h-[95px] items-center">
      <div
        className="bg-gray-300 rounded-full w-[80px] h-[80px] bg-cover bg-center"
        style={{ backgroundImage: `url("${selectedProfile}")` }}
      ></div>
      <div>
        <ProfileOptions
          text={SUB_TEXT}
          imageUrlLists={imageUrlLists}
          onClick={selectHandler}
          selectedProfile={selectedProfile}
        />
      </div>
    </div>
  );
};

export default Profile;
