import { useCallback } from "react";

const useSelectHandler = (setSelectedValue, setIsOpen, onChange) => {
  const handleSelect = useCallback(
    (option) => {
      setSelectedValue(option.label);
      setIsOpen(false);
      if (onChange) {
        onChange(option);
      }
    },
    [setSelectedValue, setIsOpen, onChange]
  );

  return handleSelect;
};

export default useSelectHandler;
