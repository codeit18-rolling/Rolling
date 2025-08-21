import { useParams } from "react-router";
import Container from "../components/Container/Container";
import CardGrid from "../features/ListDetail/CardGrid";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";
import { cn } from "../utils";
import HeaderService from "../features/HeaderService/HeaderService";
import { BG_COLORS } from "../constants/backgroundColor";
import ListDetailActionButtons from "../features/ListDetail/ListDetailActionButtons";
import DeleteButton from "../features/ListDetail/ListDetailElements/DeleteButton";
import useGetRecipientsDetailData from "../hooks/fetcher/ListDetails/useGetRecipientsDetailData.js";

// Card List Page
function ListDetails() {
  const { id } = useParams();

  // 삭제 커스텀 훅
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  // 카드 리스트 데이터
  const { data: cardDetailData, isLoading } = useGetRecipientsDetailData(id);
  // console.log(cardDetailData);

  // 헤더 서비스 데이터

  return (
    <>
      <HeaderService recipientId={id} />
      <div
        className={cn(
          "w-full min-h-[calc(100vh-104px)]",
          "desktop:min-h-[calc(100vh-133px)]",
          cardDetailData?.backgroundImageURL
            ? "bg-cover bg-center"
            : BG_COLORS[cardDetailData?.backgroundColor] || "bg-beige-200"
        )}
        style={
          cardDetailData?.backgroundImageURL && {
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
