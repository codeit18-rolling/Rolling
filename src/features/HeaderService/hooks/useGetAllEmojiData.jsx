import { useQuery } from "@tanstack/react-query";
import { getAllEmojiData } from "../../../service/Emoji/getAllEmojiData";

export const useGetAllEmojiData = (postId) => {
  return useQuery({
    queryKey: ["allEmojiData", postId],
    queryFn: () => getAllEmojiData(postId),
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: !!postId,
  });
};
