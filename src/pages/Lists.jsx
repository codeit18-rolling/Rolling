import { Header } from "../components/Header/Header";
import CardListSet from "../features/CardList/CardListSet";
import Button from "../components/Button/Button";
import { Link } from "react-router";

function Lists() {
  const LIST_DESIGN = "flex flex-col gap-4 mt-[50px]";
  const MSG_DESIGN = "text-24 font-bold text-black";

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="flex flex-col w-[1160] justify-start items-center">
        <div className={`${LIST_DESIGN}`}>
          <span className={`${MSG_DESIGN}`}>인기 롤링 페이퍼 🔥</span>
          <CardListSet sortOrder="reactionCount" />
        </div>
        <div className={`${LIST_DESIGN}`}>
          <span className={`${MSG_DESIGN}`}>최근에 만든 롤링 페이퍼 ⭐️️</span>
          <CardListSet sortOrder="createdAt" />
        </div>
        <Link to="/post">
          <div className="mt-16 text-center">
            <Button className="w-[280px] text-18">나도 만들어 보기</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Lists;
