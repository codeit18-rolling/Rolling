import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import { MainLayout } from "./components/Header/MainLayout";
import { cn } from "./utils";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <h1 className="text-purple-800">4팀 화이팅 &#x1F60A;</h1> */}
        </Route>
      </Routes>
      <h1
        className={cn("font-bold text-2xl", "text-purple-800", "text-center")}
      >
        4팀 화이팅 &#x1F60A;
      </h1>
    </>
  );
}

export default App;
