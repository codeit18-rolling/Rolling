import BackGround from "../assets/img/img_not_found_background.png";
import Paper from "../assets/img/img_not_found_paper.png";
import { Link, useNavigate } from "react-router";
import { cn } from "../utils";
import Button from "../components/Button/Button";
import Img404 from "../assets/img/img_not_found_404.png";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="
        relative min-h-screen
        flex items-center justify-center
      "
    >
      <img
        src={BackGround}
        alt="배경 이미지"
        className={cn("absolute -z-20 w-full h-full object-cover")}
      />

      <img
        src={Paper}
        alt="종이 이미지"
        className={cn(
          "-z-10",
          " min-w-[440px]",
          "tablet:w-[98vw] max-w-[750px]",
          "desktop:w-[98vw] max-w-[750px]"
        )}
      />

      <div className={cn("absolute items-center justify-center text-center")}>
        <img
          src={Img404}
          alt="404 이미지"
          className={cn(
            "mx-auto block",
            "w-[clamp(300px,40vw,500px)]",
            "tablet:w-[500px]",
            "desktop:w-[500px]"
          )}
        />
        <div
          className={cn(
            "text-[clamp(20px,5vw,30px)] -mt-6 font-bold text-purple-400 py-2",
            "tablet:text-[30px] tablet:-mt-20 tablet:py-6",
            "desktop:text-[30px] desktop:-mt-20 desktop:py-6"
          )}
        >
          페이지를 찾을 수 없어요
        </div>

        <div
          className={cn(
            "text-[3vw] py-4 flex flex-col gap-4 justify-center items-center",
            "tablet:flex-row", //
            "tablet:text-[21px]",
            "desktop:text-[21px]"
          )}
        >
          <Link to="/" className="w-full tablet:w-auto">
            <Button
              btnStyle="primary"
              btnSize="btn-40"
              className="w-full tablet:w-auto"
            >
              홈으로 돌아가기
            </Button>
          </Link>

          <Button
            btnStyle="secondary"
            btnSize="btn-40"
            className="w-full tablet:w-auto"
            onClick={() => navigate(-1)}
          >
            뒤로가기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
