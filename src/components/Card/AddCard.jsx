import plusIcon from "../../assets/icon/ic_plus.svg";

// Plus Button Component
const AddCard = () => {
  return (
    <div
      className="w-[384px] h-[280px] rounded-[16px] p-6 flex flex-col  bg-white shadow-lg overflow-hidden"
      aria-label="Card"
    >
      <img
        src={plusIcon}
        alt=""
        className="w-[56px] h-[56px] bg-gray-500 rounded-full p-4 mx-auto my-auto"
      />
    </div>
  );
};

export default AddCard;
