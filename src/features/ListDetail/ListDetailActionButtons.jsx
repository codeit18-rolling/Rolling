import { Link } from "react-router";
import Icon from "../../components/Icon/Icon";

const ListDetailActionButtons = ({
  isDeleteMode,
  navigateToEdit,
  navigateToBack,
}) => {
  return (
    <div className="flex flex-col gap-4 absolute bottom-8 right-8">
      {!isDeleteMode && (
        <div className="group relative">
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded">
            리스트 페이지로 돌아가기
          </span>
          <Link
            to="/list"
            aria-label="리스트로 돌아가기"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white p-[10px]"
          >
            <Icon iconName={"back"} className="bg-black" />
          </Link>
        </div>
      )}
      <div className="group relative">
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded">
          {!isDeleteMode ? "수정하기" : "돌아가기"}
        </span>
        <div
          onClick={!isDeleteMode ? navigateToEdit : navigateToBack}
          aria-label={!isDeleteMode ? "수정하기" : "돌아가기"}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white p-[10px] cursor-pointer"
        >
          <Icon
            iconName={!isDeleteMode ? "icListEdit" : "back"}
            className="bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ListDetailActionButtons;
