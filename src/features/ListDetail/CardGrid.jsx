import AddCard from "../../components/Card/AddCard";
import Card from "../../components/Card/Card";
import SkeletonUI from "../../components/Skeleton/SkeletonUI";
import useService from "../../hooks/fetcher/useService";
import { getRecipientsDetailData } from "../../service/ListDetails/getRecipientsDetailData";
import { cn } from "../../utils";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
// import deleteRecipient from "../../service/ListDetails/deleteRecipientsDetail";

const CardGrid = ({ id, isDeleteMode = false }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const { data: cardData, isLoading } = useService(() =>
    getRecipientsDetailData(id)
  );

  // console.log(cardData);

  // 카드 전체 삭제 함수
  // const deleteButtonHandler = () => deleteRecipient(id);

  return (
    <div
      className={cn(
        "grid gap-[16px] grid-cols-1 w-full justify-center",
        "desktop:grid-cols-3 desktop:grid-row-2 desktop:gap-[24px]",
        "tablet:grid-cols-2 tablet:grid-row-2"
      )}
    >
      {!isDeleteMode && <AddCard id={id} />}
      {isLoading && <SkeletonUI count={5} />}
      {cardData?.recentMessages?.map((data, index) => (
        <Card
          key={index}
          img={data.profileImageURL}
          user={data.sender}
          relationship={data.relationship}
          content={data.content}
          date={data.createdAt}
          isDeleteMode={isDeleteMode}
          id={data.id}
          onModalOpen={() => handleCardClick(data)}
        />
      ))}
      {selectedCard && (
        <Modal
          isOpen={!!selectedCard}
          onClose={handleCloseModal}
          sender={selectedCard.sender}
          profileImageURL={selectedCard.profileImageURL}
          relationship={selectedCard.relationship}
          content={selectedCard.content}
          createdAt={selectedCard.createdAt}
        />
      )}
    </div>
  );
};

export default CardGrid;
