import type { PluginConfig } from "svgo";
import { builtinPlugins } from "svgo";

export const PluginNames = builtinPlugins.map((p) => p.name);

export type PluginName = (typeof PluginNames)[number];

export type PluginConfigUI = {
	label: string;
	name: PluginName;
	config: PluginConfig;
	enabled: boolean;
};

export const plugins: PluginConfigUI[] = [
	{
		label: "Remove doctype",
		name: "removeDoctype",
		config: "removeDoctype",
		enabled: true,
	},
	{
		label: "Remove XML proc inst",
		name: "removeXMLProcInst",
		config: "removeXMLProcInst",
		enabled: true,
	},
	{
		label: "Remove comments",
		name: "removeComments",
		config: "removeComments",
		enabled: true,
	},
	{
		label: "Remove metadata",

		name: "removeMetadata",
		config: "removeMetadata",
		enabled: true,
	},
	{
		label: "Remove editors NS data",
		name: "removeEditorsNSData",
		config: "removeEditorsNSData",
		enabled: true,
	},
	{
		label: "Cleanup attrs",
		name: "cleanupAttrs",
		config: "cleanupAttrs",
		enabled: true,
	},
	{
		label: "Merge styles",
		name: "mergeStyles",
		config: "mergeStyles",
		enabled: true,
	},
	{
		label: "Inline styles",
		name: "inlineStyles",
		config: "inlineStyles",
		enabled: true,
	},
	{
		label: "Minify styles",
		name: "minifyStyles",
		config: "minifyStyles",
		enabled: true,
	},
	{
		label: "Cleanup IDs",
		name: "cleanupIds",
		config: "cleanupIds",
		enabled: true,
	},
	{
		label: "Remove useless defs",
		name: "removeUselessDefs",
		config: "removeUselessDefs",
		enabled: true,
	},
	{
		label: "Cleanup numeric values",
		name: "cleanupNumericValues",
		config: "cleanupNumericValues",
		enabled: true,
	},
	{
		label: "Convert colors",
		name: "convertColors",
		config: "convertColors",
		enabled: true,
	},
	{
		label: "Convert colors",
		name: "convertColors",
		config: "convertColors",
		enabled: true,
	},
	{
		label: "Remove unknowns and defaults",
		name: "removeUnknownsAndDefaults",
		config: "removeUnknownsAndDefaults",
		enabled: true,
	},
	{
		label: "Remove non inheritable group attrs",
		name: "removeNonInheritableGroupAttrs",
		config: "removeNonInheritableGroupAttrs",
		enabled: true,
	},
	{
		label: "Remove useless stroke and fill",
		name: "removeUselessStrokeAndFill",
		config: "removeUselessStrokeAndFill",
		enabled: true,
	},
	{
		label: "Cleanup enable background",
		name: "cleanupEnableBackground",
		config: "cleanupEnableBackground",
		enabled: true,
	},
	{
		label: "Remove hidden elements",
		name: "removeHiddenElems",
		config: "removeHiddenElems",
		enabled: true,
	},
	{
		label: "Remove empty text",
		name: "removeEmptyText",
		config: "removeEmptyText",
		enabled: true,
	},
	{
		label: "Convert shape to path",
		name: "convertShapeToPath",
		config: "convertShapeToPath",
		enabled: true,
	},
	{
		label: "Convert ellipse to circle",
		name: "convertEllipseToCircle",
		config: "convertEllipseToCircle",
		enabled: true,
	},
	{
		label: "Move elements attrs to group",
		name: "moveElemsAttrsToGroup",
		config: "moveElemsAttrsToGroup",
		enabled: true,
	},
	{
		label: "Move group attrs to elements",
		name: "moveGroupAttrsToElems",
		config: "moveGroupAttrsToElems",
		enabled: true,
	},
	{
		label: "Collapse groups",
		name: "collapseGroups",
		config: "collapseGroups",
		enabled: true,
	},
	{
		label: "Convert path data",
		name: "convertPathData",
		config: "convertPathData",
		enabled: true,
	},
	{
		label: "Convert transform",
		name: "convertTransform",
		config: "convertTransform",
		enabled: true,
	},
	{
		label: "Remove empty attrs",
		name: "removeEmptyAttrs",
		config: "removeEmptyAttrs",
		enabled: true,
	},
	{
		label: "Remove empty containers",
		name: "removeEmptyContainers",
		config: "removeEmptyContainers",
		enabled: true,
	},
	{
		label: "Remove unused NS",
		name: "removeUnusedNS",
		config: "removeUnusedNS",
		enabled: true,
	},
	{
		label: "Merge paths",
		name: "mergePaths",
		config: "mergePaths",
		enabled: true,
	},
	{
		label: "Sort attrs",
		name: "sortAttrs",
		config: "sortAttrs",
		enabled: true,
	},
	{
		label: "Sort defs' children",
		name: "sortDefsChildren",
		config: "sortDefsChildren",
		enabled: true,
	},
	{
		label: "Remove desc",
		name: "removeDesc",
		config: "removeDesc",
		enabled: true,
	},
	{
		label: "Sort defs' children",
		name: "sortDefsChildren",
		config: "sortDefsChildren",
		enabled: true,
	},
	{
		label: "Remove desc",
		name: "removeDesc",
		config: "removeDesc",
		enabled: true,
	},
];
