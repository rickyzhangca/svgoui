import type { PluginConfigUI } from "@/meta/default-plugins";
import { CircleQuestionMarkIcon } from "lucide-react";

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
	return (
		<div className="flex items-center space-x-2">
			<Switch
				checked={plugin.enabled}
				onCheckedChange={(checked) =>
					setPlugin({ ...plugin, enabled: checked })
				}
				id={plugin.label}
			/>
			<Label htmlFor={plugin.label}>{plugin.label}</Label>
			<HoverCard openDelay={100} closeDelay={100}>
				<HoverCardTrigger>
					<CircleQuestionMarkIcon className="size-4 min-w-4 opacity-50" />
				</HoverCardTrigger>
				<HoverCardContent className="px-5 w-fit max-w-[calc(100vw-1rem)]">
					<p className="prose">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								a: ({ node, ...props }) => <a {...props} target="_blank" />,
							}}
						>
							{plugin.desc}
						</ReactMarkdown>
					</p>
				</HoverCardContent>
			</HoverCard>
		</div>
	);
};
