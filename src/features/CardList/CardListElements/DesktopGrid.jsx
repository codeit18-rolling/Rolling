import ArrowButton from "./ArrowButton";
import CardList from "./CardList";

const DesktopGrid = ({ items, isNext, isLast, clickNext, clickLast }) => {
  return (
    <div className="w-[1200px] h-[260px] p-0 hidden tablet:flex ">
      {isLast && <ArrowButton direction="left" onClick={clickLast} />}
      <div className="grid grid-cols-4 grid-rows-1 gap-5 mx-5">
        {items.map((item) => (
          <CardList key={item.id} item={item} />
        ))}
      </div>
      {isNext && <ArrowButton direction="right" onClick={clickNext} />}
    </div>
  );
};

export default DesktopGrid;
