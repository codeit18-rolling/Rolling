import { useLocation } from "react-router";
import icRolling from "../../assets/ic-rolling-paperplain.svg";

/**
 * 공통 헤더
 * @author <hwitae>
 */
export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <header>
        <div className="w-[1200px] h-[64px] flex items-center justify-between m-auto">
          <div className="flex gap-x-2">
            <img
              className="w-[27px] h-[27px]"
              src={icRolling}
              alt="로고이미지"
            />
            <p className="font-[poppins] text-20 font-semibold text-logos">
              Rolling
            </p>
          </div>
          {pathname === "/" || pathname === "/list" ? (
            <button>롤링 페이퍼 만들기</button>
          ) : null}
        </div>
      </header>
    </>
  );
};
