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
import useInfiniteScroll from "../features/ListDetail/hooks/useInfiniteScroll";

// Card List Page
function ListDetails() {
  const { id } = useParams();
  const observerTarget = useRef(null);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetRecipientsDetailData({
      id,
    });

  const cardDetailData = data?.pages.flatMap((page) => page.results) ?? []; // pages 배열을 flat한 배열로 변환

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

  return (
    <>
      <HeaderService recipientId={id} />
      <div
        className={cn(
          "w-full min-h-[calc(100vh-104px)]",
          "desktop:min-h-[calc(100vh-133px)]",
          data?.backgroundImageURL
            ? "bg-cover bg-center"
            : BG_COLORS[cardDetailData?.backgroundColor] || "bg-beige-200"
        )}
        style={
          data?.backgroundImageURL && {
            backgroundImage: `url(${cardDetailData.backgroundImageURL})`,
          }
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
