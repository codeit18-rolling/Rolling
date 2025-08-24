import { cn } from "../../../utils";

import Img404PNG from "../../../assets/img/NotFound/img_not_found_404.png";
import Img404WEBP from "../../../assets/img/NotFound/img_not_found_404.webp";
import Img404AVIF from "../../../assets/img/NotFound/img_not_found_404.avif";

const Image404 = () => {
  return (
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
  );
};

export default Image404;
