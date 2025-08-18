import { useState } from "react";
import { ProfileOptions } from "./ProfileElements/ProfileOptions";
import { profileImagesData } from "../../MockData";

const basicIconUrl = profileImagesData.imageUrls.slice(0, 1);
const imageUrlLists = profileImagesData.imageUrls.slice(1);

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState(basicIconUrl[0]);

  const selectHandler = (imageUrl) => {
    setSelectedProfile(imageUrl);
  };

  return (
    <div className="h-[95px] flex gap-[30px] items-center">
      <div
        className="bg-gray-300 rounded-full w-[80px] h-[80px] bg-cover bg-center"
        style={{ backgroundImage: `url("${selectedProfile}")` }}
      />
      <ProfileOptions
        imageUrlLists={imageUrlLists}
        onClick={selectHandler}
        selectedProfile={selectedProfile}
      />
    </div>
  );
};

export default Profile;
