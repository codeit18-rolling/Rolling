import { cn } from "./utils";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <h1
        className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
      >
        4팀 화이팅 &#x1F60A;
      </h1>
      <div className="flex items-center justify-center">
        <Card />
      </div>
    </>
  );
}

export default App;
