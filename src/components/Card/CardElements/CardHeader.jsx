import CardMeta from "./CardMeta";
import CardDelete from "./CardDelete";

// Card Header Component
const CardHeader = ({ img, user, onDelete }) => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between">
      {/* Card Meta */}
      <CardMeta img={img} user={user} />

      {/* Card Delete Button */}
      {onDelete && <CardDelete />}
    </div>
  );
};

export default CardHeader;
