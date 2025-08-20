import { useQuery } from "@tanstack/react-query";

/**
 * 특정 데이터를 React Query로 가져오기 위한 커스텀 훅
 *
 * @function useGetRecipientsDetailData
 * @param {Object} params - 훅에 전달되는 파라미터 객체
 * @param {string} params.queryKey - 캐시 키 (고유 식별자)
 * @param {Function} params.queryFn - API 호출 함수 (Promise 반환 필수)
 * @param {number} params.retry - API 호출 실패 시 재시도 횟수
 * @param {number} params.staleTime - fresh 상태 유지 시간 (ms 단위). 이 시간 동안은 refetch 안 함
 * @param {number} params.gcTime - 캐시된 데이터가 가비지 컬렉션에서 제거되는 시간 (ms 단위)
 * @param {boolean} params.refetchOnWindowFocus - 브라우저 창에 포커스될 때 자동으로 재요청할지 여부
 * @returns {import('@tanstack/react-query').UseQueryResult} React Query 결과 객체
 *
 * @example
 * const { data, isLoading, error } = useQueryService({
 *   queryKey: ["recipients", id],
 *   queryFn: () => getRecipientsDetailData({ id, offset: 0, limit: 6 }),
 *   retry: 1,
 *   staleTime: 1000 * 60 * 5,
 *   gcTime: 1000 * 60 * 30,
 *   refetchOnWindowFocus: false,
 * });
 */

const useQueryService = ({ queryKey, queryFn, retry, staleTime, gcTime, refetchOnWindowFocus }) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    retry: retry,
    staleTime: staleTime,
    gcTime: gcTime,
    refetchOnWindowFocus: refetchOnWindowFocus,
  });
};

export default useQueryService;