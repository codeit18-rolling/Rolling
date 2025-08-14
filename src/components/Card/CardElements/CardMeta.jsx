import defaultImage from "../../../assets/empty/img_null.png";

const CardMeta = ({ img, user }) => {
  return (
    <div className="flex items-center justify-start gap-[14px] cursor-pointer">
      {/* User Image */}
      <img
        src={img || defaultImage}
        width={56}
        height={56}
        alt="유저 이미지"
        className="w-[56px] h-[56px] rounded-full"
        loading="eager"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />

      {/* User Info */}
      <div className="flex flex-col items-start gap-[6px] text-20 leading-6">
        <p className="font-normal text-black">
          From. <span className="font-bold ">{user || "코드잇"}</span>
        </p>

        {/* Badge Component */}
        <div className="rounded-[4px] px-2 bg-purple-100 font-normal text-[14px] leading-5 tracking-[-0.05em] text-purple-600">
          동료
        </div>
      </div>
    </div>
  );
};

export default CardMeta;
