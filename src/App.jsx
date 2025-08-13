import { cn } from "./utils";
import { Header } from "./components/Header/Header";
import Card from "./components/Card/Card";
import AddCard from "./components/Card/AddCard";
import CardList from "./features/CardList/CardList";
import {
  CardMockData,
  REACTIONS_DATA,
  CardListMockData,
  MESSAGES_DATA,
} from "./MockData";
import DropdownEmoji from "./components/Dropdown/DropdownEmoji";

import Input from "./components/Input/Input";
import { DropdownAddEmoji } from "./components/Dropdown/DropdownAddEmoji";
import Writers from "./components/Writers/Writers";
function App() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex flex-col p-20 items-center justify-around">
        <h1
          className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
        >
          4팀 화이팅 &#x1F60A;
        </h1>

        {/* Emoji Dropdown & writer component */}
        <div className="flex">
          <Writers messages={MESSAGES_DATA} />
          <Writers messages={MESSAGES_DATA} useCard={true} />
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
        <div className="grid grid-cols-3 gap-[24px]">
          {CardListMockData.map((item) => (
            <CardList key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
