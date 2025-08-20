import { TextDropdown } from "../../../features/TextDropdown/TextDropdown";

const RELATIONS = [
  { label: "친구", value: "친구" },
  { label: "지인", value: "지인" },
  { label: "동료", value: "동료" },
  { label: "가족", value: "가족" },
];

const MessageSelect = ({ style, value, onChange }) => {
  return (
    <div>
      <h2 className={style.font}>상대와의 관계</h2>
      <TextDropdown options={RELATIONS} value={value} onChange={onChange} />
    </div>
  );
};

export default MessageSelect;
