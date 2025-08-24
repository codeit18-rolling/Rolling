import { cn } from "../../../utils";
import ProfileUpload from "./ProfileUpload";

const SUB_TEXT = "프로필 이미지를 선택해주세요!";
const style = {
  option:
    "rounded-full w-[40px] h-[40px] bg-gray-300 bg-cover bg-center ring-1 ring-gray-200 tablet:w-[56px] tablet:h-[56px]",
};

export const ProfileOptions = ({ imageUrlLists, onClick, selectedProfile }) => {
  return (
    <div>
      <p className="text-gray-500 mb-1">{SUB_TEXT}</p>
      <div className="flex gap-[5px] flex-wrap">
        <ProfileUpload
          style={style}
          onClick={onClick}
          selectedProfile={selectedProfile}
        />
        {imageUrlLists.map((url, index) => (
          <button
            key={`image-${index}`}
            onClick={() => onClick(url)}
            className={cn(
              style.option,
              selectedProfile === url && "ring-2 ring-blue-500"
            )}
            style={{ backgroundImage: `url("${url}")` }}
            aria-label={`프로필 사진 ` + index}
          />
        ))}
      </div>
    </div>
  );
};
