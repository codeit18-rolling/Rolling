import { useRef } from "react";
import CardList from "./CardList";
import useInfiniteQueryList from "../hooks/useInfiniteQueryList";
import scrollObserver from "../hooks/scrollObserver";

const MobileGrid = (sortOrder) => {
  const observer = useRef();

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryList(sortOrder);
  const items = data?.pages.flatMap((item) => item.results) ?? [];

  scrollObserver({
    observerTarget: observer,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <>
      <div
        className={`flex flex-row gap-3 overflow-x-auto tablet:hidden mobile:gap-5 pl-5 mobile:pl-6 pr-24`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/*모바일/태블릿용 CardList*/}
        {items?.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
        <div ref={observer}></div>
      </div>
    </>
  );
};

export default MobileGrid;
