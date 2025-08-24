import { useState } from "react";
import { cn } from "../../../utils";

import BackgroundPNG from "../../../assets/img/NotFound/img_not_found_background.png";
import BackgroundWEBP from "../../../assets/img/NotFound/img_not_found_background.webp";
import BackgroundAVIF from "../../../assets/img/NotFound/img_not_found_background.avif";
import BackgroundLQIP from "../../../assets/img/NotFound/img_not_found_background_lqip.webp";

const BackgroundImage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <>
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
    </>
  );
};

export default BackgroundImage;
