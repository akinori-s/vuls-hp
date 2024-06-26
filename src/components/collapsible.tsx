import React, { useState, useRef } from 'react';

const Collapsible: React.FC<{ title: string, children: any}> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	const toggleCollapse = () => {
		setIsOpen(!isOpen); // Toggle the state which triggers UI update
	};

	return (
		<div className={`${isOpen ? 'mb-4' : ''} border-t-2`}>
			<button onClick={toggleCollapse} className={`w-full flex justify-between items-center text-left  p-4 text-[#333333] font-medium`}>
				{title}
				<div>
					{isOpen ?
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
					:
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
					}
				</div>
			</button>
			<div
				ref={contentRef}
				className={`px-4 text-[#333333] transition-height duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
				style={{ transitionProperty: 'max-height', transitionDuration: '300ms', transitionTimingFunction: 'ease-in-out' }}
			>
				{children}
			</div>
		</div>
	);
};

export default Collapsible;
