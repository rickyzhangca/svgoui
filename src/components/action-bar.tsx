import { cn } from "@/lib/utils";
import copyToClipboard from "copy-to-clipboard";
import { useAtom, useAtomValue } from "jotai";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	CopyIcon,
	DownloadIcon,
	Rows2Icon,
} from "lucide-react";
import { useEffect, useMemo } from "react";
import { toast } from "sonner";
import {
	showComparisonAtom,
	svgAfterAtom,
	svgBeforeAtom,
	viewAtom,
} from "../context/atoms";
import { ToggleGroup, ToggleGroupItem } from "./animate-ui/radix/toggle-group";
import { Toast } from "./toast";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const ActionBar = () => {
	const [view] = useAtom(viewAtom);
	const [showComparison, setShowComparison] = useAtom(showComparisonAtom);

	const beforeSvg = useAtomValue(svgBeforeAtom);
	const afterSvg = useAtomValue(svgAfterAtom);

	const beforeBytes = new Blob([beforeSvg]).size;
	const afterBytes = new Blob([afterSvg]).size;

	const fmt = (bytes: number) => `${(bytes / 1024).toFixed(2)}k`;

	const reduction =
		beforeBytes > 0 ? ((beforeBytes - afterBytes) / beforeBytes) * 100 : 0;
	const reductionStr = `${reduction.toFixed(2)}%`;

	const onCopy = useMemo(
		() => () => {
			if (view === "image") {
				const copied = copyToClipboard(afterSvg);
				if (copied) toast.custom(() => <Toast type="copied" />);
			} else if (view === "markup") {
				toast.custom(() => <Toast type="copied" />);
			}
		},
		[view, afterSvg],
	);

	const onDownload = useMemo(
		() => () => {
			const blob = new Blob([afterSvg], { type: "image/svg+xml" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "optimized.svg";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
			toast.custom(() => <Toast type="downloaded" />);
		},
		[afterSvg],
	);

	useEffect(() => {
		document.addEventListener("copy", () => onCopy());
		return () => {
			document.removeEventListener("copy", () => onCopy());
		};
	}, [onCopy]);

	return (
		<Card className="z-10 border-none absolute bottom-4 left-1/2 -translate-x-1/2 p-2.5 overflow-hidden">
			<div className="flex items-center gap-2">
				<ToggleGroup
					type="single"
					value={showComparison ? "show-comparison" : ""}
					onValueChange={(value) => {
						if (value === "show-comparison") setShowComparison(true);
						else setShowComparison(false);
					}}
				>
					<ToggleGroupItem value="show-comparison" variant="outline">
						<Rows2Icon className="size-4 min-w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
				<div className="flex items-center gap-2 text-sm px-1">
					<span>
						{fmt(beforeBytes)} <span className="opacity-40">→</span>{" "}
						{fmt(afterBytes)}
					</span>
					<span
						className={cn(
							"font-bold flex items-center",
							beforeBytes < afterBytes && "text-red-600",
							beforeBytes === afterBytes && "text-gray-400",
							beforeBytes > afterBytes && "text-green-600",
						)}
					>
						{beforeBytes > afterBytes && (
							<ArrowDownIcon
								className="size-4 min-w-4 inline-block"
								strokeWidth={3}
							/>
						)}
						{beforeBytes < afterBytes && (
							<ArrowUpIcon
								className="size-4 min-w-4 inline-block"
								strokeWidth={3}
							/>
						)}
						{reductionStr}
					</span>
				</div>
				<Button onClick={onCopy}>
					<CopyIcon className="size-4 min-w-4" />
					Copy
					<span className="opacity-60 text-sm">⌘+C</span>
				</Button>
				<Button variant="outline" size="icon" onClick={onDownload}>
					<DownloadIcon className="size-4 min-w-4" />
				</Button>
			</div>
		</Card>
	);
};
