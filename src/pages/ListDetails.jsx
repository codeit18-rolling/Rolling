import { useParams } from "react-router";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import CardGrid from "../features/ListDetail/CardGrid";

// Card List Page

function ListDetails() {
  const id = useParams().id;

  return (
    <div className="w-full min-h-[100vh] flex flex-col gap-[18px] bg-beige-200">
      <Container className="w-full h-full flex flex-col gap-[18px] bg-beige-200">
        {/* Delete Button */}
        <Button className="w-[92px] h-[39px] font-normal text-[16px] leading-7 tracking-[-0.01em] self-end">
          삭제하기
        </Button>

        {/* Card Grid */}
        <CardGrid id={id} />
      </Container>
    </div>
  );
}

export default ListDetails;
