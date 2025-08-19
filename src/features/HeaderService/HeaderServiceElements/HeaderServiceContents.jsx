import { memo } from "react";
import Writers from "../../../components/Writers/Writers";
import { cn } from "../../../utils";
import HeaderServiceActions from "./HeaderServiceActions";

/**
 * 작성자, 이모지, 이모지 추가, 공유 버튼을 모아둔 컴포넌트
 * @author <hwitae>
 * @param {Object{}} recipients
 * @returns
 */
export const HeaderServiceContents = ({ recipients }) => {
  return (
    <div className={cn("flex items-center justify-center")}>
      <div className="justify-start pr-7 hidden desktop:block mobile:hidden">
        <Writers data={recipients} />
      </div>
      <div
        className={cn("hidden items-center h-[28px] border-r", "desktop:block")}
      ></div>
      <div
        className={cn(
          "flex items-center px-5 w-full justify-between",
          "tablet:px-0 tablet:justify-center tablet:w-fit"
        )}
      >
        <HeaderServiceActions topReactions={recipients?.topReactions} />
      </div>
    </div>
  );
};

export default memo(HeaderServiceContents);
