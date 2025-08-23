import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postEmoji } from "../../../service/HeaderService/postEmoji";
import { ALL_EMOJI_DATA_KEY } from "./useGetAllEmojiData";

export const HEADER_SERVICE_KEY = "headerService";

/**
 * 이모지를 남긴다.
 * @author <hwitae>
 * @returns {mutate, isPending, isSuccess}
 */
export const usePostEmoji = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (reactionData) => postEmoji(reactionData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ALL_EMOJI_DATA_KEY],
      });
      queryClient.invalidateQueries({
        queryKey: [HEADER_SERVICE_KEY],
      });
    },
    onError: (error) => console.error(error),
    retry: 1,
    retryDelay: 500,
  });

  return { mutate, isPending, isSuccess };
};
