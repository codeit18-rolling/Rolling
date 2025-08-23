import CustomSelect from "./TextDropdownElements/SelectReact";
/**
 * From 메세지 작성 페이지에 쓰이는 Select component
 *
 * @author <sejin5>
 * @component
 *
 */
export const TextDropdown = ({ options, value, onChange }) => {
  return (
    <div className="w-[320px]">
      <CustomSelect
        options={options}
        value={value}
        defaultValue="지인"
        onChange={onChange}
      />
    </div>
  );
};
