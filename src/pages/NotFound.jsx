import BackGround from "../assets/img/img_not_found_background.png";
import Paper from "../assets/img/img_not_found_paper.png";
import { cn } from "../utils";
import Img404 from "../assets/img/img_not_found_404.png";
import NotFoundButtons from "../components/NotFound/NotFoundButtons";
import NotFoundFooter from "../components/NotFound/NotFoundFooter";

function NotFound() {
  return (
    <div className={cn("relative min-h-screen flex-col flex")}>
      <img
        src={BackGround}
        alt="배경 이미지"
        className={cn("absolute -z-20 w-full h-full object-cover")}
      />

      <div className="flex-1 flex items-center justify-center">
        <img
          src={Paper}
          alt="종이 이미지"
          className={cn(
            "-z-10",
            " min-w-[440px]",
            "tablet:w-[98vw] max-w-[750px]",
            "desktop:w-[98vw] max-w-[750px]"
          )}
        />

        <div className={cn("absolute items-center justify-center text-center")}>
          <img
            src={Img404}
            alt="404 이미지"
            className={cn(
              "mx-auto block",
              "w-[clamp(300px,40vw,500px)]",
              "tablet:w-[500px]",
              "desktop:w-[500px]"
            )}
          />
          <div
            className={cn(
              "text-[clamp(20px,5vw,30px)] -mt-6 font-bold text-purple-400 py-2",
              "tablet:text-[30px] tablet:-mt-20 tablet:py-6",
              "desktop:text-[30px] desktop:-mt-20 desktop:py-6"
            )}
          >
            페이지를 찾을 수 없어요
          </div>
          <NotFoundButtons />
        </div>
      </div>
      <div className="mt-auto mb-48">
        <NotFoundFooter />
      </div>
    </div>
  );
}

export default NotFound;
