import type { StrokeLinecap, StrokeLinejoin } from "./enums";

export interface User {
	id: string;
	name: string;
	currency: string;
	country: string;
}

export interface Params {
	id?: number;
}

export interface SvgInfo {
	[key: string]: {
		width: string;
		height: string;
		viewBox: string;
		fill: string;
		paths: {
			path_id: number;
			d: string;
			fill?: string;
			stroke?: string;
			strokeWidth?: string;
			strokeLinecap?: strokeLinecap;
			strokeLinejoin?: strokeLinejoin;
		}[];
	};
}
