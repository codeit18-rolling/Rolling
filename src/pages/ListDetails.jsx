import { useParams } from "react-router";
import Container from "../components/Container/Container";
import CardGrid from "../features/ListDetail/CardGrid";
import CardButton from "../features/ListDetail/CardButton";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";
import useService from "../hooks/fetcher/useService";
import { getRecipientsDetailData } from "../service/ListDetails/getRecipientsDetailData";
import { cn } from "../utils";

// Card List Page
function ListDetails() {
  const id = useParams().id;

  // 삭제 커스텀 훅
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  // 카드 리스트 데이터
  const { data: cardDetailData, isLoading } = useService(() =>
    getRecipientsDetailData(id)
  );

  // console.log(cardDetailData);

  return (
    <div
      className={cn(
        "w-full min-h-[calc(100vh-132px)]",
        cardDetailData?.backgroundImageURL
          ? `bg-[url('${cardDetailData.backgroundImageURL}')] bg-cover bg-center`
          : cardDetailData?.backgroundColor &&
              `bg-${cardDetailData.backgroundColor}`
      )}
    >
      <Container className="h-full flex flex-col gap-[18px]">
        {/* Delete Button */}
        <CardButton
          isDeleteMode={isDeleteMode}
          navigateToEdit={navigateToEdit}
          navigateToBack={navigateToBack}
          id={id}
        />

        {/* Card Grid */}
        <CardGrid
          id={id}
          data={cardDetailData}
          isLoading={isLoading}
          isDeleteMode={isDeleteMode}
        />
      </Container>
    </div>
  );
}

export default ListDetails;
