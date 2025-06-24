import type { Node } from "@xyflow/react";
import { ReactFlow } from "@xyflow/react";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { svgAfterAtom } from "../context/atoms";
import { SvgNode } from "./svg-node";

export const Canvas = () => {
	const [svg] = useAtom(svgAfterAtom);

	const nodes: Node[] = useMemo(
		() => [
			{
				id: "svg",
				type: "svg",
				data: { svg },
				position: { x: 0, y: 0 },
				draggable: false,
				selectable: false,
			},
		],
		[svg],
	);

	return (
		<ReactFlow
			nodes={nodes}
			nodeTypes={{ svg: SvgNode }}
			proOptions={{
				hideAttribution: true,
			}}
			fitView
			fitViewOptions={{
				padding: 2,
			}}
		/>
	);
};
