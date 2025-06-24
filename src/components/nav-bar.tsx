import { useAtom } from "jotai";
import { viewAtom } from "../context/atoms";
import { ToggleGroup, ToggleGroupItem } from "./animate-ui/radix/toggle-group";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export const NavBar = () => {
	const [view, setView] = useAtom(viewAtom);

	return (
		<Card className="absolute top-4 left-4 p-2">
			<div className="flex items-center gap-2">
				<HoverCard openDelay={0} closeDelay={0}>
					<HoverCardTrigger className="cursor-pointer no-underline">
						<div className="pl-3 pr-2">
							<h1 className="font-bold text-lg">SVGOUI</h1>
						</div>
					</HoverCardTrigger>
					<HoverCardContent
						sideOffset={0}
						alignOffset={-8}
						align="start"
						className="flex w-96 flex-col gap-4"
					>
						<div className="flex flex-col gap-4 rounded bg-primary px-4 py-12 text-center text-primary-foreground">
							<span className="flex flex-col">
								<span className="opacity-60">Powered by the latest</span>
								<span className=" font-bold text-4xl">SVGO v4</span>
							</span>
						</div>
					</HoverCardContent>
				</HoverCard>
				<a
					href="https://github.com/rickyzhangca/svgoui"
					target="_blank"
					rel="noreferrer"
					className="flex-1"
				>
					<Button variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 1024 1024"
							className="size-5 min-w-5"
						>
							<title>SVGOUI GitHub Repo</title>
							<path
								fill="#1B1F23"
								fillRule="evenodd"
								d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0Z"
								clipRule="evenodd"
							/>
						</svg>
						Star
					</Button>
				</a>
				<ToggleGroup
					type="single"
					value={view}
					onValueChange={(value) => {
						if (value === "image" || value === "markup") {
							setView(value);
						}
					}}
				>
					<ToggleGroupItem value="image">Image</ToggleGroupItem>
					<ToggleGroupItem value="markup">Markup</ToggleGroupItem>
				</ToggleGroup>
			</div>
		</Card>
	);
};
