import { CircleCheck, TriangleAlert, Hourglass } from "lucide-react";

function Badge({ variant, children }) {
  if (variant === "success") {
    return (
      <div className=" text-teal-600 relative items-center  bg-teal-100   flex  px-2 py-1 rounded-lg    gap-1 font-semibold ">
        <CircleCheck strokeWidth={2} />
        {children}
      </div>
    );
  }
  if (variant === "danger") {
    return (
      <div className="text-rose-600 relative items-center  bg-rose-100    flex  px-2 py-1 rounded-lg    gap-1 font-semibold ">
        <TriangleAlert strokeWidth={2} />
        {children}
      </div>
    );
  }
  if (variant === "pending") {
    return (
      <div className="text-orange-600  relative items-center  bg-orange-100    flex  px-2 py-1 rounded-lg    gap-1 font-semibold ">
        <Hourglass strokeWidth={2} />
        {children}
      </div>
    );
  }
}

export default Badge;
