import { useLocation } from "react-router";
import icRolling from "../../assets/icon/ic-rolling-paperplain.svg";
import { cn } from "../../utils";

/**
 * 헤더 컴포넌트
 * @author <hwitae>
 */
export const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header className={cn("hidden", "tablet:flex", "desktop:flex")}>
        <div className={cn("border-b border-gray-headerBorder")}>
          <div
            className={cn(
              "w-[360px]",
              "h-[64px]",
              "flex",
              "items-center",
              "justify-between",
              "m-auto",
              "tablet:w-[768px]",
              "desktop:w-[1248px]",
              "px-6"
            )}
          >
            <div className={cn("flex", "gap-x-2")}>
              <img
                className={cn("w-[27px]", "h-[27px]")}
                src={icRolling}
                alt="로고이미지"
              />
              <p
                className={cn(
                  "font-[poppins]",
                  "text-20",
                  "font-semibold",
                  "text-gray-headerLogo"
                )}
              >
                Rolling
              </p>
            </div>
            <div className={cn("text-center")}>
              {pathname === "/" || pathname === "/list" ? (
                <button
                  className={cn(
                    "border-solid",
                    "border-black",
                    "border",
                    "w-[157px]"
                  )}
                >
                  버튼 들어갈 자리
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
