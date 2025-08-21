import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllEmojiData } from "../../../service/HeaderService/getAllEmojiData";

export const ALL_EMOJI_DATA_KEY = "allEmojiData";

/**
 * 모든 이모지 데이터를 요청한다.
 * @author <hwitae>
 * @param {object{}} emojiParams 롤링페이퍼 아이디와 limit가 들어있는 객체
 * @returns
 */
export const useGetAllEmojiData = (emojiParams) => {
  return useInfiniteQuery({
    queryKey: [ALL_EMOJI_DATA_KEY, emojiParams],
    queryFn: (pageParam) => getAllEmojiData(emojiParams, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        return new URL(lastPage.next).searchParams.get("offset");
      }

      return undefined;
    },
    gcTime: 0,
  });
};
