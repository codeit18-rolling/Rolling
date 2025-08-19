import Icon from "../../../components/Icon/Icon";
import { cn } from "../../../utils";

const iconStyle = "bg-gray-400 group-hover:bg-purple-500";
const textStyle =
  "text-14 text-center break-keep text-gray-400 font-semibold group-hover:text-purple-500";
const loadingSpinner =
  "inline-block w-2 h-2 ml-6 rounded-full bg-purple-500 shadow-loading-spinner animate-loading-spinner";

const OptionFileLoadContent = ({ isUploading, isActive, size }) => {
  return (
    <>
      {isUploading ? (
        <div className={cn(textStyle, "text-purple-500")}>
          업로드 중 <span className={loadingSpinner}></span>
        </div>
      ) : (
        <>
          <Icon
            iconName="plus"
            className={cn(iconStyle, isActive && "bg-purple-500")}
          ></Icon>
          <div className={cn(textStyle, isActive && "text-purple-500")}>
            {`${size}MB 이하만 업로드 가능합니다`}
          </div>
        </>
      )}
    </>
  );
};
export default OptionFileLoadContent;
