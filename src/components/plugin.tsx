import { CircleQuestionMarkIcon } from "lucide-react";

import { descriptions } from "@/meta/descriptions";
import type { PluginConfigUI } from "@/meta/plugins";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Switch } from "./animate-ui/radix/switch";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Label } from "./ui/label";

type PluginProps = {
	plugin: PluginConfigUI;
	setPlugin: (plugin: PluginConfigUI) => void;
};

export const Plugin = ({ plugin, setPlugin }: PluginProps) => {
	const description = descriptions[plugin.name];

	return (
		<div className="flex items-center gap-1.5">
			<Switch
				checked={plugin.enabled}
				onCheckedChange={(checked) =>
					setPlugin({ ...plugin, enabled: checked })
				}
				id={plugin.label}
			/>
			<Label htmlFor={plugin.label}>{plugin.label}</Label>
			{description && (
				<HoverCard openDelay={100} closeDelay={100}>
					<HoverCardTrigger>
						<CircleQuestionMarkIcon className="size-4 min-w-4 opacity-50" />
					</HoverCardTrigger>
					<HoverCardContent className="px-5 prose w-fit md:max-w-[600px] xl:max-w-[800px] max-w-[calc(100vw-1rem)]">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								a: ({ node, ...props }) => <a {...props} target="_blank" />,
							}}
						>
							{description}
						</ReactMarkdown>
					</HoverCardContent>
				</HoverCard>
			)}
		</div>
	);
};
