import { memo } from "react";
import HeaderServiceContents from "./HeaderServiceElements/HeaderServiceContents";
import RecipientName from "./HeaderServiceElements/RecipientName";
import { HeaderServiceWrapper } from "./HeaderServiceElements/HeaderServiceWrapper";

/**
 * 헤더 밑 부분에 표출되는 헤더 서비스 컴포넌트
 * @author <hwitae>
 * @param {string} recipientId
 */
const HeaderService = ({ recipients, isLoading }) => {
  return (
    <HeaderServiceWrapper>
      {!isLoading ? (
        <>
          <RecipientName recipients={recipients} />
          <HeaderServiceContents recipients={recipients} />
        </>
      ) : (
        <>데이터를 불러오는 중 입니다...</>
      )}
    </HeaderServiceWrapper>
  );
};

export default memo(HeaderService);
