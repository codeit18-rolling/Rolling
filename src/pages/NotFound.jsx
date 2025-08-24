import { cn } from "../utils";
import { useState } from "react";
import NotFoundButtons from "../features/NotFound/NotFoundElements/NotFoundButtons";
import NotFoundFooter from "../features/NotFound/NotFoundElements/NotFoundFooter";
import BackgroundImage from "../features/NotFound/NotFoundElements/BackGroundImage";
import PaperImage from "../features/NotFound/NotFoundElements/PaperImage";
import Image404 from "../features/NotFound/NotFoundElements/404Image";

function NotFound() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className={cn("relative min-h-screen flex-col flex")}>
      <BackgroundImage />

      <div className="flex-1 flex items-center justify-center">
        <PaperImage />

        <div className={cn("absolute items-center justify-center text-center")}>
          <Image404 />

          <h1
            className={cn(
              "text-[clamp(20px,5vw,30px)] -mt-6 font-bold text-purple-400 py-2",
              "tablet:text-[30px] tablet:-mt-20 tablet:py-6",
              "desktop:text-[30px] desktop:-mt-20 desktop:py-6"
            )}
          >
            페이지를 찾을 수 없어요
          </h1>

          <NotFoundButtons />
        </div>
      </div>

      <footer className="mt-auto mb-48">
        <NotFoundFooter />
      </footer>
    </div>
  );
}

export default NotFound;
