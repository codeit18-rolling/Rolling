import CardList from "./CardListElements/CardList";
import react, { useEffect, useState } from "react";
import PureList from "./CardListElements/PureList";
import { cn } from "../../utils";

/**
 *sortOder 변수에 의해 정렬된 카드리스트를 보여준다.
 * @author <junghoon>
 * @param {object} Lists -> api에서 받아온 객체(현재는 목데이터)에서 카드 리스트 정보만 빼온 것
 * @param {object} Items -> lists를 sortOrder 프롭순으로 정렬한 객체
 * @returns {jsx} 각각 prop에 의해 정렬된 4개의 객체 어레이를 CardList 컴포넌트로 시각화한걸 반환
 */

const CardListSet = ({ sortOrder }) => {
  const Lists = PureList();

  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let sortedLists;
    if (sortOrder == "createdAt") {
      sortedLists = [...Lists].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortOrder == "reactionCount") {
      sortedLists = [...Lists].sort(
        (a, b) => b.reactionCount - a.reactionCount
      );
    } else {
      throw new Error("정렬기준이 이상합니다.");
    }

    setItems(sortedLists);
  }, [sortOrder]);
  const totalIndex = Math.ceil(Lists.length / 4);
  const displayingCards = items.slice(index * 4, index * 4 + 4);

  return (
    <div className="w-[1160px] h-[260px] p-0 flex flex-row justify-center relative">
      {index > 0 && (
        <button
          type="button"
          onClick={() => setIndex(index - 1)}
          className="absolute top-[110px] left-[-20px] z-10"
        >
          <span>임시 좌방향 화살표</span>
        </button>
      )}
      <div className="grid grid-cols-4 grid-row-1 gap-5">
        {/*카드 리스트 들어갈 곳 */}
        {displayingCards.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
      {index < totalIndex - 1 && (
        <button
          type="button"
          onClick={() => setIndex(index + 1)}
          className="absolute top-[110px] right-[-20px] z-10"
        >
          <span>임시 우방향 화살표</span>
        </button>
      )}
    </div>
  );
};

export default CardListSet;
