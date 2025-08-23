import { Link, useLocation } from "react-router";
import icRolling from "../../assets/icon/ic-rolling-paperplain.svg";
import { cn } from "../../utils";
import Button from "../Button/Button";
import useMediaQuery from "../../features/HeaderService/hooks/useMediaQuery";
import DarkModeButton from "./HeaderElements/DarkModeButton";
import Icon from "../Icon/Icon";

/**
 * 헤더 컴포넌트
 * @author <hwitae>
 *
 * vercel 배포를 위한 crack
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
          <div className={cn("flex border-b border-gray-headerBorder")}>
            <div
              className={cn(
                "h-[64px] flex items-center justify-between m-auto px-6",
                "w-full mx-auto max-w-[1248px] px-6"
              )}
            >
              <Link to="/">
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
              </Link>
              <div className={cn("text-center flex gap-2")}>
                <DarkModeButton />
                {(pathname === "/" || pathname === "/list") && (
                  <Link to="/post">
                    <Button
                      btnStyle="secondary"
                      btnSize={isMobile ? "btn-icon-40" : "none"}
                      className={cn(
                        "h-[40px] py-4 rounded-md",
                        "font-semibold text-14 leading-5 -tracking-[0.005em]",
                        "tablet:text-16 tablet:leading-[26px] -tracking-[0.01em] tablet:px-4"
                      )}
                    >
                      {isMobile ? (
                        <Icon
                          iconName="addRollingPaper"
                          className="bg-purple-700"
                        />
                      ) : (
                        "롤링 페이퍼 만들기"
                      )}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
