import { useEffect, useState } from "react";
import DesktopGrid from "./CardListElements/desktopGrid";
import MobileGrid from "./CardListElements/MobileGrid";
import useQueryList from "./hooks/useQueryList";
import usePrefetchQueryList from "./hooks/usePrefetchQueryList";
/**
 *sortOder 변수에 의해 정렬된 카드리스트를 보여준다.
 * @author <Junghoon>
 * @param {object} Lists -> api에서 받아온 객체(현재는 목데이터)에서 카드 리스트 정보만 빼온 것
 * @param {object} Items -> lists를 sortOrder 프롭순으로 정렬한 객체
 * @returns {jsx} 각각 prop에 의해 정렬된 4개의 객체 어레이를 CardList 컴포넌트로 시각화한걸 반환
 */

const CardListSet = ({ sortOrder }) => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const { isLoading, isError, data } = useQueryList(index, sortOrder);
  const totalIndex = data ? Math.ceil(data?.count / 4) : 1;
  usePrefetchQueryList(index, sortOrder, totalIndex);
  useEffect(() => {
    if (data?.results) {
      setItems(data.results);
    }
  }, [data]);
  return (
    <div className="flex justify-center relative">
      <DesktopGrid
        items={items}
        clickNext={() => setIndex(index + 1)}
        clickLast={() => setIndex(index - 1)}
        isNext={index !== totalIndex - 1}
        isLast={index !== 0}
      />
      <MobileGrid items={items} />
    </div>
  );
};

export default CardListSet;
