import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import SkeletonUI from "../../components/Skeleton/SkeletonUI";
import useService from "../../hooks/useService";
import { getRecipientsDetailData } from "../../service/getRecipientsDetailData";

// Mock Data
import { CardMockData } from "../../MockData";

const CardGrid = ({ id }) => {
  const { data: cardsData, isLoading } = useService(() =>
    getRecipientsDetailData("18-1", id)
  );

  console.log(cardsData);

  return (
    <div className="grid grid-cols-3 grid-row-2 gap-[24px]">
      <AddCard id={id} />
      {isLoading && <SkeletonUI count={5} />}
      {CardMockData?.map((data, index) => (
        <Card
          key={index}
          img={data.img}
          user={data.user}
          content={data.content}
          date={data.date}
          onDelete={data.onDelete}
        />
      ))}
    </div>
  );
};

export default CardGrid;
