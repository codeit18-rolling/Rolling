import { useCallback, useEffect, useRef, useState } from "react";

const CardList = ({ item }) => {
  return (
    <div className="w-[275px] h-[260px] pt-[30px] pr-[24px] pb-[20px] pl-[24px] rounded-[16px] border border-black/10">
      {/*container*/}
      <div className="">
        {/*to. ~ , 몇명이 작성 등등이 들어갈 곳 */}
        <div className="">
          {/*받는사람 */}
          <span
            className={`font-[700] text-[24px] ${
              item.backgroundURL ? "text-white" : "text-gray-900"
            }`}
          >
            To. {item.name}
          </span>
        </div>
        <div className="">{/*프로필 이미지들*/}</div>
        <div className="">
          {/*~~명이 작성하셨습니다. */}
          <span
            className={`font-[700] text-[16px] ${
              item.backgroundURL ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {item.messageCount}
          </span>
          <span
            className={`font-[400] text-[16px] ${
              item.backgroundURL ? "text-gray-200" : "text-gray-700"
            }`}
          >
            명이 작성했어요!
          </span>
        </div>
      </div>
      <div className="">{/* emojis 들어갈 곳 */}</div>
    </div>
  );
};
