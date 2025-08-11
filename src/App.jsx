import { Route, Routes } from "react-router";
import { Header } from "./components/Header/Header";
import { MainLayout } from "./components/Header/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <h1 className="text-purple-800">4팀 화이팅 &#x1F60A;</h1> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
