import CustomSelect from "./TextDropdownElements/SelectReact";
/**
 * From 메세지 작성 페이지에 쓰이는 Select component
 *
 * @author <sejin5>
 * @component
 *
 */
const RELATIONS = [
  { label: "친구", value: "친구" },
  { label: "지인", value: "지인" },
  { label: "동료", value: "동료" },
  { label: "가족", value: "가족" },
];

export const TextDropdown = () => {
  const handleChange = (selectedOption) => {
    //추후 api 연동을 위해 만들었고, 우선 console.log로 function 내용을 채워넣었습니다.
    console.log("선택된 옵션:", selectedOption);
  };

  return (
    <div className="w-[320px]">
      <CustomSelect
        options={RELATIONS}
        defaultValue="지인"
        onChange={handleChange}
      />
    </div>
  );
};
