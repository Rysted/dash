import svg_info from "./svg_info.json";
import type { SvgInfo } from "../types";

const svgInfo: SvgInfo = svg_info;

const SvgIcon = ({ svgName }: { svgName: string }) => {
	const iconData = svgInfo[svgName];

	if (!iconData) {
		console.error(`SvgIcon: Icon '${svgName}' not found in svg_info.json`);
		return (
			<div>
				<p>
					Icon <span className="color-red">{`${svgName}`}</span> not found
				</p>
			</div>
		);
	}

	const { width, height, viewBox, fill, paths } = iconData;

	return (
		<svg
			width={width}
			height={height}
			viewBox={viewBox}
			fill={fill}
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>{svgName}</title>
			{paths.map((path) => (
				<path
					key={path.path_id}
					d={path.d}
					fill={path.fill ?? undefined}
					stroke={path.stroke ?? undefined}
					strokeWidth={path.strokeWidth ?? undefined}
					strokeLinecap={path.strokeLinecap ?? undefined}
					strokeLinejoin={path.strokeLinejoin ?? undefined}
				/>
			))}
		</svg>
	);
};

export default SvgIcon;
