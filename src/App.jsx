import { cn } from "./utils";
import { Header } from "./components/Header/Header";

import Card from "./components/Card/Card";
import AddCard from "./components/Card/AddCard";
import { CardMockData } from "./MockData";

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
      </div>
    </>
  );
}

export default App;
