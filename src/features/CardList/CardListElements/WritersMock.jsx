import defaultImg from "../../../assets/empty/img_null.png";
import RemainWriter from "../../../components/Writers/RemainWriter";
import WriterPreview from "./WriterPreview";
import WriterCount from "./WriterCount";
import { cn } from "../../../utils";

const WritersMock = ({ item, useCard = false, isBackgroundImage = false }) => {
  const writerPreview = WriterPreview(item, useCard);
  const count = WriterCount(item, useCard);
  const handleError = (e) => {
    e.target.onError = null;
    e.target.src = defaultImg;
  };
  return (
    <div
      className={cn(
        "flex gap-3",
        useCard ? "flex-col items-start" : "items-center"
      )}
    >
      <div className="flex -space-x-3">
        {writerPreview.map((writer) => (
          <img
            key={writer.id}
            className="w-[28px] h-[28px] border-white rounded-full border-[1.5px]"
            src={writer.profileImageURL}
            alt="프로필 이미지"
            onError={handleError}
          />
        ))}
        {count > 3 && <RemainWriter count={count} useCard={useCard} />}
      </div>
      <p
        className={cn(
          "leading-[27px]",
          useCard ? "text-16" : "text-18 text-gray-900 ",
          isBackgroundImage ? "text-gray-200" : "text-gray-700"
        )}
      >
        <span className="font-bold">{count}</span>명이 작성했어요!
      </p>
    </div>
  );
};

export default WritersMock;
