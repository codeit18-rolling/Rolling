import { cn } from "./utils";
import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import AddCard from "./components/Card/AddCard";
import {
  CardMockData,
  REACTIONS_DATA,
  MESSAGES_DATA,
  BACKGROUND_IMG_DATA,
} from "./MockData";
import DropdownEmoji from "./components/Dropdown/DropdownEmoji";

import Input from "./components/Input/Input";
import { DropdownAddEmoji } from "./components/Dropdown/DropdownAddEmoji";
import Writers from "./components/Writers/Writers";
import Option from "./features/option/Option";
import SkeletonUI from "./components/Skeleton/SkeletonUI";
import { ShareButton } from "./features/HeaderService/HeaderServiceElements/ShareButton";
import CardListSet from "./features/CardList/CardListSet";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import ListDetails from "./pages/ListDetails";
import Message from "./pages/Message";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Lists />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<ListDetails />} />
        <Route path="/post/:id/message" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="w-full h-screen flex flex-col p-20 items-center justify-around">
        <h1
          className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
        >
          4팀 화이팅 &#x1F60A;
        </h1>
        {/* CardList Components */}
        <div className="gap-8 flex flex-col">
          <CardListSet sortOrder="createdAt" />
          <CardListSet sortOrder="reactionCount" />
        </div>

        {/* Emoji Dropdown & writer component */}
        <div className="flex">
          <Writers messages={MESSAGES_DATA} />
          <Writers messages={MESSAGES_DATA} useCard={true} />
          <DropdownEmoji reactionData={REACTIONS_DATA} />
          <DropdownAddEmoji />
          <ShareButton />
        </div>

        {/* Input Components */}
        <div className="flex flex-col gap-5 w-[400px] mt-4">
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

        {/* Option Components */}
        <div className="w-full max-w-[1200px]">
          <Option type="color"></Option>
          <Option type="image" bgImage={BACKGROUND_IMG_DATA}></Option>
          {/* 
          실제 스켈레톤 UI 적용시엔 로딩상태를 받아서 적용
          <Option type="image" bgImage={bgImages} isLoading={isLoading}></Option> 
          */}
        </div>
        {/* SkeletonUI Components */}
        {/* className(컨테이너) 과 boxClassName(하위박스요소) 를 이용하여 반응형을 구현할 수 있습니다. */}
        <div className="w-full max-w-[1200px]">
          <SkeletonUI count={4} className="tablet:flex-nowrap" />
          <SkeletonUI
            count={6}
            boxClassName="tablet:w-[calc((100%-(1rem*2))/3)]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
