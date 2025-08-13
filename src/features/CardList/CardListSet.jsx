import CardList from "./cardList";
import react, { useState } from "react";
import { ALL_CARD_LIST } from "../../MockData";

const CardListSet = ({ sortOrder }) => {
  const Lists = ALL_CARD_LIST.results;
  let sortedLists;
  const [index, setIndex] = useState("0");
  const [items, setItems] = useState([]);
  if (sortOrder === "createdAt") {
    sortedLists = Lists.sort(
      (a, b) => new Date(b.createdAt) - new Date(a, createdAt)
    );
  } else if (sortOrder === "reactionCount") {
    sortedLists = Lists.sort((a, b) => b.messageCount - a.messageCount);
  } else {
    throw new Error("정렬기준이 이상합니다.");
  }
  setItems(sortedLists);

  return (
    <div className="w-[1160px], h-[260px] p-0 flex items-center">
      {index > 0 && (
        <button
          type="button"
          onClick={() => setIndex(index - 1)}
          className="absolute top-[110px] left-[-20px] z-10"
        >
          <span>임시 좌방향 화살표</span>
        </button>
      )}
    </div>
  );
};
