import { cn } from "@/lib/utils";
import { CheckCircle2Icon } from "lucide-react";

type ToastProps = {
	type: "optimized" | "copied" | "downloaded";
};

export const Toast = ({ type }: ToastProps) => {
	return (
		<div
			className={cn(
				"shadow-xl z-40 items-center justify-center flex  gap-2 text-white -translate-x-1/2 rounded-t-xl w-[267px] pl-2 pr-4 pt-3 pb-4",
				type === "optimized"
					? "bg-blue-600"
					: type === "copied" || type === "downloaded"
						? "bg-green-600"
						: "bg-gray-600",
			)}
		>
			<CheckCircle2Icon className="size-5 min-w-5" />
			<p>
				{type === "optimized"
					? "Optimized"
					: type === "downloaded"
						? "Downloaded"
						: "Copied"}
			</p>
		</div>
	);
};
