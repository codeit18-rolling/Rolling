import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";
const style = {
  iconStyle: "bg-gray-400 group-hover:bg-purple-500",
  textStyle:
    "text-14 text-center break-keep text-gray-400 font-semibold group-hover:text-purple-500",
  loadingSpinner:
    "inline-block w-2 h-2 ml-6 rounded-full bg-purple-500 shadow-loading-spinner animate-loading-spinner",
};
const UPLOAD_TEXT = {
  default: (
    <>
      배경으로 쓰고 싶은 사진 있나요?
      <br />
      클릭 또는 드래그해서 올려주세요 😎
      <span className="block text-12 font-medium text-gray-400">
        (최대 용량 5MB)
      </span>
    </>
  ),
  uploading: (
    <>
      멋진 배경을 불러오는 중이에요 🎨
      <span className={style.loadingSpinner}></span>
    </>
  ),
};
/**
 * 옵션 이미지 파일 업로드
 *
 * @author <sohyun>
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.image - 버튼에 표시할 배경 이미지 URL
 * @param {boolean} props.isUploading - 업로드 여부
 * @param {boolean} props.isActive - 활성화 여부 (hover , drag)
 * @returns {JSX.Element} 이미지 옵션 버튼 요소
 */

const OptionFileLoadContent = ({ isUploading, isActive }) => {
  return (
    <>
      {!isUploading && (
        <Icon
          iconName="file"
          className={cn(style.iconStyle, isActive && "bg-purple-500")}
        />
      )}
      <div className={cn(style.textStyle, "text-purple-500")}>
        {isUploading ? UPLOAD_TEXT.uploading : UPLOAD_TEXT.default}
      </div>
    </>
  );
};
export default OptionFileLoadContent;
