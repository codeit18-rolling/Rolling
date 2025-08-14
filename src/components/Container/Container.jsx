import { cn } from "../../utils";

const Container = ({
  children,
  className = "",
  isInnerBox = false,
  innerBoxClassName = "",
}) => {
  return (
    <main
      className={cn(
        "w-full mx-auto max-w-[1248px] px-[20px] py-[40px]",
        "tablet:px-[24px] tablet:py-[50px]",
        "desktop:py-[60px]",
        className
      )}
    >
      {isInnerBox ? (
        <div className={cn("mx-auto max-w-[720px]", innerBoxClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </main>
  );
};
export default Container;
