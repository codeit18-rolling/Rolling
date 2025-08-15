import { useState } from "react";
import ToggleButton, {
  ToggleButtonWrapper,
} from "../../components/Button/ToggleButton";
import Option from "../../features/Option/Option";

const PostOption = ({ bgImages, isLoading, onColorSelect, onImageSelect }) => {
  const [toggleOption, setToggleOption] = useState("color");

  return (
    <div className="flex flex-col flex-nowrap gap-6">
      <div className="flex flex-col flex-nowrap gap-1">
        <h2 className="text-24 font-bold">배경화면을 선택해 주세요.</h2>
        <p className="text-16 font-normal text-gray-500">
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </p>
      </div>
      <ToggleButtonWrapper className="sm:w-[244px]">
        <ToggleButton
          isActive={toggleOption === "color"}
          onClick={() => setToggleOption("color")}
        >
          컬러
        </ToggleButton>
        <ToggleButton
          isActive={toggleOption === "image"}
          onClick={() => setToggleOption("image")}
        >
          이미지
        </ToggleButton>
      </ToggleButtonWrapper>
      <div className="sm:mt-4 desktop:mt-5">
        <Option
          type={toggleOption}
          bgImages={bgImages}
          isLoading={isLoading}
          onColorSelect={onColorSelect}
          onImageSelect={onImageSelect}
        ></Option>
      </div>
    </div>
  );
};
export default PostOption;
