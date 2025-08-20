import { memo } from "react";
import { cn } from "../../utils";
import HeaderServiceContents from "./HeaderServiceElements/HeaderServiceContents";
import { useGetHeaderService } from "./hooks/useGetHeaderService";
import RecipientName from "./HeaderServiceElements/RecipientName";
import { HeaderServiceWrapper } from "./HeaderServiceElements/HeaderServiceWrapper";

/**
 * 헤더 밑 부분에 표출되는 헤더 서비스 컴포넌트
 * @author <hwitae>
 * @param {string} recipientId
 */
const HeaderService = ({ recipientId }) => {
  const { data: recipients, isLoading } = useGetHeaderService(recipientId);

  return (
    <HeaderServiceWrapper>
      {!isLoading && (
        <>
          <RecipientName recipients={recipients} />
          <HeaderServiceContents recipients={recipients} />
        </>
      )}
    </HeaderServiceWrapper>
  );
};

export default memo(HeaderService);
