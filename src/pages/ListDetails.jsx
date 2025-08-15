import { useParams, useNavigate } from "react-router";
import useService from "../hooks/useService";
import { getRecipientsDetailData } from "../service/getRecipientsDetailData";
import Card from "../components/Card/Card";
import AddCard from "../components/Card/AddCard";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import SkeletonUI from "../components/Skeleton/SkeletonUI";

// Card List Page

function ListDetails() {
  const navigate = useNavigate();
  const id = useParams().id;

  const {
    data: cardsData,
    isLoading,
    isError,
  } = useService(() => getRecipientsDetailData("18-1", id));

  // if (isError) {
  //   navigate("/404");
  //   return null;
  // }

  return (
    <Container
      isFull={false}
      className="w-full min-h-[calc(100vh-133px)] flex flex-col gap-[18px] bg-beige-200"
    >
      <Button className="w-[92px] h-[39px] font-normal text-[16px] leading-7 tracking-[-0.01em]">
        삭제하기
      </Button>
      <div className="grid grid-cols-3 grid-row-2 gap-[24px]">
        <AddCard id={id} />
        {isLoading && <SkeletonUI count={5} />}
        {cardsData?.map((data, index) => (
          <Card
            key={index}
            img={data.img}
            user={data.user}
            content={data.content}
            date={data.date}
            onDelete={data.onDelete}
          />
        ))}
      </div>
    </Container>
  );
}

export default ListDetails;
