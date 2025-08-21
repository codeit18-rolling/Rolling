import { useParams } from "react-router";
import { useRef } from "react";
import Container from "../components/Container/Container";
import CardGrid from "../features/ListDetail/CardGrid";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";
import { cn } from "../utils";
import HeaderService from "../features/HeaderService/HeaderService";
import { BG_COLORS } from "../constants/backgroundColor";
import ListDetailActionButtons from "../features/ListDetail/ListDetailActionButtons";
import DeleteButton from "../features/ListDetail/ListDetailElements/DeleteButton";
import useGetRecipientsDetailData from "../hooks/fetcher/ListDetails/useGetRecipientsDetailData.js";
import { useGetHeaderService } from "../features/HeaderService/hooks/useGetHeaderService";
import useInfiniteScroll from "../features/ListDetail/hooks/useInfiniteScroll";

/* TODO(지권)
  - 버튼 퍼블리싱 수정 필요
  - 헤더 서비스 컴포넌트 데이터 테스트 필요
  - 리스트 데이터 호출 위치 변경
*/

// Card List Page
function ListDetails() {
  const { id } = useParams();
  const observerTarget = useRef(null);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetRecipientsDetailData({
      id,
    });

  const cardDetailData = data?.pages.flatMap((page) => page.results) ?? []; // pages 배열을 flat한 배열로 변환
  // console.log(cardDetailData);

  // 무한 스크롤 훅
  useInfiniteScroll({
    observerTarget,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  });

  // 삭제 커스텀 훅
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  // 헤더 서비스 데이터
  const { data: recipients, isLoading: headerServiceLoading } =
    useGetHeaderService(id);
  // console.log(recipients);

  return (
    <>
      <HeaderService recipients={recipients} isLoading={headerServiceLoading} />
      <div
        className={cn(
          "w-full min-h-[calc(100vh-104px)]",
          "desktop:min-h-[calc(100vh-133px)]",
          recipients?.backgroundImageURL
            ? "bg-cover bg-center"
            : BG_COLORS[recipients?.backgroundColor] || "bg-beige-200"
        )}
        style={
          recipients?.backgroundImageURL
            ? { backgroundImage: `url(${recipients.backgroundImageURL})` }
            : {}
        }
      >
        <Container className="h-full flex flex-col justify-end gap-[18px]">
          {/* Delete Button */}
          {isDeleteMode && <DeleteButton id={id} />}

          {/* Card Grid */}
          <CardGrid
            id={id}
            data={cardDetailData}
            isLoading={isLoading}
            isDeleteMode={isDeleteMode}
          />
        </Container>
        <div ref={observerTarget} className="h-4 w-full" />
        <ListDetailActionButtons
          isDeleteMode={isDeleteMode}
          navigateToEdit={navigateToEdit}
          navigateToBack={navigateToBack}
        />
      </div>
    </>
  );
}

export default ListDetails;
