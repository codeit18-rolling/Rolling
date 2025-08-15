import { Link } from "react-router";
import plusIcon from "../../assets/icon/ic_plus.svg";

// Plus Button Component
const AddCard = ({ id }) => {
  return (
    <Link
      to={`/post/${id}/message`}
      className="w-[384px] h-[280px] rounded-[16px] p-6 flex flex-col  bg-white shadow-lg overflow-hidden"
      aria-label="Card"
    >
      <button
        className="w-[56px] h-[56px] bg-gray-500 rounded-full p-4 mx-auto my-auto"
        aria-label="추가하기 버튼"
      >
        <img src={plusIcon} alt="추가하기 아이콘" />
      </button>
    </Link>
  );
};

export default AddCard;
