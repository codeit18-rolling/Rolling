import { cn } from "../../utils";

export const ToggleButtonWrapper = ({ children }) => {
  return (
    <div className={cn("w-[244px] flex flex-row bg-gray-100")}>{children}</div>
  );
};
const ToggleButton = ({ isActive = false, onClick, children, ...props }) => {
  const activeClass = isActive
    ? "bg-white shadow-purple-600-2 text-purple-700 font-bold hover:bg-purple-100 active:bg-purple-200"
    : "";
  return (
    <button
      type="button"
      className={cn(
        "btn flex-auto py-2 px-4 rounded-md bg-gray-100",
        "text-16 text-gray-900 font-normal",
        "hover:bg-gray-200 active:bg-gray-100",
        activeClass
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;

// Usage example
// <ToggleButton isActive={true} onClick={() => console.log('Clicked!')}>
//   Toggle Me
// </ToggleButton>
// <ToggleButton isActive={false} onClick={() => console.log('Clicked!')}>
//   Toggle Me
// </ToggleButton>
