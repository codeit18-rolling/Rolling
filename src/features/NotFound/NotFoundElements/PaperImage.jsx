import { cn } from "../../../utils";

import PaperPNG from "../../../assets/img/NotFound/img_not_found_paper.png";
import PaperWEBP from "../../../assets/img/NotFound/img_not_found_paper.webp";
import PaperAVIF from "../../../assets/img/NotFound/img_not_found_paper.avif";

const PaperImage = () => {
  return (
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
  );
};

export default PaperImage;
