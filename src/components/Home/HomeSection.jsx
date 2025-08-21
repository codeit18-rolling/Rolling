import { HomeImgSection } from "./HomeElements/HomeImgSection";
import { HomeSectionWrapper } from "./HomeElements/HomeSectionWrapper";
import { HomeTitleSection } from "./HomeElements/HomeTitleSection";

const HomeSection = ({
  point = "",
  title = "",
  subtitle = "",
  img = "",
  imgAlt = "",
  desktopLayout = "default",
}) => {
  const isReversed = desktopLayout === "reverse";

  return (
    <HomeSectionWrapper isReversed={isReversed}>
      <HomeTitleSection
        point={point}
        title={title}
        subtitle={subtitle}
        isReversed={isReversed}
      />
      <HomeImgSection img={img} imgAlt={imgAlt} />
    </HomeSectionWrapper>
  );
};
export default HomeSection;
