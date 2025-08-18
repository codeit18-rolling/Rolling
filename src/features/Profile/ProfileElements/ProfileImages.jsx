import { cn } from "../../../utils";

export const ImageList = ({ text, imageUrlLists }) => {
  return (
    <>
      <p className="text-gray-500 mb-1">{text}</p>
      <div className="flex gap-[5px]">
        {imageUrlLists.map((url) => {
          const bgUrl = `bg-[url("` + url + `")]`;
          return (
            <button
              key={url}
              className={cn("rounded-full w-[60px] h-[60px] bg-gray-300")}
            ></button>
          );
        })}
      </div>
    </>
  );
};
