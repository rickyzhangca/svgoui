export const ComparisonSeparator = () => {
	return (
		<div className="relative w-full h-1 bg-accent z-10">
			<div className="flex flex-col bg-accent text-primary px-4 py-2 gap-4 rounded-xl uppercase font-bold text-xs items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<div>Before</div>
				<div>After</div>
			</div>
		</div>
	);
};
