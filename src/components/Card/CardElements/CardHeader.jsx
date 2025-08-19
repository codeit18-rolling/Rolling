import CardMeta from "./CardMeta";
import CardDelete from "./CardDelete";

// Card Header Component
const CardHeader = ({ data, isDeleteMode = false, id }) => {
  return (
    <div className="w-full h-[56px] flex justify-between">
      {/* Card Meta */}
      <CardMeta data={data} />

      {/* Card Delete Button */}
      {isDeleteMode && <CardDelete cardId={data?.id} id={id} />}
    </div>
  );
};

export default CardHeader;
