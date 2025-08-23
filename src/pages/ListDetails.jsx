import { useParams } from "react-router";
import Container from "../components/Container/Container";
import CardGrid from "../features/ListDetail/CardGrid";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";
import { cn } from "../utils";
import HeaderService from "../features/HeaderService/HeaderService";
import { BG_COLORS } from "../constants/backgroundColor";
import ListDetailActionButtons from "../features/ListDetail/ListDetailActionButtons";
import DeleteButton from "../features/ListDetail/ListDetailElements/DeleteButton";
import { useGetHeaderService } from "../features/HeaderService/hooks/useGetHeaderService";
import img_background_fallback from "../assets/empty/img_background_fallback.png";

// Card List Page
function ListDetails() {
  const { id } = useParams();

  // 헤더 서비스 데이터
  const { data: recipients, isLoading: headerServiceLoading } =
    useGetHeaderService(id);

  // 삭제 커스텀 훅
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

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
        style={{
          backgroundImage:
            recipients?.backgroundImageURL &&
            `url(${(recipients.backgroundImageURL, img_background_fallback)})`,
        }}
      >
        <Container className="h-full flex flex-col justify-end gap-[18px]">
          {/* Delete Button */}
          {isDeleteMode && <DeleteButton id={id} />}

          {/* Card Grid */}
          <CardGrid id={id} isDeleteMode={isDeleteMode} />
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
