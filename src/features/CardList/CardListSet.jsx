import CardList from "./CardListElements/CardList";
import { useEffect, useState } from "react";
import PureList from "./CardListElements/PureList";
import leftbutton from "../../assets/icon/ic_arrow_left.svg";
import rightbutton from "../../assets/icon/ic_arrow_right.svg";
import { cn } from "../../utils";
import Button from "../../components/Button/Button";

/**
 *sortOder 변수에 의해 정렬된 카드리스트를 보여준다.
 * @author <Junghoon>
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
  const btn_design = "absolute z-10 top-[110px]";
  const design_for_PC = "w-[1200px] h-[260px] p-0";
  return (
    <div className="flex justify-center relative">
      <div className={cn("hidden tablet:flex", design_for_PC)}>
        {/*PC가 아닐땐 모두 숨겨버리자! */}
        {index != 0 && (
          <div className={cn("left-0", btn_design)} aria-label="좌방향 버튼">
            <Button
              btnStyle="outlined"
              btnSize="btn-icon-40"
              onClick={() => setIndex(index - 1)}
            >
              <span>
                <img src={leftbutton} />
              </span>
            </Button>
          </div>
        )}
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mx-5">
          {/*카드 리스트 들어갈 곳 */}
          {displayingCards.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
        </div>
        {index != totalIndex - 1 && (
          <div className={cn("right-0", btn_design)} aria-label="우방향 버튼">
            <Button
              btnStyle="outlined"
              btnSize="btn-icon-40"
              onClick={() => setIndex(index + 1)}
            >
              <span>
                <img src={rightbutton} />
              </span>
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide tablet:hidden mobile:gap-5 pl-5 mobile:pl-6 ">
        {/*모바일/태블릿용 CardList를 새로 뽑아봅시다. */}
        {items.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardListSet;
