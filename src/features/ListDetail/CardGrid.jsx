import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import SkeletonUI from "../../components/Skeleton/SkeletonUI";
import useService from "../../hooks/fetcher/useService";
import { getRecipientsDetailData } from "../../service/ListDetails/getRecipientsDetailData";
import { cn } from "../../utils";
// import deleteRecipient from "../../service/ListDetails/deleteRecipientsDetail";

const CardGrid = ({ id, isDeleteMode = false }) => {
  const { data: cardData, isLoading } = useService(() =>
    getRecipientsDetailData(id)
  );

  // console.log(cardData);

  // 카드 전체 삭제 함수
  // const deleteButtonHandler = () => deleteRecipient(id);

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
        <Card key={index} isDeleteMode={isDeleteMode} data={data} />
      ))}
    </div>
  );
};

export default CardGrid;
