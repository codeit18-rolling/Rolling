import { useQuery } from "@tanstack/react-query";
import { getAllEmojiData } from "../../../service/HeaderService/getAllEmojiData";

export const ALL_EMOJI_DATA_KEY = "allEmojiData";

/**
 * 모든 이모지 데이터를 요청하고 결과를 반환한다.
 * @author <hwitae>
 * @param {string} postId
 * @returns
 */
export const useGetAllEmojiData = (postId) => {
  return useQuery({
    queryKey: [ALL_EMOJI_DATA_KEY, postId],
    queryFn: () => getAllEmojiData(postId),
    retry: 1,
    refetchOnWindowFocus: false,
    enabled: !!postId,
  });
};
