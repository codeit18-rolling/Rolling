import SkeletonUI from "../../components/Skeleton/SkeletonUI";
import { cn } from "../../utils";

const CardGridLoading = () => {
  return (
    <SkeletonUI
      count={6}
      className={cn(
        "grid gap-[16px] grid-cols-1 w-full ",
        "desktop:grid-cols-3 desktop:grid-row-2 desktop:gap-[24px]",
        "tablet:grid-cols-2 tablet:grid-row-2"
      )}
      boxClassName={cn(
        "min-w-[320px] h-[230px]",
        "desktop:min-w-[384px] desktop:h-[280px]",
        "tablet:min-w-[352px] tablet:h-[284px]"
      )}
    />
  );
};

export default CardGridLoading;
