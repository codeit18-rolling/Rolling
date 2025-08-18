import imgFirst from "../assets/img/img_main_01_2x.png";
import imgSecond from "../assets/img/img_main_02_2x.png";

export const HOME_DATA = [
  {
    point: "01",
    title: (
      <>
        누구나 손쉽게, 온라인 <br className="hidden desktop:block" />
        롤링 페이퍼를 만들 수 있어요
      </>
    ),
    subtitle: "로그인 없이 자유롭게 만들어요.",
    img: imgFirst,
    imgAlt: "메인이미지1",
    desktopLayout: "default",
  },
  {
    point: "02",
    title: (
      <>
        서로에게 이모지로 감정을 <br className="tablet:hidden" />
        표현해보세요
      </>
    ),
    subtitle: "롤링 페이퍼에 이모지를 추가할 수 있어요.",
    img: imgSecond,
    imgAlt: "메인이미지2",
    desktopLayout: "reverse",
  },
];
