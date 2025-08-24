import { useRef, useEffect } from "react";
import CardList from "./CardList";
import useInfiniteQueryList from "../hooks/useInfiniteQueryList";
import scrollObserver from "../hooks/scrollObserver";

const MobileGrid = (sortOrder) => {
  const observer = useRef();
  const containerRef = useRef();

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryList(sortOrder);
  const items = data?.pages.flatMap((item) => item.results) ?? [];

  scrollObserver({
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
