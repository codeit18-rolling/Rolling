import { cn } from "../../../utils";

const ButtonGroup = ({ children }) => {
  return (
    <div
      className={cn(
        "fixed bottom-6 left-5 right-5 z-50 flex gap-4 justify-end",
        "desktop:static desktop:inset-auto desktop:mx-0 desktop:self-end"
      )}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
