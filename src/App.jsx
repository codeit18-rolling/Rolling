import { cn } from "./utils";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <h1
        className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
      >
        4팀 화이팅 &#x1F60A;
      </h1>
    </>
  );
}

export default App;
