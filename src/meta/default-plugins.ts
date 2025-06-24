import { type PluginConfigUI, type PluginName, plugins } from "./plugins";

export const defaultPluginLabels: PluginName[] = [
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

export const defaultPlugins: PluginConfigUI[] = defaultPluginLabels
	.map((label) => {
		const config = plugins.find((p: PluginConfigUI) => p.name === label);
		return config;
	})
	.filter(isPlugin);
