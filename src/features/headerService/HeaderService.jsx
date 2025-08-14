import { memo } from "react";
import { cn } from "../../utils";
import { MESSAGES_DATA } from "../../MockData";
import Writers from "../../components/Writers/Writers";

const HeaderService = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[68px] bg-white">
        <div className={cn("flex desktop:w-[1200px] h-[42px]")}>
          <Writers messages={MESSAGES_DATA} />
          <div className="flex items-center h-[28px] px-7 border-r"></div>
        </div>
      </div>
    </>
  );
};

export default memo(HeaderService);
