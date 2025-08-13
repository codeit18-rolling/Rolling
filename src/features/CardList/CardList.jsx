import React from "react";
import BG_COLOR from "../../constants/backgroundcolor";

const BG_PATTERN = {
  purple: "",
  beige: "",
  blue: "",
  green: "",
};

const CardList = ({ item }) => {
  return (
    <div
      className={`w-[275px] h-[260px] pt-[30px] pb-[20px] px-[24px] rounded-[16px] border border-black/10 flex relative justify-start items-start flex-col ${
        !item.backgroundImageURL ? BG_COLOR[item.backgroundColor] : ""
      } bg-[url("${item.backgroundImageURL}")] bg-cover bg-center`}
    >
      {/*container*/}
      <div className="w-[125px]">
        <div className="">
          {/*to. ~ , 몇명이 작성 등등이 들어갈 곳 */}
          <div className="text-24">
            {/*받는사람 */}
            <span
              className={`font-bold text-2xl ${
                item.backgroundImageURL ? "text-white" : "text-gray-900"
              }`}
            >
              To. {item.name}
            </span>
          </div>
          <div className="">
            {/*프로필 이미지들 현재 참조하는 페이지를 몰라 제작 난항 겪는중....*/}
          </div>
          <div
            className={` text-16 ${
              item.backgroundImageURL ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {/*~~명이 작성하셨습니다. */}
            <span className="font-[700]">{item.messageCount}</span>
            <span className="font-[400]">명이 작성했어요!</span>
          </div>
        </div>
      </div>

      <div className="bottom-5 gap-2 w-[227px] h-[53px] pt-[17px] absolute flex flex-row border-t border-black/[0.12]">
        {/* emoji 들어갈 곳 (컴포넌트로 대체할 예정?)*/}
        {item.topReactions.map((reaction) => (
          <div
            key={reaction.id}
            className="flex justify-center items-center px-3 py-2 w-[65px] h-[36px] rounded-[32px] bg-black/[0.54] space-x-[2px]"
          >
            <span className="">{reaction.emoji}</span>
            <span className="text-white">{reaction.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
