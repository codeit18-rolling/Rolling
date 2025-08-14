import { cn } from "./utils";
import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import AddCard from "./components/Card/AddCard";
import { CardMockData, REACTIONS_DATA, CardListMockData } from "./MockData";
import DropdownEmoji from "./components/Dropdown/DropdownEmoji";

import Input from "./components/Input/Input";
import { DropdownAddEmoji } from "./components/Dropdown/DropdownAddEmoji";
import CardListSet from "./features/CardList/CardListSet";
// import useService from "./hooks/useService";
// import { getRecipientsDetailData } from "./service/getRecipientsDetailData";

function App() {
  // API 호출 예시 주석
  // const { data, isLoading, isError } = useService(() =>
  //   getRecipientsDetailData("18-1", "0")
  // );
  // console.log(data);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col p-20 items-center justify-around">
        <h1
          className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
        >
          4팀 화이팅 &#x1F60A;
        </h1>

        {/* Emoji Dropdown component */}
        <div className="flex">
          <DropdownEmoji reactionData={REACTIONS_DATA} />
          <DropdownAddEmoji></DropdownAddEmoji>
        </div>

        {/* Input Components */}
        <div className="flex flex-col gap-4 w-[400px] mt-4">
          <Input></Input>
          <Input disabled></Input>
          <Input errorMsg="이름을 입력해 주세요"></Input>
        </div>

        {/* Card Components */}
        {/* {isLoading && "로딩중..."}
        {!isLoading && isError && "에러가 발생했습니다."}
        {data?.length === 0 && "데이터가 없습니다."} */}

        {/* 현재는 목업 데이터로 넣었기 때문에 "에러가 발생했습니다." 
        문구랑 아래 카드 컴포넌트가 같이 나오고 있습니다. */}
        <div className="grid grid-cols-3 grid-row-2 gap-[24px]">
          <AddCard />
          {CardMockData.map((data, index) => (
            <Card
              key={index}
              img={data.img}
              user={data.user}
              content={data.content}
              date={data.date}
              onDelete={data.onDelete}
            />
          ))}
        </div>
        {/* CardList Components */}
        <div className="gap-8 flex flex-col">
          <CardListSet sortOrder="createdAt" />
          <CardListSet sortOrder="reactionCount" />
        </div>
      </div>
    </>
  );
}

export default App;
