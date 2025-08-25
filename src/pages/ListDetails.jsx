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
import Dimmed from "../components/Dimmed/Dimmed";
import MetaTag from "../components/MetaTag/MetaTag";

// Card List Page
function ListDetails() {
  const { id } = useParams();

  // 헤더 서비스 데이터
  const { data: recipients, isLoading: headerServiceLoading } =
    useGetHeaderService(id);

  // 삭제 커스텀 훅
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  const hasBgImg = !!recipients?.backgroundImageURL;
  const hasBgColor = !!recipients?.backgroundColor;

  return (
    <>
      <MetaTag
        title={`Rolling | ${recipients?.name || "codeit"}님의 롤링페이퍼`}
        description="소중한 사람이 남긴 따뜻한 메시지를 확인하세요. 함께한 추억과 마음이 담긴 롤링페이퍼를 지금 바로 감상할 수 있습니다."
      />
      <HeaderService recipients={recipients} isLoading={headerServiceLoading} />
      <div
        className={cn(
          "relative w-full min-h-[calc(100vh-104px)]",
          "desktop:min-h-[calc(100vh-133px)]",
          hasBgImg && "bg-cover bg-center",
          hasBgColor && BG_COLORS[recipients?.backgroundColor]
        )}
        style={{
          backgroundImage:
            hasBgImg &&
            `url(${recipients.backgroundImageURL || img_background_fallback})`,
        }}
      >
        {hasBgImg && <Dimmed />}

        <Container className="relative z-10 h-full flex flex-col justify-end gap-[18px]">
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
