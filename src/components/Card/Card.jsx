import CardHeader from "./CardElements/CardHeader";
import { cn } from "../../utils";
import { ERROR_MESSAGE } from "../../features/ListDetail/constants/ERROR_MESSAGE";
import { dateFunc } from "../../utils/dateFunc";

// Card Component
const Card = ({ img, user, content, date, isDeleteMode = false, id }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-w-[320px] min-h-[230px] rounded-[16px] p-6 bg-white shadow-lg overflow-hidden",
        "desktop:min-w-[384px] desktop:min-h-[280px]",
        "tablet:min-w-[352px] tablet:min-h-[284px]"
      )}
    >
      {/* User Meta */}
      <CardHeader img={img} user={user} isDeleteMode={isDeleteMode} id={id} />

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Content */}
      <p className="flex-1 overflow-y-auto my-4">{content || ERROR_MESSAGE}</p>

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {dateFunc(date) || ERROR_MESSAGE}
      </span>
    </div>
  );
};

export default Card;
