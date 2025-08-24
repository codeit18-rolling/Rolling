import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useRecipientsCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchTotalRecipients = async () => {
      try {
        const res = await fetch(`${BASE_URL}/18-4/recipients/`);
        if (!res.ok) throw new Error("Failed to fetch recipients count");
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalRecipients();
  }, []);

  return count;
};

export default useRecipientsCount;
