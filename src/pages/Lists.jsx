import CardListSet from "../features/CardList/CardListSet";
import Button from "../components/Button/Button";
import { Link } from "react-router";
import MetaTag from "../components/MetaTag/MetaTag";

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
    <div className="w-full flex flex-col desktop:items-center overflow-x-auto">
      <MetaTag
        title="Rolling | 롤링페이퍼 둘러보기"
        description="롤링페이퍼를 확인하거나 새로운 롤링페이퍼를 만들어 보실 수 있습니다."
      />
      <div className="flex flex-col desktop:w-[1200px] justify-start desktop:items-start desktop:mx-auto">
        {ListPageMap.map(({ title, sortOrder }) => (
          <div className={`${DESIGN.List}`} key={title}>
            <span className={`${DESIGN.Msg}`}>{title}</span>
            <CardListSet sortOrder={sortOrder} />
          </div>
        ))}
      </div>
      <Link
        to="/post"
        className="mt-[66px] tablet:mt-[156px] desktop:mt-16 mb-6 text-center w-full px-5 tablet:px-6 desktop:px-0 desktop:w-[280px]"
      >
        <Button className="w-full desktop:w-[280px]">나도 만들어 보기</Button>
      </Link>
    </div>
  );
}

export default Lists;
