import { useParams } from "react-router";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CardGrid from "../features/ListDetail/CardGrid";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";
import { cn } from "../utils";

// Card List Page
function ListDetails() {
  const id = useParams().id;

  // navigate to edit or back hook
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  return (
    <div className="w-full min-h-[calc(100vh-132px)] bg-beige-200">
      <Container className="h-full flex flex-col gap-[18px]">
        {/* Delete Button */}
        <Button
          className={cn(
            "fixed bottom-6 left-5 right-5 z-50 h-[56px] rounded-[12px] font-normal text-[16px] leading-[26px] tracking-[-0.01em] text-white transition-all duration-150 ease-in-out",
            "desktop:static desktop:inset-auto desktop:self-end desktop:mx-0 desktop:w-[92px] desktop:h-[39px] desktop:rounded-[6px]",
            "tablet:left-6 tablet:right-6"
          )}
          aria-label={isDeleteMode ? "돌아가기" : "삭제하기"}
          onClick={isDeleteMode ? navigateToBack : navigateToEdit}
        >
          {isDeleteMode ? "돌아가기" : "삭제하기"}
        </Button>

        {/* Card Grid */}
        <CardGrid id={id} isDeleteMode={isDeleteMode} />
      </Container>
    </div>
  );
}

export default ListDetails;
