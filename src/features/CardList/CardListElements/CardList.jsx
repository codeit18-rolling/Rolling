import { cn } from "../../../utils";
import BG_COLOR from "../../../constants/backgroundColor";
import BG_PATTERN from "../../../constants/backgroundPattern";
import { useNavigate } from "react-router";
import WritersMock from "./WritersMock";

const CardList = ({ item }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/post/${item.id}`)}
      className={cn(
        "w-[275px] h-[260px] pt-[30px] pb-[20px] px-[24px] rounded-[16px] overflow-hidden border border-black/10 flex relative justify-start items-start flex-col bg-cover bg-center shadow-[0_2px_12px_rgba(0,0,0,0.08)]",
        !item.backgroundImageURL && BG_COLOR[item.backgroundColor]
      )}
      style={
        item.backgroundImageURL && {
          backgroundImage: `url(${item.backgroundImageURL})`,
        }
      }
    >
      {item.backgroundImageURL && (
        <div
          className={cn(
            "absolute inset-0 bg-black opacity-50 bg-cover bg-center"
          )}
        />
      )}
      {/*배경 이미지 있을시 검은색 필터 적용 */}

      {/*container*/}
      <div className="z-10 flex justify-start items-start">
        <div className="gap-3">
          {/*to. ~ , 몇명이 작성 등등이 들어갈 곳 */}
          <div className="text-24 flex justify-start text-left">
            {/*받는사람 */}
            <span
              className={cn(
                "font-bold text-2xl",
                item.backgroundImageURL ? "text-white" : "text-gray-900"
              )}
            >
              To. {item.name}
            </span>
          </div>
          <div className="flex justify-start">
            {/*프로필 이미지들 현재 참조하는 페이지를 몰라 제작 난항 겪는중..../ 컴포넌트 대체 예정*/}
            <WritersMock
              item={item}
              useCard={true}
              isBackgroundImage={item.backgroundImageURL}
            />
          </div>
        </div>
      </div>

      <div className="bottom-5 gap-2 w-[227px] h-[53px] z-10 pt-[17px] absolute flex flex-row border-t border-black/[0.12]">
        {/* emoji 들어갈 곳 (컴포넌트로 대체할 예정?)*/}
        {item.topReactions.map((reaction) => (
          <div
            key={reaction.id}
            className="flex justify-center items-center px-3 py-2 h-[36px] rounded-[32px] bg-black/[0.54] space-x-[2px]"
          >
            <span className="">{reaction.emoji}</span>
            <span className="text-white">{reaction.count}</span>
          </div>
        ))}
      </div>
      {!item.backgroundImageURL && BG_PATTERN[item.backgroundColor] && (
        <img
          src={BG_PATTERN[item.backgroundColor]}
          alt={`${item.backgroundColor} 색`}
          className="absolute w-36 h-36 right-0 bottom-0"
        />
      )}
    </button>
  );
};

export default CardList;
