import { memo, useState } from "react";
import DropdownEmoji from "../../../components/Dropdown/DropdownEmoji";
import { DropdownAddEmoji } from "../../../components/Dropdown/DropdownAddEmoji";
import { ShareButton } from "./ShareButton";
import { cn } from "../../../utils";
import { useLocation } from "react-router";
import useService from "../../../hooks/fetcher/useService";
import { getAllEmojiData } from "../../../service/Emoji/getAllEmojiData";

/**
 * 헤더 서비스에서 action이 있는 부분을 모아둔 컴포넌트
 * @author <hwitae>
 * @param {Object[]} topReactions 이모지 배열
 * @returns
 */
const HeaderServiceActions = ({ topReactions = [] }) => {
  const { pathname } = useLocation();
  const postId = pathname.slice(6);
  const { data, isError } = useService(() => getAllEmojiData(postId));

  return (
    <>
      <div className="desktop:pl-7">
        <DropdownEmoji reactions={topReactions} allReactions={data} />
      </div>
      <div className="flex items-center h-[52px] tablet:h-[0px]">
        <DropdownAddEmoji />
        <div
          className={cn(
            "flex items-center border-r h-[28px]",
            "tablet:pl-[13px]",
            "mobile:pl-[15px]"
          )}
        ></div>
        <div className="tablet:pl-[13px] mobile:pl-[15px]">
          <ShareButton />
        </div>
      </div>
    </>
  );
};
export default memo(HeaderServiceActions);
