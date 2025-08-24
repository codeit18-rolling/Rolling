import { cn } from "../../../utils";
import BG_COLOR from "../../../constants/backgroundColor";
import BG_PATTERN from "../../../constants/backgroundPattern";
import { useNavigate } from "react-router";
import Writers from "../../../components/Writers/Writers";
import BadgeEmoji from "../../../components/Badge/BadgeEmoji";
import { useEffect, useState } from "react";
import defaultBgImage from "../../../assets/empty/img_background_null.png";
import Dimmed from "../../../components/Dimmed/Dimmed";

const CardList = ({ item }) => {
  const navigate = useNavigate();
  const [bgURL, setBgURL] = useState(null);

  useEffect(() => {
    if (item.backgroundImageURL) {
      const img = new Image();
      img.src = item.backgroundImageURL;
      img.onload = () => setBgURL(item.backgroundImageURL);
      img.onerror = () => setBgURL(defaultBgImage); // 로드 실패 시 대체 이미지로 변경
    }
  }, [item.backgroundImageURL]);
  return (
    <button
      type="button"
      onClick={() => navigate(`/post/${item.id}`)}
      className={cn(
        "w-[208px] h-[232px] shrink-0 pt-[30px] pb-[20px] pl-[24px] pr-[22px] rounded-[16px] overflow-hidden border border-black/10 flex relative justify-start items-start flex-col bg-cover bg-center shadow-black-opacity",
        "mobile:w-[275px] mobile:h-[260px] mobile:pr-[24px] select-none",
        !item.backgroundImageURL && BG_COLOR[item.backgroundColor]
      )}
      style={
        item.backgroundImageURL && {
          backgroundImage: `url(${bgURL})`,
        }
      }
    >
      {item.backgroundImageURL && <Dimmed />}
      {/*배경 이미지 있을시 검은색 필터 적용 */}

      {/*container*/}
      <div className="z-10 flex flex-1 flex-col justify-start items-start gap-3">
        {/*to. ~ , 몇명이 작성 등등이 들어갈 곳 */}
        <div className="text-24 flex justify-start text-left">
          {/*받는사람 */}
          <span
            className={cn(
              "font-bold text-2xl pb-3 max-h-[4rem] line-clamp-2",
              item.backgroundImageURL ? "text-white" : "text-gray-900"
            )}
          >
            To. {item.name}
          </span>
        </div>
        <div className="flex justify-start">
          {/* 작성자 이미지, ~~명이 작성 하셨습니다.*/}
          <Writers
            item={item}
            useCard={true}
            isBackgroundImage={item.backgroundImageURL}
          />
        </div>
      </div>

      <div className="gap-2 w-[162px] flex-wrap overflow-y-hidden h-[49px] mobile:w-[227px] mobile:h-[56px] z-10 pt-[17px] flex flex-row border-t border-black-opacity-1">
        {/* emoji 들어가는 곳*/}
        {item.topReactions.map((reaction) => (
          <BadgeEmoji
            key={reaction.id}
            reactions={reaction}
            style={
              "tablet:w-fit tablet:h-[36px] mobile:w-[55px] mobile:h-[28px]"
            }
          />
        ))}
      </div>
      {!item.backgroundImageURL && BG_PATTERN[item.backgroundColor] && (
        <img
          src={BG_PATTERN[item.backgroundColor]}
          alt={`${item.backgroundColor} 색`}
          className="absolute w-[107px] h-[114px] mobile:w-[142px] mobile:h-[142px] right-0 bottom-0"
        />
      )}
    </button>
  );
};

export default CardList;
