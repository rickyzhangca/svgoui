import { useAtom } from "jotai";
import { Canvas } from "../components/canvas";
import { CanvasBackground } from "../components/canvas-background";
import { ComparisonSeparator } from "../components/comparison-separator";
import { showComparisonAtom } from "../context/atoms";

export const ImageView = () => {
	const [showComparison] = useAtom(showComparisonAtom);

	return (
		<div className="relative h-full w-full bg-accent">
			{showComparison ? (
				<div className="w-full h-full flex flex-col">
					<div className="relative w-full h-1/2">
						<CanvasBackground />
						<Canvas />
					</div>
					<ComparisonSeparator />
					<div className="relative w-full h-1/2">
						<CanvasBackground />
						<Canvas />
					</div>
				</div>
			) : (
				<div className="w-full h-full">
					<CanvasBackground />
					<Canvas />
				</div>
			)}
		</div>
	);
};
