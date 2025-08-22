import { useEffect, useState } from "react";
import { cn } from "../../utils";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const NotFoundFooter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchTotalRecipients = async () => {
      try {
        const res = await fetch(`${BASE_URL}/18-4/recipients/`);
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalRecipients();
  }, []);

  if (count === null) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-3 justify-center",
        "rounded-2xl px-5 py-3 w-[min(80vw,720px)]",
        "bg-purple-500 text-white mx-auto"
      )}
    >
      <span
        className="
            inline-flex items-center justify-center
            w-10 h-10 rounded-full bg-purple-400
            text-20 font-bold
          "
      >
        {count}
      </span>
      <span className="text-20 font-bold">명이 메세지를 기다리고 있어요</span>
    </div>
  );
};

export default NotFoundFooter;
