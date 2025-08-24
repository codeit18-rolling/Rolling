import defaultImage from "../../../assets/empty/img_null.png";
import { cn } from "../../../utils";
import RelationshipBadge from "../../Badge/BadgeRelationship";

const CardMeta = ({ data }) => {
  return (
    <div className="flex items-center justify-start gap-[14px]">
      {/* User Image */}
      <img
        src={data?.profileImageURL || defaultImage}
        width={56}
        height={56}
        alt="유저 이미지"
        className="w-[56px] h-[56px] rounded-full"
        loading="eager"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />

      {/* User Info */}
      <div
        className={cn(
          "flex flex-col items-start gap-[6px] text-20 leading-6 tracking-[-0.01em] w-[calc(100%-56px)] mr-1",
          "mobile:text-16 mobile:leading-5"
        )}
      >
        <p className="font-normal text-black line-clamp-1">
          From. <span className="font-bold">{data?.sender || "코드잇"}</span>
        </p>

        {/* Badge Component */}
        <RelationshipBadge relationship={data?.relationship} />
      </div>
    </div>
  );
};

export default CardMeta;
