import type { NodeProps } from "@xyflow/react";
import { memo } from "react";

type SvgNodeProps = NodeProps & {
	data: {
		svg: string;
	};
};

export const SvgNode = memo(({ data }: SvgNodeProps) => {
	return (
		<img
			src={`data:image/svg+xml;utf8,${encodeURIComponent(data.svg)}`}
			alt=""
		/>
	);
});
