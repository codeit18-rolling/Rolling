import { useParams } from "react-router";
import Container from "../components/Container/Container";
import CardGrid from "../features/ListDetail/CardGrid";
import CardButton from "../features/ListDetail/CardButton";
import useNavigateToEdit from "../features/ListDetail/hooks/useNavigateToEdit";

// Card List Page
function ListDetails() {
  const id = useParams().id;
  const { isDeleteMode, navigateToEdit, navigateToBack } =
    useNavigateToEdit(id);

  return (
    <div className="w-full min-h-[calc(100vh-132px)] bg-beige-200">
      <Container className="h-full flex flex-col gap-[18px]">
        {/* Delete Button */}
        <CardButton
          isDeleteMode={isDeleteMode}
          navigateToEdit={navigateToEdit}
          navigateToBack={navigateToBack}
          id={id}
        />

        {/* Card Grid */}
        <CardGrid id={id} isDeleteMode={isDeleteMode} />
      </Container>
    </div>
  );
}

export default ListDetails;
