import { useNavigate, Link } from "react-router";
import Button from "../Button/Button";
import { cn } from "../../utils";

const NotFoundButtons = () => {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "text-[3vw] py-4 flex flex-col gap-4 justify-center items-center",
        "tablet:flex-row",
        "tablet:text-[21px]",
        "desktop:text-[21px]",
        "max-w-[400px] mx-auto"
      )}
    >
      <Link to="/" className="w-full tablet:flex-auto">
        <Button btnStyle="primary" btnSize="btn-40" className="w-full">
          홈으로 돌아가기
        </Button>
      </Link>

      <Button
        btnStyle="secondary"
        btnSize="btn-40"
        className="w-full tablet:flex-auto"
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </Button>
    </div>
  );
};

export default NotFoundButtons;
