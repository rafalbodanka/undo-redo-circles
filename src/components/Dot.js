import React from "react";

const Dot = ({x, y, number}) => {
	return (
		<div
		className={`fixed bg-purple-900 w-8 h-8 rounded-full text-white flex justify-center items-center`}
		style={{ top: `${y}px`, left: `${x}px`, transform: 'translate(-50%, -50%)'}}
		>
			<span className="font-bold text-lg cursor-default" style={{ userSelect: "none" }}>{number}</span>
		</div>
)
}

export default Dot