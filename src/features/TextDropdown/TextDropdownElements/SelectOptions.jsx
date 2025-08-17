import { cn } from "../../../utils";

const SelectOptions = ({ isOpen, options, onSelect, style }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-[60px] left-0 right-0 z-40 shadow-[0_2px_12px_rgb(0_0_0_/_8%)]",
        style.boxSelect
      )}
    >
      {options.map((option, index) => (
        <div
          key={option.value || index}
          className={cn(
            "py-3 px-4 hover:bg-gray-100 text-gray-900",
            style.fontSelect
          )}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SelectOptions;
