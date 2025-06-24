import { defaultPlugins } from "@/meta/default-plugins";
import { useAtom } from "jotai";
import { PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-react";
import { Drawer } from "vaul";
import {
	pluginConfigAtom,
	shouldPrettifyMarkupAtom,
	shouldUseMultipassAtom,
	showSidebarAtom,
} from "../context/atoms";
import { Switch } from "./animate-ui/radix/switch";
import { Plugin } from "./plugin";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export const Sidebar = () => {
	const [open, setOpen] = useAtom(showSidebarAtom);
	const [config, setConfig] = useAtom(pluginConfigAtom);
	const [shouldUseMultipass, setShouldUseMultipass] = useAtom(
		shouldUseMultipassAtom,
	);
	const [shouldPrettifyMarkup, setShouldPrettifyMarkup] = useAtom(
		shouldPrettifyMarkupAtom,
	);

	return (
		<Drawer.Root
			direction="right"
			modal={false}
			open={open}
			onOpenChange={setOpen}
		>
			<Card className="absolute top-4 right-4 p-2">
				<Drawer.Trigger asChild className={open ? "hidden" : ""}>
					<Button variant="outline">
						<PanelRightOpenIcon className="size-4 min-w-4" />
						Show configs
					</Button>
				</Drawer.Trigger>
			</Card>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40" />
				<Drawer.Content
					className="right-2  top-2 bottom-2 fixed z-10 outline-none w-[360px] flex"
					style={
						{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
					}
				>
					<div
						data-vaul-no-drag="true"
						onPointerDownCapture={(e) =>
							e.nativeEvent.stopImmediatePropagation()
						}
						className="bg-zinc-50 flex flex-col !select-text h-full w-full grow rounded-2xl shadow-2xl"
					>
						<div className="flex justify-between gap-2 items-center p-4">
							<Drawer.Title className="font-medium">Configs</Drawer.Title>
							<Button
								size="icon"
								variant="outline"
								onClick={() => setOpen(false)}
							>
								<PanelRightCloseIcon className="size-4 min-w-4 " />
							</Button>
						</div>
						<ScrollArea className="px-4 flex rounded-br-2xl flex-col overflow-y-auto gap-4">
							<Drawer.Description className="sr-only">
								SVGO options
							</Drawer.Description>
							<div className="text-zinc-600 mb-2 flex items-start flex-col gap-3 pb-16">
								<div className="flex items-center space-x-2">
									<Switch
										id="should-use-multipass"
										checked={shouldUseMultipass}
										onCheckedChange={setShouldUseMultipass}
									/>
									<Label htmlFor="should-use-multipass">Use multipass</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Switch
										id="should-prettify-markup"
										checked={shouldPrettifyMarkup}
										onCheckedChange={setShouldPrettifyMarkup}
									/>
									<Label htmlFor="should-prettify-markup">
										Prettify markup
									</Label>
								</div>
								<Separator />
								{config.map((plugin) => (
									<Plugin
										key={plugin.label}
										plugin={plugin}
										setPlugin={(plugin) =>
											setConfig((prev) =>
												prev.map((p) =>
													p.label === plugin.label ? plugin : p,
												),
											)
										}
									/>
								))}
							</div>
						</ScrollArea>
						<div className="px-4 absolute pb-4 bottom-0 pt-8 z-10 inset-x-0 bg-gradient-to-t from-white to-white/0 rounded-b-2xl">
							<Button
								variant="outline"
								onClick={() => {
									setConfig(defaultPlugins);
									setShouldUseMultipass(true);
									setShouldPrettifyMarkup(true);
								}}
								className="w-full"
							>
								Reset to default
							</Button>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
};
