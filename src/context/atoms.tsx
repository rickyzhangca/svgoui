import { Toast } from "@/components/toast";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { toast } from "sonner";
import { optimize } from "svgo/browser";
import demoSvg from "../assets/demo.svg?raw";
import { defaultPlugins } from "../meta/default-plugins";

export const showComparisonAtom = atomWithStorage("showComparison", false);

export const showSidebarAtom = atomWithStorage("showSidebar", true);

export const viewAtom = atomWithStorage<"image" | "markup">("view", "image");

export const shouldPrettifyMarkupAtom = atomWithStorage(
	"shouldPrettifyMarkup",
	true,
);
export const shouldUseMultipassAtom = atomWithStorage(
	"shouldUseMultipass",
	true,
);
export const pluginConfigAtom = atomWithStorage("config", defaultPlugins);

export const svgBeforeAtom = atomWithStorage("svgBefore", demoSvg);

export const svgAfterAtom = atom((get) => {
	const before = get(svgBeforeAtom);
	const config = get(pluginConfigAtom);

	const after = optimize(before, {
		js2svg: {
			indent: 2,
			pretty: get(shouldPrettifyMarkupAtom),
		},
		multipass: get(shouldUseMultipassAtom),
		plugins: config.filter((p) => p.enabled).map((p) => p.config),
	});

	toast.custom(() => <Toast type="optimized" />, { duration: 1000 });

	return after.data;
});
