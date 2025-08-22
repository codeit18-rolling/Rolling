import { useState, useEffect } from "react";
import { ProfileOptions } from "./ProfileElements/ProfileOptions";

const Profile = ({ value, options, onClick, selectedProfile }) => {
  if (!selectedProfile) {
    selectedProfile = value;
  }

  return (
    <div className="h-[95px] flex gap-[30px] items-center">
      <div
        className="bg-gray-300 rounded-full w-[80px] h-[80px] bg-cover bg-center flex-shrink-0"
        style={{ backgroundImage: `url("${selectedProfile}")` }}
      />
      <ProfileOptions
        imageUrlLists={options}
        onClick={onClick}
        selectedProfile={selectedProfile}
      />
    </div>
  );
};

export default Profile;
