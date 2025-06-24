import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type MarkupProps = {
	svg: string;
	className?: string;
};

export const Markup = ({ svg, className }: MarkupProps) => {
	const [html, setHtml] = useState<string>("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let mounted = true;
		setLoading(true);
		(async () => {
			try {
				const { codeToHtml } = await import("shiki/bundle/web");
				const highlighted: string = await codeToHtml(svg, {
					lang: "html",
					theme: "github-dark",
				});
				if (mounted) {
					setHtml(highlighted);
					setLoading(false);
				}
			} catch (err) {
				console.error("failed to highlight svg", err);
				if (mounted) setLoading(false);
			}
		})();
		return () => {
			mounted = false;
		};
	}, [svg]);

	if (loading) {
		return (
			<div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
				generating markup…
			</div>
		);
	}

	return (
		<div
			className={cn(
				"overflow-auto h-full p-4 text-sm [&_pre]:whitespace-pre-wrap",
				className,
			)}
			// biome-ignore lint/security/noDangerouslySetInnerHtml: syntax highlight svg
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};
