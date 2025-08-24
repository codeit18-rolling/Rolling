import Container from "../components/Container/Container";
import { cn } from "../utils";
import Button from "../components/Button/Button";
import { HOME_DATA } from "../constants/HomeData";
import HomeSection from "../components/Home/HomeSection";
import { Link } from "react-router";
import MetaTag from "../components/MetaTag/MetaTag";
/**
 * 메인 페이지 컴포넌트
 * @author <hwitae>
 */
function Home() {
  return (
    <>
      <MetaTag title="Rolling | 누구나 손쉽게, 온라인 롤링 페이퍼를 로그인 없이 자유롭게 만들어 보세요"/>
      <Container className="pb-0 tablet:pb-0">
        {HOME_DATA.map((section) => {
          return (
            <HomeSection
              key={section.point}
              point={section.point}
              title={section.title}
              subtitle={section.subtitle}
              img={section.img}
              imgAlt={section.imgAlt}
              desktopLayout={section.desktopLayout}
            />
          );
        })}
        <div className="mt-[37px] py-6 desktop:flex desktop:justify-center">
          <Link to="/list">
            <Button
              btnSize="none"
              className={cn(
                "w-full px-6 py-[14px] rounded-xl",
                "text-18 leading-7 -tracking-[-0.01em] font-semibold",
                "desktop:w-[280px]"
              )}
            >
              구경해보기
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Home;
