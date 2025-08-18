const useDefaultValue = (defaultValue, options) => {
  if (defaultValue) {
    const defaultOption = options.find(
      (option) => option.value === defaultValue
    );
    return defaultOption ? defaultOption.label : "";
  }
  return "";
};

export default useDefaultValue;
