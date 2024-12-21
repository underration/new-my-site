"use client";
import { useEffect, useRef } from "react";

const PinAnimation = () => {
	const pinRef = useRef(null);

	

	return (
		<section>
			<div className="h-screen bg-blue w-full flex justify-center items-center">
				<p className="text-[100px]">section 1</p>
			</div>
			<div ref={pinRef} className="h-screen w-full bg-dark flex items-center justify-center">
				<p className="text-[100px]">section 2</p>
			</div>
			<div className="h-screen bg-green w-full flex justify-center items-center">
				<p className="text-[100px]">section 3</p>
			</div>
		</section>
	);
};

export default PinAnimation;

