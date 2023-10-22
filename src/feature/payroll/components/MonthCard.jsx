import { CheckCircle2 } from "lucide-react";
import { cn } from "../../../lib/utils";

const MonthCard = ({ isActive = false }) => {
  return (
    <div
      className={cn(
        "bg-white border  border-gray-300 cursor-pointer hover:border-sky-500",
        isActive && "border-sky-500"
      )}
    >
      <div className="flex flex-col justify-center items-center py-2">
        <h6 className="text-md text-gray-800 font-medium">Apr 2020</h6>
        <span className="text-[10px] 2xl:text-[12px] text-gray-500 font-medium">
          MAR 26 - APR 25
        </span>
      </div>
      <div
        className={cn(
          "border-x-0 border-inherit bg-gray-200 gap-1 p-1 flex items-center justify-center",
          isActive && "bg-sky-500"
        )}
      >
        <CheckCircle2
          className={cn("h-4 w-4 stroke-green-600", isActive && "stroke-white")}
        />
        <p className={cn("text-xs  text-green-600", isActive && "text-white")}>
          COMPLETED
        </p>
      </div>
    </div>
  );
};

export default MonthCard;
