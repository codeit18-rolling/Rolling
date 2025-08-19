import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import { cn } from "../../utils";
import CardGridLoading from "./CardGridLoading";

const CardGrid = ({ id, data, isLoading, isDeleteMode = false }) => {
  return (
    <>
      {isLoading && <CardGridLoading />}
      <div
        className={cn(
          "grid gap-[16px] grid-cols-1 w-full justify-center order-2",
          "desktop:grid-cols-3 desktop:grid-row-2 desktop:gap-[24px] desktop:order-2",
          "tablet:grid-cols-2 tablet:grid-row-2"
        )}
      >
        {!isDeleteMode && <AddCard id={id} />}
        {data?.recentMessages?.map((data, index) => (
          <Card key={index} isDeleteMode={isDeleteMode} data={data} />
        ))}
      </div>
    </>
  );
};

export default CardGrid;
