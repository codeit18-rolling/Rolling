import { useRef, useEffect } from "react";
import CardList from "./CardList";
import SkeletonUI from "../../../components/Skeleton/SkeletonUI";
import useInfiniteQueryList from "../hooks/useGetInfiniteList";
import useInfiniteScroll from "../../ListDetail/hooks/useInfiniteScroll";

const MobileGrid = (sortOrder) => {
  const observer = useRef();
  const containerRef = useRef();

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQueryList(sortOrder);
  const items = data?.pages.flatMap((item) => item.results) ?? [];

  useInfiniteScroll({
    observerTarget: observer,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    const el = containerRef.current;
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`flex flex-row gap-3 overflow-x-auto desktop:hidden tablet:gap-5 pl-5 tablet:pl-6 pr-24`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {isError && <div>데이터를 불러오는데 실패했습니다.</div>}
        {isLoading && (
          <SkeletonUI
            count={4}
            className="flex-row flex-nowrap px-5 gap-3 tablet:gap-5"
            boxClassName="w-[208px] h-[232px] tablet:w-[275px] tablet:h-[260px]"
          />
        )}
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
