import type { PluginConfig } from "svgo";

export type PluginConfigUI = {
	label: string;
	config: PluginConfig;
	enabled: boolean;
	desc: string;
};

export const defaultPlugins: PluginConfigUI[] = [
	{
		label: "Remove doctype",
		config: "removeDoctype",
		enabled: true,
		desc: "Removes the [Document Type Definition](https://en.wikipedia.org/wiki/Document_type_definition), also known as the DOCTYPE, from the document.",
	},
	{
		label: "Remove XML proc inst",
		config: "removeXMLProcInst",
		enabled: true,
		desc: `Removes the [XML declaration](https://developer.mozilla.org/docs/Web/XML/XML_introduction#xml_declaration) from the document.

The SVG language is based on XML, and is XML compatible, so editors often include an XML declaration.

An XML declaration is the line at the top of an XML file to indicate document meta-data, like encoding and which version of the XML specifications it adheres to.

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
\`\`\`

The XML declaration is optional in [XML 1.0](https://www.w3.org/TR/REC-xml/#sec-prolog-dtd), but mandatory in the [XML 1.1](https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-prolog-dtd). If the XML declaration is omitted, the document is assumed to follow the XML 1.0 specifications, which won't impact SVG documents.

It can be safely removed without impacting compatibility with SVG clients. However, some tools may fail to detect the MIME-type as \`image/svg+xml\` if this is removed.`,
	},
	{
		label: "Remove comments",
		config: "removeComments",
		enabled: true,
		desc: `Removes XML comments from the document.

XML comments are the content between the \`<!--\` and \`-->\` syntax, and do not effect rendering. From an optimization perspective, these can always be safely removed.

By default, this plugin ignores legal comments, also known as "special comments" or "protected comments". These are comments that start with an exclamation point (\`!\`) and are often used for legal information like copyright notices, licensing, or attribution.

For example, the following comment can be found in [Font Awesome Free](https://fontawesome.com/license/free) icons:

\`\`\`svg
<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
\`\`\`

Removing a comment like this may be considered a breach of the license terms, as Font Awesome Free is released under [CC-BY-4.0 (Creative Commons Attribution)](https://creativecommons.org/licenses/by/4.0/), but removing the comment would strip away that attribution.`,
	},
	{
		label: "Remove metadata",
		config: "removeMetadata",
		enabled: true,
		desc: `Removes the [\`<metadata>\`](https://developer.mozilla.org/docs/Web/SVG/Element/metadata) element from the document.

Metadata doesn't effect rendering. From an optimization perspective, these can always be safely removed.

There may be cases you'd want to disable this plugin, as some SVGs include copyright and licensing information in the metadata. In particular, documents that reference the [Creative Commons](http://creativecommons.org/ns#) namespace.`,
	},
	{
		label: "Remove editors NS data",
		config: "removeEditorsNSData",
		enabled: true,
		desc: `Removes all XML [namespaces](https://developer.mozilla.org/docs/Web/SVG/Namespaces_Crash_Course), elements, and attributes associated with popular vector editing software.

This plugin is completely safe to use before redistributing your SVG or incorporating it into a larger document.

The kinds of elements that are removed are usually editor specific workspace settings. You should keep a backup of your original SVG to preserve that meta-data and continue to maintain your SVG, while you serve the optimized version to users.

You can find a list of removed editor namespaces in [\`_collections.js\`](https://github.com/search?q=repo%3Asvg%2Fsvgo+editorNamespaces&type=code), which includes software like [Inkscape](https://inkscape.org/), Adobe Illustrator, and Figma.`,
	},
	{
		label: "Cleanup attrs",
		config: "cleanupAttrs",
		enabled: true,
		desc: `Removes redundant whitespaces from attribute values.

This will not modify the attribute keys, nor remove them if the value becomes empty after optimization.`,
	},
	{
		label: "Merge styles",
		config: "mergeStyles",
		enabled: true,
		desc: "Merge multiple `<style>` elements into one.",
	},
	{
		label: "Inline styles",
		config: "inlineStyles",
		enabled: true,
		desc: "Merges styles from `<style>` elements to the `style` attribute of matching elements.",
	},
	{
		label: "Minify styles",
		config: "minifyStyles",
		enabled: true,
		desc: "Minify `<style>` elements with [CSSO](https://github.com/css/csso).",
	},
	{
		label: "Cleanup IDs",
		config: "cleanupIds",
		enabled: true,
		desc: `Removes unused IDs, and minifies IDs that are referenced by other elements.

By default, we back off from removing and minifying IDs if a \`<script>\` or \`<style>\` element is present in the document. You can bypass this behavior by setting the \`force\` parameter to \`true\`.`,
	},
	{
		label: "Remove useless defs",
		config: "removeUselessDefs",
		enabled: true,
		desc: "Removes children of [`<defs>`](https://developer.mozilla.org/docs/Web/SVG/Element/defs) element that do not have an ID to reference.",
	},
	{
		label: "Cleanup numeric values",
		config: "cleanupNumericValues",
		enabled: true,
		desc: "Rounds numeric values, removes the unit when it's `px` as this is the default, and removes redundant spaces around and between numbers.",
	},
	{
		label: "Convert colors",
		config: "convertColors",
		enabled: true,
		desc: `Converts color references to the shortest equivalent.

Colors can be represented in various notations, the following table showcases some equivalent colors:

| Name     | rgb()              | #rrggbb   | #rgb   |
| -------- | ------------------ | --------- | ------ |
| \`red\`    | \`rgb(255, 0, 0)\`   | \`#ff0000\` | \`#f00\` |
| \`orange\` | \`rgb(255, 165, 0)\` | \`#ffa500\` |        |
| \`yellow\` | \`rgb(255, 255, 0)\` | \`#ffff00\` | \`#ff0\` |
| \`green\`  | \`rgb(0, 128, 0)\`   | \`#008000\` |        |
| \`blue\`   | \`rgb(0, 0, 255)\`   | \`#0000FF\` | \`#00f\` |
| \`purple\` | \`rgb(128, 0, 128)\` | \`#800080\` |        |

It makes no difference which format is received by a client, and each one has wide support across browsers and image viewing software.`,
	},
	{
		label: "Remove unknowns and defaults",
		config: "removeUnknownsAndDefaults",
		enabled: true,
		desc: `Removes unknown elements and attributes, as well as attributes that are set to their default value.
		
This can also remove defaults from the XML declaration if present in the document, namely [\`standalone\`](https://www.w3.org/TR/REC-xml/#sec-rmd) if it's set to \`no\`.`,
	},
	{
		label: "Remove non inheritable group attrs",
		config: "removeNonInheritableGroupAttrs",
		enabled: true,
		desc: "Removes non-inheritable [presentation attributes](https://developer.mozilla.org/docs/Web/SVG/Attribute/Presentation) from groups.",
	},
	{
		label: "Remove useless stroke and fill",
		config: "removeUselessStrokeAndFill",
		enabled: true,
		desc: `Removes useless \`stroke\` and \`fill\` attributes.

Assigning these attributes can sometimes change nothing in the document. For example, in most cases assigning a \`stroke\` color is redundant if the elements [\`stroke-width\`](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-width) or [\`stroke-opacity\`](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-opacity) is \`0\`.`,
	},
	{
		label: "Cleanup enable background",
		config: "cleanupEnableBackground",
		enabled: true,
		desc: `Cleans up [\`enable-background\`](https://developer.mozilla.org/docs/Web/SVG/Attribute/enable-background), unless the document uses [\`<filter>\`](https://developer.mozilla.org/docs/Web/SVG/Element/filter) elements.

Only cleans up attribute values and inline-styles, but does not affect stylesheets in [\`<style>\`](https://developer.mozilla.org/docs/Web/SVG/Element/style) nodes.

This plugin will:

- Drop \`enable-background\` when the width and height values match the width and height of the \`<svg>\` node.
- Replace the value with \`new\` when the width and height values match the width and height of a \`<mask>\` or \`<pattern>\` node.`,
	},
	{
		label: "Remove hidden elements",
		config: "removeHiddenElems",
		enabled: true,
		desc: `Remove hidden or invisible elements from the document. This can be elements with 0 width and height defined, or elements that were just hidden with CSS.

This plugin ignores non-rendering elements, such as [\`<clipPath>\`](https://developer.mozilla.org/docs/Web/SVG/Element/clipPath) and [\`<linearGradient>\`](https://developer.mozilla.org/docs/Web/SVG/Element/linearGradient), which still apply regardless of styles, unless they are unused.

Refer to the parameters for the conditions this plugin looks for. All checks enabled by default.`,
	},
	{
		label: "Remove empty text",
		config: "removeEmptyText",
		enabled: true,
		desc: "Removes empty [`<text>`](https://developer.mozilla.org/docs/Web/SVG/Element/text) and [`<tspan>`](https://developer.mozilla.org/docs/Web/SVG/Element/tspan) elements, and [`<tref>`](https://developer.mozilla.org/docs/Web/SVG/Element/tref) elements that don't reference another node in the document.",
	},
	{
		label: "Convert shape to path",
		config: "convertShapeToPath",
		enabled: true,
		desc: "Convert basic shapes to [`<path>`](https://developer.mozilla.org/docs/Web/SVG/Element/path) elements.",
	},
	{
		label: "Convert ellipse to circle",
		config: "convertEllipseToCircle",
		enabled: true,
		desc: "Convert non-eccentric [`<ellipse>`](https://developer.mozilla.org/docs/Web/SVG/Element/ellipse) elements to [`<circle>`](https://developer.mozilla.org/docs/Web/SVG/Element/circle) elements.",
	},
	{
		label: "Move elements attrs to group",
		config: "moveElemsAttrsToGroup",
		enabled: true,
		desc: "Move an elements attributes to their enclosing group.",
	},
	{
		label: "Move group attrs to elements",
		config: "moveGroupAttrsToElems",
		enabled: true,
		desc: "Move a groups attributes to their child elements.",
	},
	{
		label: "Collapse groups",
		config: "collapseGroups",
		enabled: true,
		desc: `Finds groups that effectively do nothing and flattens them, preserving the contents of the groups.

Groups can be formed using the [\`<g>\`](https://developer.mozilla.org/docs/Web/SVG/Element/g) element. They're used for organizing the document, or applying [presentation attributes](https://developer.mozilla.org/docs/Web/SVG/Attribute/Presentation) to all children contained in a group.
`,
	},
	{
		label: "Convert path data",
		config: "convertPathData",
		enabled: true,
		desc: `Optimize path commands found in \`<path>\`, \`<glyph>\`, and \`<missing-glyph>\` elements. Path commands are the syntax used in the \`d\` attribute, each character represents an instruction to draw paths.
		
		This plugin uses multiple techniques to either reduce the number of instructions or reduce the attribute length:

- Convert between relative or absolute coordinates, whichever is shortest.
- Convert between commands. For example, a Bézier curve that behaves like a straight line might as well use a line instruction.
- Remove redundant commands. For example, a command that moves to the current position can be removed.
- Trim redundant delimiters and leading zeros.
- Round numeric values using conventional rounding rules.

You can read more about the plugins capabilities by going through the individual parameters.`,
	},
	{
		label: "Convert transform",
		config: "convertTransform",
		enabled: true,
		desc: "Collapse multiple transforms into one, convert matrices to the short aliases, and much more.",
	},
	{
		label: "Remove empty attrs",
		config: "removeEmptyAttrs",
		enabled: true,
		desc: `Remove empty attributes from elements in the document.

This ignores the following attributes, as they're used for conditional rendering:

- \`requiredFeatures\`
- \`requiredExtensions\`
- \`systemLanguage\``,
	},
	{
		label: "Remove empty containers",
		config: "removeEmptyContainers",
		enabled: true,
		desc: `Remove container elements in the document that have no children or meaningful attributes, excluding the \`<svg>\` element which is ignored.

A container, as defined in the [SVG specifications](https://www.w3.org/TR/SVG11/intro.html#TermContainerElement), is an SVG element that can have graphical child elements. Container elements include:

- [\`<a>\`](https://developer.mozilla.org/docs/Web/SVG/Element/a)
- [\`<defs>\`](https://developer.mozilla.org/docs/Web/SVG/Element/defs)
- [\`<glyph>\`](https://developer.mozilla.org/docs/Web/SVG/Element/glyph)
- [\`<g>\`](https://developer.mozilla.org/docs/Web/SVG/Element/g)
- [\`<marker>\`](https://developer.mozilla.org/docs/Web/SVG/Element/marker)
- [\`<mask>\`](https://developer.mozilla.org/docs/Web/SVG/Element/mask)
- [\`<missing-glyph >\`](https://developer.mozilla.org/docs/Web/SVG/Element/missing-glyph)
- [\`<pattern>\`](https://developer.mozilla.org/docs/Web/SVG/Element/pattern)
- [\`<svg>\`](https://developer.mozilla.org/docs/Web/SVG/Element/svg)
- [\`<switch>\`](https://developer.mozilla.org/docs/Web/SVG/Element/switch)
- [\`<symbol>\`](https://developer.mozilla.org/docs/Web/SVG/Element/symbol)`,
	},
	{
		label: "Remove unused NS",
		config: "removeUnusedNS",
		enabled: true,
		desc: "Removes unused namespace declarations from the document.",
	},
	{
		label: "Merge paths",
		config: "mergePaths",
		enabled: true,
		desc: "Merge multiple paths into one.",
	},
	{
		label: "Sort attrs",
		config: "sortAttrs",
		enabled: true,
		desc: `Sorts attributes in all elements in the document. This does not reduce the size of the SVG, but improves readability and _may_ improve how compression algorithms perform on it.

Here is a demonstration of SVGs that have been gzipped by [NGINX](https://nginx.org/en/docs/http/ngx_http_gzip_module.html) using the default compression level of 1.

| SVG                                                                                           | Unsorted ¹ | Sorted ²  | Reduced (%)    |
| --------------------------------------------------------------------------------------------- | ---------- | --------- | -------------- |
| [Arch Linux Logo](https://archlinux.org/art/)                                                 | 2.61 kB    | 2.61 kB   | 0 kB (0%)      |
| [Blobs](https://gitlab.gnome.org/GNOME/gnome-backgrounds/-/blob/main/backgrounds/blobs-d.svg) | 13.89 kB   | 13.88 kB  | 0.01 kB (0.1%) |
| [Isometric Madness](https://inkscape.org/~Denis_Kuznetsky/%E2%98%85isometric-madness)         | 123.87 kB  | 120.09 kB | 3.78 kB (3.1%) |
| [tldr-pages Banner](https://github.com/tldr-pages/tldr/blob/main/images/banner.svg)           | 791 B      | 786 B     | 5 B (0.6%)     |
| [Wikipedia Logo](https://en.wikipedia.org/wiki/File:Wikipedia-logo-v2.svg)                    | 53.96 kB   | 53.87 kB  | 0.09 kB (0.2%) |

¹ Uses the default plugins preset excluding \`sortAttr\` and \`sortDefsChildren\`.
² Uses the default plugins preset as-is.`,
	},
	{
		label: "Sort defs' children",
		config: "sortDefsChildren",
		enabled: true,
		desc: `Sorts all children in the \`<defs>\` element. This does not reduce the size of the SVG, but _may_ improve how compression algorithms perform on it.

To group similar nodes together, elements are sorted by the following attributes:

- Frequency
- Element name length
- Element name

Here is a demonstration of SVGs that have been gzipped by [NGINX](https://nginx.org/en/docs/http/ngx_http_gzip_module.html) using the default compression level of 1.

| SVG                                                                                           | Unsorted ¹ | Sorted ²  | Reduced (%)    |
| --------------------------------------------------------------------------------------------- | ---------- | --------- | -------------- |
| [Arch Linux Logo](https://archlinux.org/art/)                                                 | 2.61 kB    | 2.61 kB   | 0 kB (0%)      |
| [Blobs](https://gitlab.gnome.org/GNOME/gnome-backgrounds/-/blob/main/backgrounds/blobs-d.svg) | 13.89 kB   | 13.88 kB  | 0.01 kB (0.1%) |
| [Isometric Madness](https://inkscape.org/~Denis_Kuznetsky/%E2%98%85isometric-madness)         | 123.87 kB  | 120.09 kB | 3.78 kB (3.1%) |
| [tldr-pages Banner](https://github.com/tldr-pages/tldr/blob/main/images/banner.svg)           | 791 B      | 786 B     | 5 B (0.6%)     |
| [Wikipedia Logo](https://en.wikipedia.org/wiki/File:Wikipedia-logo-v2.svg)                    | 53.96 kB   | 53.87 kB  | 0.09 kB (0.2%) |

¹ Uses the default plugins preset excluding \`sortAttr\` and \`sortDefsChildren\`.
² Uses the default plugins preset as-is.`,
	},
	{
		label: "Remove desc",
		config: "removeDesc",
		enabled: true,
		desc: `Removes the [\`<desc>\`](https://developer.mozilla.org/docs/Web/SVG/Element/desc) element from the document in one of the following conditions:

- The \`<desc>\` element is empty.
- The \`<desc>\` element appears to only contain editor attribution.

This plugin does not remove the \`<desc>\` indiscriminately by default, as it is a crucial aspect of accessibility for users of assistive technologies.`,
	},
];
