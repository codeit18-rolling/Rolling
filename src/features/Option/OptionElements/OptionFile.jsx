import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";
import { validateFile } from "../../../utils/validate";

const OptionFile = ({ onUpload }) => {
  const handleFile = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = validateFile(files);
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    onUpload(newPreviews);
  };
  return (
    <>
      <label
        htmlFor="imageUpload"
        aria-label="이미지 업로드"
        className={cn(
          "group cursor-pointer",
          "w-[calc((100%-1rem)/2)] flex-auto aspect-square rounded-2xl relative",
          "border border-purple-300",
          "focus:shadow-purple-500 focus:border-purple-500 hover:border-purple-500",
          "tablet:w-[calc((100%-(1rem*4))/5)]",
          "sm:w-[calc((100%-(1rem*2))/3)]"
        )}
      >
        <Icon
          iconName="plus"
          className="btn-icon bg-purple-300 group-hover:bg-purple-500"
        ></Icon>
        <input
          type="file"
          name="imageUpload"
          id="imageUpload"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </label>
    </>
  );
};
export default OptionFile;
