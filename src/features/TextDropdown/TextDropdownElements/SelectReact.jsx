import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../utils";
import Icon from "../../../components/Icon/Icon";
import useDefaultValue from "../hooks/useDefaultValue";
import useClickOutside from "../hooks/useClickOutside";

const style = {
  boxSelect: "bg-white rounded-lg cursor-pointer border border-gray-300",
  fontSelect:
    "font-['Pretendard'] font-normal text-base leading-[26px] tracking-[-0.01em]",
};

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    useDefaultValue(defaultValue, options)
  );
  const selectRef = useRef(null);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleSelect = (option) => {
    setSelectedValue(option.label);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      <div
        className={cn(
          "h-[50px] py-3 px-4 flex justify-between items-center text-gray-500",
          style.boxSelect,
          style.fontSelect,
          isOpen && "border-[2px] border-gray-500 text-gray-900"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedValue}</span>
        <div
          className={cn(
            "flex items-center justify-center transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        >
          <Icon
            iconName="arrow_down"
            iconSize="ic-24"
            className="bg-gray-900"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className={cn(
            "absolute top-[60px] left-0 right-0 z-40 shadow-[0_2px_12px_rgb(0_0_0_/_8%)]",
            style.boxSelect
          )}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                "py-3 px-4 hover:bg-gray-100 text-gray-900",
                style.fontSelect
              )}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
