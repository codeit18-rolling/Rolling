import { Link } from "react-router";
import { cn } from "../../utils";
import Icon from "../Icon/Icon";

// Plus Button Component
const AddCard = ({ id }) => {
  return (
    <div
      className={cn(
        "w-full h-full min-w-[320px] min-h-[230px] rounded-[16px] p-6 flex flex-col bg-white shadow-lg overflow-hidden",
        "desktop:min-w-[384px] desktop:min-h-[280px]",
        "tablet:min-w-[352px] tablet:min-h-[284px]"
      )}
    >
      <Link
        to={`/post/${id}/message`}
        className="w-[56px] h-[56px] bg-gray-500 rounded-full p-4 mx-auto my-auto cursor-pointer hover:bg-gray-800 transition-all duration-150 ease-in-out"
        aria-label="추가하기 페이지 이동"
      >
        <Icon iconName="plus" iconSize="ic-24" className="bg-white" />
      </Link>
    </div>
  );
};

export default AddCard;
