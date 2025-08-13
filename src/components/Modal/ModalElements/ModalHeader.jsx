const ModalHeader = ({
  profileImageURL,
  sender,
  relationship,
  formattedDate,
}) => {
  return (
    <div className="flex items-center justify-between font-sans">
      <div className="flex items-center gap-3">
        {/* 프로일 이미지 */}
        <img
          src={profileImageURL}
          alt={`${sender} 프로필`}
          className="size-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          {/* 발신자 이름 */}
          <div className="text-20 font-normal">
            From. <span className="text-20 font-bold">{sender}</span>
          </div>
          {/* 관계 뱃지 */}
          <span className="inline-flex w-fit px-2 py-0.5 mt-1 rounded-md">
            {relationship}
          </span>
        </div>
      </div>

      {/* 날짜 */}
      <span className="text-14 font-normal text-gray-400">{formattedDate}</span>
    </div>
  );
};

export default ModalHeader;
