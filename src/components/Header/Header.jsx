import { useLocation } from "react-router";
import icRolling from "../../assets/icon/ic-rolling-paperplain.svg";
import { cn } from "../../utils";
import useMediaQuery from "../../features/header/hooks/useMediaQuery";

/**
 * 헤더 컴포넌트
 * @author <hwitae>
 */
export const Header = () => {
  /**
   * 페이지의 뷰포트가 모바일인지 확인
   */
  const isMobile = useMediaQuery("(max-width: 768px)");

  /**
   * 현재 페이지 경로
   */
  const { pathname } = useLocation();

  return (
    <>
      <header>
        {!(isMobile && pathname !== "/" && pathname !== "/list") && (
          <div className={cn("border-b border-gray-headerBorder")}>
            <div
              className={cn(
                "h-[64px] flex items-center justify-between m-auto px-6",
                "mobile:w-[360px]",
                "tablet:w-[768px]",
                "desktop:w-[1248px]"
              )}
            >
              <div className={cn("flex gap-x-2")}>
                <img
                  className={cn("w-[27px] h-[27px]")}
                  src={icRolling}
                  alt="로고이미지"
                />
                <p
                  className={cn(
                    "font-[poppins] text-20 font-semibold text-gray-headerLogo"
                  )}
                >
                  Rolling
                </p>
              </div>
              <div className={cn("text-center")}>
                {(pathname === "/" || pathname === "/list") && (
                  <button
                    className={cn("border-solid border-black border w-[157px]")}
                  >
                    버튼 들어갈 자리
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {pathname !== "/" && pathname !== "/list" && (
          <div>헤더 서비스 들어갈 자리</div>
        )}
      </header>
    </>
  );
};
