import { cn } from "../../../utils";
import OptionFileLoadContent from "./OptionFileLoadContent";
import Toast from "../../../components/Toast/Toast";
import useOptionFileUpload from "../hooks/useOptionFileUpload";
const labelClasses = [
  "group w-full cursor-pointer p-6 mt-10",
  "flex flex-col items-center justify-center gap-2 rounded-2xl relative",
  "border-[3px] border-dotted border-gray-300",
  "after:w-full after:h-full after:relative after:z-[1]",
  "focus:shadow-purple-500 focus:border-purple-500 hover:border-purple-500",
];
const toastIcons = {
  success: "completed",
  error: "alert",
};
/**
 * 옵션 이미지 파일
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {function} props.onUpload - 업로드 파일 전달
 * @returns {JSX.Element} 이미지 옵션 버튼 요소
 */

const OptionFile = ({ onUpload }) => {
  const { isActive, isUploading, toast, closeToast, handleDrag, handleFiles } =
    useOptionFileUpload(onUpload);
  return (
    <>
      <label
        htmlFor="imageUpload"
        aria-label="이미지 업로드"
        className={cn(labelClasses, isActive && "border-purple-500")}
        onDragOver={handleDrag.over}
        onDragEnter={handleDrag.start}
        onDragLeave={handleDrag.end}
        onDrop={handleDrag.drop}
      >
        <OptionFileLoadContent isUploading={isUploading} isActive={isActive} />
        <input
          type="file"
          id="imageUpload"
          name="imageUpload"
          accept="image/jpeg, image/jpg, image/png, image/webp"
          onChange={(e) => {
            handleFiles(Array.from(e.target.files));
            e.target.value = ""; // 연속 업로드 감지
          }}
          className="hidden"
        />
      </label>
      <Toast
        isOpen={toast.isOpen}
        image={toastIcons[toast.type]}
        message={toast.message}
        onClose={closeToast}
      />
    </>
  );
};
export default OptionFile;
