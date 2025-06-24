import { ActionBar } from "./components/action-bar";
import { NavBar } from "./components/nav-bar";
import { Sidebar } from "./components/sidebar";
import { Toaster } from "./components/ui/sonner";

import "@xyflow/react/dist/style.css";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { svgBeforeAtom, viewAtom } from "./context/atoms";
import { cn } from "./lib/utils";
import { ImageView } from "./views/image-view";
import { MarkupView } from "./views/markup-view";

const App = () => {
	const [view] = useAtom(viewAtom);
	const setSvgBefore = useSetAtom(svgBeforeAtom);

	const [isDragging, setIsDragging] = useState(false);

	const dragCounter = useRef(0);

	useEffect(() => {
		const handleDragEnter = (e: DragEvent) => {
			e.preventDefault();
			dragCounter.current++;
			setIsDragging(true);
		};

		const handleDragLeave = (e: DragEvent) => {
			e.preventDefault();
			dragCounter.current--;
			if (dragCounter.current === 0) setIsDragging(false);
		};

		const handleDragOver = (e: DragEvent) => {
			e.preventDefault();
		};

		const handleDrop = (e: DragEvent) => {
			e.preventDefault();
			dragCounter.current = 0;
			setIsDragging(false);

			const files = e.dataTransfer?.files;
			if (!files || files.length === 0) return;

			const file = files[0];
			if (!file.name.endsWith(".svg")) return;

			const reader = new FileReader();
			reader.onload = () => {
				if (typeof reader.result === "string") {
					setSvgBefore(reader.result);
				}
			};
			reader.readAsText(file);
		};

		window.addEventListener("dragenter", handleDragEnter);
		window.addEventListener("dragleave", handleDragLeave);
		window.addEventListener("dragover", handleDragOver);
		window.addEventListener("drop", handleDrop);

		return () => {
			window.removeEventListener("dragenter", handleDragEnter);
			window.removeEventListener("dragleave", handleDragLeave);
			window.removeEventListener("dragover", handleDragOver);
			window.removeEventListener("drop", handleDrop);
		};
	}, [setSvgBefore]);

	useEffect(() => {
		const handlePaste = (e: ClipboardEvent) => {
			const clipboard = e.clipboardData;
			if (!clipboard) return;

			const svgFile = Array.from(clipboard.files || []).find(
				(f) => f.type === "image/svg+xml" || f.name.endsWith(".svg"),
			);
			if (svgFile) {
				const reader = new FileReader();
				reader.onload = () => {
					if (typeof reader.result === "string") setSvgBefore(reader.result);
				};
				reader.readAsText(svgFile);
				return;
			}

			const text = clipboard.getData("text/plain");
			if (text?.trim().startsWith("<svg")) {
				setSvgBefore(text);
				return;
			}

			for (const item of Array.from(
				clipboard.items ?? [],
			) as DataTransferItem[]) {
				if (item.type === "image/svg+xml" || item.type === "text/html") {
					item.getAsString((str: string) => {
						if (str?.trim().startsWith("<svg")) {
							setSvgBefore(str);
						}
					});
					break;
				}
			}
		};

		window.addEventListener("paste", handlePaste);
		return () => window.removeEventListener("paste", handlePaste);
	}, [setSvgBefore]);

	return (
		<div className="relative h-screen w-screen">
			<div
				className={cn(
					"fixed inset-0 z-50 flex items-center justify-center bg-primary/80 text-white text-5xl font-semibold pointer-events-none transition-opacity duration-200",
					isDragging ? "opacity-100" : "opacity-0",
				)}
			>
				<p className="bg-white text-primary p-4 rotate-6 rounded-xl">
					Drop to compress
				</p>
			</div>
			{view === "image" && <ImageView />}
			{view === "markup" && <MarkupView />}
			<NavBar />
			<Sidebar />
			<Toaster
				position="bottom-center"
				offset={{ bottom: 64 }}
				visibleToasts={1}
				style={
					{
						"--width": "undefined",
						zIndex: 0,
					} as React.CSSProperties
				}
			/>
			<ActionBar />
		</div>
	);
};

export default App;
