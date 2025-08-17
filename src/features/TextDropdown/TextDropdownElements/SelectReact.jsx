import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../utils";
import Icon from "../../../components/Icon/Icon";

const style = {
  boxSelect: "bg-white rounded-lg cursor-pointer border border-gray-300",
  fontSelect:
    "font-['Pretendard'] font-normal text-base leading-[26px] tracking-[-0.01em]",
};

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectRef = useRef(null);

  // defaultValue 설정
  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option.value === defaultValue
      );
      if (defaultOption) {
        setSelectedValue(defaultOption.label);
      }
    }
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
