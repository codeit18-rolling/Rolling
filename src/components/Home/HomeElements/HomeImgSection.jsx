import { cn } from "../../../utils";

export const HomeImgSection = ({ img, imgAlt }) => {
  return (
    <div
      className={cn(
        "flex mt-[50px] justify-center overflow-hidden",
        "tablet:mt-[36px]",
        "desktop:overflow-visible desktop:mt-0 desktop:py-[60px]"
      )}
    >
      <img
        src={img}
        alt={imgAlt}
        className={cn(
          "max-w-none w-[400px] object-cover",
          "tablet:w-[720px]",
          "desktop:h-[204px]"
        )}
      />
    </div>
  );
};
