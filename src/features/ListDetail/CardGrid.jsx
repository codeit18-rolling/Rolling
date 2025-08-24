import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import { cn } from "../../utils";
import CardGridLoading from "./CardGridLoading";
import useGetRecipientsDetailData from "../../hooks/fetcher/ListDetails/useGetRecipientsDetailData";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { useRef } from "react";

const CardGrid = ({ id, isDeleteMode = false }) => {
  const observerTarget = useRef(null);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetRecipientsDetailData({
      id,
    });

  const cardDetailData = data?.pages.flatMap((page) => page.results) ?? [];

  // 무한 스크롤 훅
  useInfiniteScroll({
    observerTarget,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  });

  return (
    <>
      {isLoading && <CardGridLoading />}
      <div
        className={cn(
          "grid gap-[16px] grid-cols-1 w-full justify-center order-2",
          "tablet:grid-cols-2",
          "desktop:grid-cols-3 desktop:gap-[24px] desktop:order-2 desktop:px-[24px]"
        )}
      >
        {!isDeleteMode && !isLoading && <AddCard id={id} />}
        {cardDetailData?.map((data, index) => (
          <Card key={index} isDeleteMode={isDeleteMode} data={data} />
        ))}
      </div>
      <div ref={observerTarget} className="h-4 w-full" />
    </>
  );
};

export default CardGrid;
