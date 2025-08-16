import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import SkeletonUI from "../../components/Skeleton/SkeletonUI";
import useService from "../../hooks/useService";
import { getRecipientsDetailData } from "../../service/getRecipientsDetailData";

// Mock Data
import { CardMockData } from "../../MockData";
import { cn } from "../../utils";

const CardGrid = ({ id, isDeleteMode = false }) => {
  const { data: cardData, isLoading } = useService(() =>
    getRecipientsDetailData(id)
  );

  console.log(cardData);

  return (
    <div
      className={cn(
        "grid gap-[16px] grid-cols-1 w-full justify-center",
        "desktop:grid-cols-3 desktop:grid-row-2 desktop:gap-[24px]",
        "tablet:grid-cols-2 tablet:grid-row-2"
      )}
    >
      {!isDeleteMode && <AddCard id={id} />}
      {isLoading && <SkeletonUI count={5} />}
      {cardData?.recentMessages?.map((data, index) => (
        <Card
          key={index}
          img={data.profileImageURL}
          user={data.sender}
          content={data.content}
          date={data.createdAt}
          isDeleteMode={isDeleteMode}
        />
      ))}
    </div>
  );
};

export default CardGrid;
