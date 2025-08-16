import CardMeta from "./CardMeta";
import CardDelete from "./CardDelete";

// Card Header Component
const CardHeader = ({ data, isDeleteMode = false }) => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between">
      {/* Card Meta */}
      <CardMeta data={data} />

      {/* Card Delete Button */}
      {isDeleteMode && <CardDelete cardId={data.id} />}
    </div>
  );
};

export default CardHeader;
