import CardHeader from "./CardElements/CardHeader";

// Card Component
const Card = ({ img, user, content, date, onDelete }) => {
  const ErrMsg = "에러가 발생했습니다."; // 임시 에러 메시지

  return (
    <div className="w-[384px] h-[280px] rounded-[16px] p-6 flex flex-col  bg-white shadow-lg overflow-hidden">
      {/* User Meta */}
      <CardHeader img={img} user={user} onDelete={onDelete} />

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Content */}
      <p className="h-[106px] overflow-y-auto my-4">{content || ErrMsg}</p>

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {date || ErrMsg}
      </span>
    </div>
  );
};

export default Card;
