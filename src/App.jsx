import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import ListDetails from "./pages/ListDetails";
import Message from "./pages/Message";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
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
    </>
  );
}

export default App;
