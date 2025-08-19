import { useQuery } from "@tanstack/react-query";
import { getRecipientsDetailData } from "../../../service/ListDetails/getRecipientsDetailData";

const useGetRecipientsDetailData = (id) => {
  return useQuery({
    queryKey: ["getRecipientsDetailData", id], // 캐시 키 (고유 식별자)
    queryFn: () => getRecipientsDetailData(id), // API 호출 함수
    retry: 1, // API 호출 실패 시 재시도 횟수
    staleTime: 1000 * 60 * 5, // fresh 상태 유지 시간 (5분) → 이 시간 동안은 refetch 안 함
    gcTime: 1000 * 60 * 30, // 캐시된 데이터가 가비지 컬렉션에서 제거되는 시간 (30분)
    refetchOnWindowFocus: false, // 브라우저 창에 포커스될 때 자동으로 재요청하지 않음
  });
};

export default useGetRecipientsDetailData;
