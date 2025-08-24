import { cn } from "../../utils";
import useRecipientsCount from "./hooks/useGetRecipientsCount";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NotFoundFooter = () => {
  const count = useRecipientsCount();

  if (count === null) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-3 justify-center",
        "rounded-2xl px-5 py-3 w-[min(80vw,720px)]",
        "bg-purple-500 mx-auto"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center",
          "w-10 h-10 rounded-full bg-purple-600",
          "text-20 text-white font-bold"
        )}
      >
        {count}
      </span>
      <span className="text-white text-20 font-bold">
        명이 메세지를 기다리고 있어요
      </span>
    </div>
  );
};

export default NotFoundFooter;
