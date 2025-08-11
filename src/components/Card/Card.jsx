import PropTypes from "prop-types";

const Card = ({ data }) => {
  const { img, user, content, date } = data;

  Card.propTypes = {
    data: PropTypes.shape({
      img: PropTypes.string,
      user: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
    }),
  };

  return (
    <div
      className="w-[384px] h-[280px] rounded-[16px] p-6 flex flex-col  bg-white shadow-lg overflow-hidden"
      aria-label="Card"
    >
      {/* User Meta */}
      <div className="w-full h-[100px] flex items-center justify-start gap-[14px]">
        {/* User Image */}
        <img
          src={img || ""}
          alt="유저 이미지"
          className="w-[56px] h-[56px] rounded-full"
        />

        {/* User Info */}
        <div className="flex flex-col items-start text-20 leading-6">
          <p className="font-normal text-black">
            From. <span className="font-bold ">{user || "익명"}</span>
          </p>
          <div>
            {/* 뱃지 컴포넌트 위치 */}
            동료
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Content */}
      <p className="min-h-[106px] my-4">{content || ""}</p>

      {/* Date */}
      <span className="font-normal text-12 leading-[18px] tracking-[-0.05em] text-gray-400">
        {date || ""}
      </span>
    </div>
  );
};

export default Card;
