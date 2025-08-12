import { cn } from "./utils";
import CardList from "./features/CardList/cardList";
import { CardListMockData } from "./MockData";

function App() {
  return (
    <div className="w-full h-screen flex flex-col p-20 items-center justify-around">
      <h1
        className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
      >
        4팀 화이팅 &#x1F60A;
      </h1>

      {/* CardList Components */}
      <div className="grid grid-cols-3 gap-[24px]">
        {CardListMockData.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
