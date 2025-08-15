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
import Option from "./features/Option/Option";
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<Lists />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<ListDetails />} />
      <Route path="/post/:id/message" element={<Message />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
