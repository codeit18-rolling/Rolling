import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import useService from "../../hooks/fetcher/useService";
import { getRecipientsDetailData } from "../../service/ListDetails/getRecipientsDetailData";
import { cn } from "../../utils";
import CardGridLoading from "./CardGridLoading";

const CardGrid = ({ id, isDeleteMode = false }) => {
  const { data: cardDetailData, isLoading } = useService(() =>
    getRecipientsDetailData(id)
  );

  // console.log(cardDetailData);

  return (
    <>
      {isLoading && <CardGridLoading />}
      <div
        className={cn(
          "grid gap-[16px] grid-cols-1 w-full justify-center",
          "desktop:grid-cols-3 desktop:grid-row-2 desktop:gap-[24px]",
          "tablet:grid-cols-2 tablet:grid-row-2"
        )}
      >
        {!isDeleteMode && <AddCard id={id} />}
        {cardDetailData?.results?.map((data, index) => (
          <Card key={index} isDeleteMode={isDeleteMode} data={data} />
        ))}
      </div>
    </>
  );
};

export default CardGrid;
