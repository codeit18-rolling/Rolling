import CardListSet from "../features/CardList/CardListSet";
import Button from "../components/Button/Button";
import { Link } from "react-router";

const DESIGN = {
  List: "flex flex-col gap-3 mobile:gap-4 mt-[40px] mobile:mt-[50px]",
  Msg: "text-20 mobile:text-24 font-bold text-black ml-5 mobile:ml-6 tablet:ml-5",
};
const ListPageMap = [
  {
    title: "인기 롤링 페이퍼 🔥",
    sortOrder: "reactionCount",
  },
  {
    title: "최근에 만든 롤링 페이퍼 ⭐️️",
    sortOrder: "createdAt",
  },
];

function Lists() {
  return (
    <div className="w-full flex flex-col tablet:items-center overflow-x-auto">
      <div className="flex flex-col tablet:w-[1200px] justify-start tablet:items-start tablet:mx-auto">
        {ListPageMap.map(({ title, sortOrder }) => (
          <div className={`${DESIGN.List}`} key={title}>
            <span className={`${DESIGN.Msg}`}>{title}</span>
            <CardListSet sortOrder={sortOrder} />
          </div>
        ))}
      </div>
      <Link
        to="/post"
        className="mt-[66px] mobile:mt-[156px] tablet:mt-16 mb-6 text-center w-full px-5 mobile:px-6 tablet:px-0 tablet:w-[280px]"
      >
        <Button className="w-full tablet:w-[280px]">나도 만들어 보기</Button>
      </Link>
    </div>
  );
}

export default Lists;
