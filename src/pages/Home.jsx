import Container from "../components/Container/Container";
import imgMainMobile from "../assets/img/img_main_01_2x.png";
import { cn } from "../utils";

/**
 * 메인 페이지 컴포넌트
 * @author <hwitae>
 */
function Home() {
  return (
    <>
      <Container>
        <div
          className={cn(
            "w-[320px] h-[352px] rounded-[20px] bg-surface overflow-x-hidden"
          )}
        >
          <div className="pt-6 px-6">
            <div
              className={cn(
                "bg-purple-600 w-[80px] px-3 py-1 rounded-[50px]",
                " text-[14px] font-bold text-white leading-[20px] -tracking-[0.005em]"
              )}
            >
              Point. 01
            </div>
            <div className="mt-4">
              <p className="text-18 font-bold leading-[28px] -tracking-[0.01em]">
                누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
              </p>
              <p className="text-[15px] font-normal leading-[22px] -tracking-[-0.01em] text-gray-500">
                로그인 없이 자유롭게 만들어요
              </p>
            </div>
            <div className="flex mt-[50px] justify-center">
              <img
                src={imgMainMobile}
                alt="메인이미지1"
                className="max-w-none w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
