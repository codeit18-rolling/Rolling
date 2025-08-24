import { cn } from "../utils";
import { useState } from "react";
import NotFoundButtons from "../components/NotFound/NotFoundButtons";
import NotFoundFooter from "../components/NotFound/NotFoundFooter";

import BackgroundPNG from "../assets/img/NotFound/img_not_found_background.png";
import BackgroundWEBP from "../assets/img/NotFound/img_not_found_background.webp";
import BackgroundAVIF from "../assets/img/NotFound/img_not_found_background.avif";
import BackgroundLQIP from "../assets/img/NotFound/img_not_found_background_lqip.webp";

import PaperPNG from "../assets/img/NotFound/img_not_found_paper.png";
import PaperWEBP from "../assets/img/NotFound/img_not_found_paper.webp";
import PaperAVIF from "../assets/img/NotFound/img_not_found_paper.avif";

import Img404PNG from "../assets/img/NotFound/img_not_found_404.png";
import Img404WEBP from "../assets/img/NotFound/img_not_found_404.webp";
import Img404AVIF from "../assets/img/NotFound/img_not_found_404.avif";

function NotFound() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className={cn("relative min-h-screen flex-col flex")}>
      <img
        src={BackgroundLQIP}
        alt=""
        aria-hidden
        className={cn(
          "absolute -z-10 w-full h-full object-cover",
          "blur-xl scale-[1.02]",
          "transition-opacity duration-500",
          bgLoaded ? "opacity-0" : "opacity-100"
        )}
        decoding="async"
      />
      <main id="main-content">
        <picture>
          <source srcSet={BackgroundAVIF} type="image/avif" />
          <source srcSet={BackgroundWEBP} type="image/webp" />
          <img
            src={BackgroundPNG}
            alt="배경 이미지"
            decoding="async"
            fetchpriority="low"
            onLoad={() => setBgLoaded(true)}
            className={cn("absolute -z-20 w-full h-full object-cover")}
          />
        </picture>

        <div className="flex-1 flex items-center justify-center">
          <picture>
            <source srcSet={PaperAVIF} type="image/avif" />
            <source srcSet={PaperWEBP} type="image/webp" />
            <img
              src={PaperPNG}
              alt="종이 이미지"
              width={750}
              height={1125}
              decoding="async"
              fetchpriority="low"
              className={cn(
                "-z-10",
                "min-w-[440px]",
                "tablet:w-[98vw] max-w-[750px]",
                "desktop:w-[98vw] max-w-[750px]"
              )}
            />
          </picture>

          <div
            className={cn("absolute items-center justify-center text-center")}
          >
            <picture>
              <source srcSet={Img404AVIF} type="image/avif" />
              <source srcSet={Img404WEBP} type="image/webp" />
              <img
                src={Img404PNG}
                alt="404 이미지"
                width={500}
                height={333}
                decoding="async"
                fetchpriority="high"
                loading="eager"
                className={cn(
                  "mx-auto block",
                  "w-[clamp(300px,40vw,500px)]",
                  "tablet:w-[500px]",
                  "desktop:w-[500px]"
                )}
              />
            </picture>
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
      </main>
      <footer className="mt-auto mb-48">
        <NotFoundFooter />
      </footer>
    </div>
  );
}

export default NotFound;
