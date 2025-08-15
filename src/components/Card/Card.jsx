import CardHeader from "./CardElements/CardHeader";
import { cn } from "../../utils";

// Card Component
const Card = ({ img, user, content, date, onDelete }) => {
  const ErrMsg = "에러가 발생했습니다."; // 임시 에러 메시지

  return (
    <div
      className={cn(
        "w-full h-full min-w-[320px] min-h-[230px] rounded-[16px] p-6 bg-white shadow-lg overflow-hidden",
        "flex flex-col",
        "desktop:min-w-[384px] desktop:min-h-[280px]",
        "tablet:min-w-[352px] tablet:min-h-[284px]"
      )}
    >
      {/* User Meta */}
      <CardHeader img={img} user={user} onDelete={onDelete} />

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Content */}
      <p className="flex-1 overflow-y-auto my-4">{content || ErrMsg}</p>

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {date || ErrMsg}
      </span>
    </div>
  );
};

export default Card;
