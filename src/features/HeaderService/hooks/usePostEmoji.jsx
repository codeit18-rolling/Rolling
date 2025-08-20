import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postEmoji } from "../../../service/Emoji/postEmoji";

/**
 * 이모지를 남긴다.
 * @author <hwitae>
 * @returns {mutate, isPending, isSuccess}
 */
export const usePostEmoji = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (reactionData) => postEmoji(reactionData),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["allEmojiData", variables.id],
      });
      queryClient.invalidateQueries({
        queryKey: ["getRecipientsDetailData"],
      });
    },
    onError: (error) => console.error(error),
    retry: 1,
    retryDelay: 500,
  });

  return { mutate, isPending, isSuccess };
};
