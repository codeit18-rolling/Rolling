import CardHeader from "./CardElements/CardHeader";
import { cn } from "../../utils";
import { ERROR_MESSAGE } from "../../features/ListDetail/constants/ERROR_MESSAGE";
import { dateFunc } from "../../utils/dateFunc";
import { useState } from "react";
import Modal from "../Modal/Modal";

// Card Component
const Card = ({ data, isDeleteMode = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col w-full h-full min-w-[320px] min-h-[230px] rounded-[16px] p-6 bg-white shadow-lg overflow-hidden cursor-pointer",
        "hover:bg-gray-100 transition-all duration-150 ease-in-out",
        "desktop:min-w-[384px] desktop:h-[280px]",
        "tablet:min-w-[352px] tablet:h-[284px]"
      )}
      onClick={() => setIsModalOpen(true)}
    >
      {/* User Meta */}
      <CardHeader data={data} isDeleteMode={isDeleteMode} />

      {/* Divider */}
      <hr className="border-gray-200 mt-[15px]" />

      {/* Content */}
      <div
        style={{ fontFamily: data?.font }}
        className="flex-1 my-4 w-full overflow-hidden truncate font-normal text-18 leading-7 tracking-[-0.01em] text-gray-600"
        dangerouslySetInnerHTML={{ __html: data?.content || ERROR_MESSAGE }}
      />

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {dateFunc(data?.createdAt) || ERROR_MESSAGE}
      </span>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sender={data?.sender}
          profileImageURL={data?.profileImageURL}
          relationship={data?.relationship}
          content={data?.content}
          createdAt={data?.createdAt}
        />
      )}
    </div>
  );
};

export default Card;
