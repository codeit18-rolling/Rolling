import { useQuery } from "@tanstack/react-query";
import { getHeaderService } from "../../../service/HeaderService/getHeaderService";

export const useGetHeaderService = (recipientId) => {
  return useQuery({
    queryKey: ["headerService", recipientId],
    queryFn: () => getHeaderService(recipientId),
    retry: 1,
    enabled: !!recipientId,
  });
};
