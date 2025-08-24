import { useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";
import CardList from "./CardList";
import SkeletonUI from "../../../components/Skeleton/SkeletonUI";
import useGetPrefetchRecipients from "../hooks/useGetPrefetchRecipientsList";
import useGetRecipientList from "../hooks/useGetRecipientList";

const DesktopGrid = ({ sortOrder }) => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  const { isLoading, isError, data } = useGetRecipientList({
    index,
    sortOrder,
  });

  const totalIndex = data ? Math.ceil(data?.count / 4) : 1;
  useGetPrefetchRecipients({ index, sortOrder, totalIndex });

  useEffect(() => {
    if (data?.results) {
      setItems(data?.results);
    }
  }, [data]);
  return (
    <div className="w-[1200px] h-[260px] p-0 hidden desktop:flex ">
      {isError && <div>데이터를 불러오는데 실패했습니다.</div>}
      {isLoading && (
        <SkeletonUI
          count={4}
          className="flex-row flex-nowrap overflow-hidden px-5 gap-3 tablet:gap-5"
          boxClassName="w-[208px] h-[232px] tablet:w-[275px] tablet:h-[260px]"
        />
      )}
      {index !== 0 && (
        <ArrowButton
          direction="left"
          disabled={isLoading}
          onClick={() => setIndex(index - 1)}
        />
      )}
      {!isLoading && !isError && (
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mx-5">
          {items?.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
        </div>
      )}
      {index !== totalIndex - 1 && (
        <ArrowButton
          direction="right"
          disabled={isLoading}
          onClick={() => setIndex(index + 1)}
        />
      )}
    </div>
  );
};

export default DesktopGrid;
