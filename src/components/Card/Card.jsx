import CardHeader from "./CardElements/CardHeader";
import { cn } from "../../utils";
import { ERROR_MESSAGE } from "../../features/ListDetail/constants/ERROR_MESSAGE";
import { dateFunc } from "../../utils/dateFunc";

// Card Component
const Card = ({ data, isDeleteMode = false, onModalOpen }) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-w-[320px] min-h-[230px] rounded-[16px] p-6 bg-white shadow-lg overflow-hidden cursor-pointer",
        "hover:bg-gray-100 transition-all duration-150 ease-in-out",
        "desktop:min-w-[384px] desktop:min-h-[280px]",
        "tablet:min-w-[352px] tablet:min-h-[284px]"
      )}
      onClick={onModalOpen}
    >
      {/* User Meta */}
      <CardHeader data={data} isDeleteMode={isDeleteMode} />

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Content */}
      <p className="flex-1 overflow-y-auto my-4">
        {data?.content || ERROR_MESSAGE}
      </p>

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {dateFunc(data?.createdAt) || ERROR_MESSAGE}
      </span>
    </div>
  );
};

export default Card;
