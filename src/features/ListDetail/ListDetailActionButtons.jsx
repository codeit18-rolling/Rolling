import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";

// TODO(지권): 퍼블리싱 수정 필요

const style = {
  container: "group relative",
  tooltip:
    "absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden group-hover:hidden whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded desktop:group-hover:block",
  button:
    "w-12 h-12 flex items-center justify-center rounded-full bg-white p-[10px] cursor-pointer border border-black",
};

const ListDetailActionButtons = ({
  isDeleteMode,
  navigateToEdit,
  navigateToBack,
}) => {
  return (
    <div className="flex flex-col gap-4 absolute bottom-8 right-8 z-10">
      {!isDeleteMode && (
        <div className={style.container}>
          <span className={style.tooltip}>리스트 페이지로 돌아가기</span>
          <Link
            to="/list"
            aria-label="리스트로 돌아가기"
            className={style.button}
          >
            <Icon iconName={"back"} className="bg-black" />
          </Link>
        </div>
      )}
      <div className={style.container}>
        <span className={style.tooltip}>
          {!isDeleteMode ? "수정하기" : "돌아가기"}
        </span>
        <button
          onClick={!isDeleteMode ? navigateToEdit : navigateToBack}
          aria-label={!isDeleteMode ? "수정하기" : "돌아가기"}
          className={style.button}
        >
          <Icon
            iconName={!isDeleteMode ? "icListEdit" : "back"}
            className="bg-black"
          />
        </button>
      </div>
    </div>
  );
};

export default ListDetailActionButtons;
