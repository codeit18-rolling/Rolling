import RelationshipBadge from "../../Badge/BadgeRelationship";
import defaultImage from "../../../assets/empty/img_null.png";

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
          src={profileImageURL || defaultImage}
          alt={`${sender} 프로필`}
          className="size-10 rounded-full object-cover"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />

        <div className="flex flex-col">
          {/* 발신자 이름 */}
          <div className="text-20 font-normal">
            From. <span className="text-20 font-bold">{sender}</span>
          </div>
          {/* 관계 뱃지 */}
          <div>
            <RelationshipBadge relationship={relationship} />
          </div>
        </div>
      </div>

      {/* 날짜 */}
      <span className="text-14 font-normal text-gray-400">{formattedDate}</span>
    </div>
  );
};

export default ModalHeader;
