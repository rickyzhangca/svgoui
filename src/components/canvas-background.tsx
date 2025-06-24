export const CanvasBackground = () => {
	return (
		<>
			<div
				className="absolute inset-0 h-full w-full opacity-5 bg-[auto_50px]"
				style={{
					backgroundImage:
						"url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%20200%20200%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20d%3D%22M0%200h100v100H0z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%20100h100v100H0z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20d%3D%22M100%20100h100v100H100z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M100%200h100v100H100z%22%2F%3E%0A%3C%2Fsvg%3E)",
				}}
			/>
			<div className="absolute inset-0 h-full w-full bg-black/30" />
		</>
	);
};
