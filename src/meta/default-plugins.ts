import { type PluginConfigUI, type PluginName, plugins } from "./plugins";

export const defaultPluginNames: PluginName[] = [
	"removeDoctype",
	"removeXMLProcInst",
	"removeComments",
	"removeMetadata",
	"removeEditorsNSData",
	"cleanupAttrs",
	"mergeStyles",
	"inlineStyles",
	"minifyStyles",
	"cleanupIds",
	"removeUselessDefs",
	"cleanupNumericValues",
	"convertColors",
	"removeUnknownsAndDefaults",
	"removeNonInheritableGroupAttrs",
	"removeUselessStrokeAndFill",
	"cleanupEnableBackground",
	"removeHiddenElems",
	"removeEmptyText",
	"convertShapeToPath",
	"convertEllipseToCircle",
	"moveElemsAttrsToGroup",
	"moveGroupAttrsToElems",
	"collapseGroups",
	"convertPathData",
	"convertTransform",
	"removeEmptyAttrs",
	"removeEmptyContainers",
	"removeUnusedNS",
	"mergePaths",
	"sortAttrs",
	"sortDefsChildren",
	"removeDesc",
];

const isPlugin = (p: PluginConfigUI | undefined): p is PluginConfigUI =>
	p !== undefined;

export const defaultPlugins: PluginConfigUI[] = defaultPluginNames
	.map((name) => {
		const config = plugins.find((p: PluginConfigUI) => p.name === name);
		return config;
	})
	.filter(isPlugin);
