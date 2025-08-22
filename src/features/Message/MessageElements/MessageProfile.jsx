import Profile from "../../Profile/Profile";

const MessageProfile = ({
  style,
  value,
  options,
  onClick,
  selectedProfile,
}) => {
  return (
    <div>
      <h2 className={style.font}>프로필 이미지</h2>
      <Profile
        value={value}
        options={options}
        onClick={onClick}
        selectedProfile={selectedProfile}
      />
    </div>
  );
};

export default MessageProfile;
