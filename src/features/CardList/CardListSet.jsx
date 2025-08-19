import CardList from "./CardListElements/CardList";
import { useEffect, useState, useCallback } from "react";
import Icon from "../../components/Icon/Icon";
import { cn } from "../../utils";
import Button from "../../components/Button/Button";
import getLists from "../../service/Lists/getLists";
import useService from "../../hooks/fetcher/useService";
import useList from "./hooks/useList";
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

  const { isLoading, isError, data } = useList(index, sortOrder);
  console.log(data);
  useEffect(() => {
    if (data?.results) {
      setItems(data.results);
    }
  }, [data]);

  const totalIndex = data ? Math.ceil(data.count / 4) : 1;
  const displayingCards = items;
  const btn_design = "absolute z-10 top-[110px]";

  return (
    <div className="flex justify-center relative">
      <div className="w-[1200px] h-[260px] p-0 hidden tablet:flex ">
        {/*PC가 아닐땐 모두 숨겨버리자! */}
        {index !== 0 && (
          <div className={cn("left-0", btn_design)} aria-label="좌방향 버튼">
            <Button
              btnStyle="outlined"
              btnSize="btn-icon-40"
              onClick={() => setIndex(index - 1)}
            >
              <span>
                <Icon
                  iconName="arrow_left"
                  iconSize="ic-16"
                  className="bg-gray-900 btn-icon"
                />
              </span>
            </Button>
          </div>
        )}
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mx-5">
          {/*카드 리스트 들어갈 곳 */}
          {items.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
        </div>
        {index !== totalIndex - 1 && (
          <div className={cn("right-0", btn_design)} aria-label="우방향 버튼">
            <Button
              btnStyle="outlined"
              btnSize="btn-icon-40"
              onClick={() => setIndex(index + 1)}
            >
              <span>
                <Icon
                  iconName="arrow_right"
                  iconSize="ic-16"
                  className="bg-gray-900 btn-icon"
                />
              </span>
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide tablet:hidden mobile:gap-5 pl-5 mobile:pl-6 ">
        {/*모바일/태블릿용 CardList를 새로 뽑아봅시다.*/}
        {items.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardListSet;
