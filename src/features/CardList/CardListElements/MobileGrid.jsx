import CardList from "./CardList";

const MobileGrid = ({ items }) => {
  return (
    <div className="flex flex-row gap-3 overflow-x-auto scrollbar-hide tablet:hidden mobile:gap-5 pl-5 mobile:pl-6 ">
      {/*모바일/태블릿용 CardList*/}
      {items.map((item) => (
        <CardList key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MobileGrid;
