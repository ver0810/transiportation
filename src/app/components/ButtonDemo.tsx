'use cilent';
export function ButtonDemo({ className="", children }: any) {

	return (
		<button className={`${className} bg-[#14dcdf] px-4 py-1 rounded-md text-[14px]`}>
			{ children }
		</button>
	);
}