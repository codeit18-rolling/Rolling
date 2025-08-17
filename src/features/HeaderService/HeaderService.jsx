import { memo } from "react";
import { cn } from "../../utils";
import RecipientName from "./HeaderServiceElements/RecipientName";
import HeaderServiceContents from "./HeaderServiceElements/HeaderServiceContents";

/**
 * 헤더 밑 부분에 표출되는 헤더 서비스 컴포넌트
 * @author <hwitae>
 * @param {Object{}} recipients
 */
const HeaderService = ({ recipients }) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-center h-[104px] bg-white z-50",
          "tablet:items-center tablet:h-[68px]"
        )}
      >
        <div
          className={cn(
            "justify-between flex flex-col",
            "w-full mx-auto max-w-[1248px]",
            "tablet:flex-row tablet:items-center tablet:h-[42px] tablet:px-[24px]"
          )}
        >
          <RecipientName name={recipients.name} />
          <HeaderServiceContents recipients={recipients} />
        </div>
      </div>
    </>
  );
};

export default memo(HeaderService);
