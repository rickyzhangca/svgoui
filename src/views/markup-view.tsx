import { useAtom } from "jotai";
import { ComparisonSeparator } from "../components/comparison-separator";
import { Markup } from "../components/markup";
import { ScrollArea } from "../components/ui/scroll-area";
import {
	showComparisonAtom,
	showSidebarAtom,
	svgAfterAtom,
	svgBeforeAtom,
} from "../context/atoms";
import { cn } from "../lib/utils";

export const MarkupView = () => {
	const [showComparison] = useAtom(showComparisonAtom);
	const [showSidebar] = useAtom(showSidebarAtom);
	const [svgBefore] = useAtom(svgBeforeAtom);
	const [svgAfter] = useAtom(svgAfterAtom);

	return (
		<div className="relative h-full w-full bg-[#25292E]">
			{showComparison ? (
				<div className="w-full h-full">
					<div
						className={cn(
							"flex flex-col h-full",
							showSidebar ? "mr-4 w-[calc(100%-360px)]" : "w-full",
						)}
					>
						<ScrollArea
							className="flex-1 min-h-0 mr-4"
							scrollAreaThumbClassName="bg-white/30"
						>
							<Markup svg={svgBefore} className="pt-24 pb-10" />
						</ScrollArea>
						<ComparisonSeparator />
						<ScrollArea
							className="flex-1 min-h-0 mr-4"
							scrollAreaThumbClassName="bg-white/30"
						>
							<Markup svg={svgAfter} className="pt-12 pb-20" />
						</ScrollArea>
					</div>
				</div>
			) : (
				<div className="w-full h-full">
					<ScrollArea
						className={cn(
							"h-full",
							showSidebar ? "mr-4 w-[calc(100%-360px-24px)]" : "w-full",
						)}
						scrollAreaThumbClassName="bg-white/30"
					>
						<Markup svg={svgBefore} className="pt-24" />
					</ScrollArea>
				</div>
			)}
		</div>
	);
};
