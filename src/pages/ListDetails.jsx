import { useParams } from "react-router";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CardGrid from "../features/ListDetail/CardGrid";
import { cn } from "../utils";

// Card List Page

function ListDetails() {
  const id = useParams().id;

  return (
    <div className="w-full min-h-[100vh] flex flex-col gap-[18px] bg-beige-200">
      <Container className="w-full h-full flex flex-col gap-[18px] bg-beige-200 pb-[72px] desktop:pb-0">
        {/* Delete Button */}
        <Button
          className={cn(
            "fixed bottom-6 left-5 right-5 z-50 h-[56px] rounded-[12px] font-normal text-[16px] leading-7 tracking-[-0.01em] transition-all duration-150 ease-in-out",
            "desktop:static desktop:inset-auto desktop:self-end desktop:mx-0 desktop:w-[92px] desktop:h-[39px] desktop:rounded-xl",
            "tablet:left-6 tablet:right-6"
          )}
          aria-label="삭제하기"
        >
          삭제하기
        </Button>

        {/* Card Grid */}
        <CardGrid id={id} />
      </Container>
    </div>
  );
}

export default ListDetails;
