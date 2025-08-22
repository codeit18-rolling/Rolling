import { memo } from "react";
import { HeaderServiceWrapper } from "./HeaderServiceElements/HeaderServiceWrapper";
import { cn } from "../../utils";
import Writers from "../../components/Writers/Writers";
import HeaderServiceActions from "./HeaderServiceElements/HeaderServiceActions";

/**
 * 헤더 밑 부분에 표출되는 헤더 서비스 컴포넌트
 * @author <hwitae>
 * @param {string} recipientId
 */
const HeaderService = ({ recipients, isLoading }) => {
  return (
    <HeaderServiceWrapper>
      {!isLoading ? (
        <>
          <div
            className={cn(
              "h-[52px] min-w-0 flex items-center w-full border-b border-gray-200",
              "tablet:border-none",
              "desktop:w-[450px]"
            )}
          >
            <p
              className={cn(
                "text-18 px-5 text-gray-800 font-bold leading-[42px] truncate",
                "tablet:border-none tablet:h-[42px] tablet:text-28"
              )}
            >
              To. {recipients?.name || "Codeit"}
            </p>
          </div>
          <div className={cn("flex items-center justify-center")}>
            <div className="justify-start pr-7 hidden desktop:block mobile:hidden">
              <Writers data={recipients} />
            </div>
            <div
              className={cn(
                "hidden items-center h-[28px] border-r",
                "desktop:block"
              )}
            ></div>
            <div
              className={cn(
                "flex items-center px-5 w-full justify-between",
                "tablet:px-0 tablet:justify-center tablet:w-fit"
              )}
            >
              <HeaderServiceActions recipient={recipients} />
            </div>
          </div>
        </>
      ) : (
        <>데이터를 불러오는 중 입니다...</>
      )}
    </HeaderServiceWrapper>
  );
};

export default memo(HeaderService);
