import { cn } from "../../../utils";

export const ProfileOptions = ({
  text,
  imageUrlLists,
  onClick,
  selectedProfile,
}) => {
  return (
    <>
      <p className="text-gray-500 mb-1">{text}</p>
      <div className="flex gap-[5px]">
        {imageUrlLists.map((url) => {
          const isSelected = selectedProfile === url;

          return (
            <button
              key={url}
              onClick={() => onClick(url)}
              className={cn(
                "rounded-full w-[60px] h-[60px] bg-gray-300 bg-cover bg-center ring-1 ring-gray-200",
                isSelected && "ring-2 ring-blue-500"
              )}
              style={{ backgroundImage: `url("${url}")` }}
            />
          );
        })}
      </div>
    </>
  );
};
