import ImgCenter from "../../../Assets/img/work-center.jpg";
import Img3Left1 from "../../../Assets/img/work-3left-1.png";
import Img3Left2 from "../../../Assets/img/work-3left-2.png";
import Img2Left1 from "../../../Assets/img/work-2left-1.png";
import Img2Left2 from "../../../Assets/img/work-2left-2.png";
import Img2Left3 from "../../../Assets/img/work-2left-3.png";
import Img1Left1 from "../../../Assets/img/work-1left-1.png";
import Img1Left2 from "../../../Assets/img/work-1left-2.png";
import Img3Right1 from "../../../Assets/img/work-3right-1.png";
import Img3Right2 from "../../../Assets/img/work-3right-2.png";
import Img2Right1 from "../../../Assets/img/work-2right-1.png";
import Img2Right2 from "../../../Assets/img/work-2right-2.png";
import Img2Right3 from "../../../Assets/img/work-2right-3.png";
import Img1Right1 from "../../../Assets/img/work-1right-1.png";
import Img1Right2 from "../../../Assets/img/work-1right-2.png";

export const workArr = [
	{
		transition: 0,
		baseTop: 56,
		center: true,
		image: [
			{ src: Img3Left1, alt: "" },
			{ src: Img3Left2, alt: "" },
		],
	},
	{
		transition: 0.8,
		baseTop: 58,
		center: false,
		image: [
			{ src: Img2Left1, alt: "" },
			{ src: Img2Left2, alt: "" },
			{ src: Img2Left3, alt: "" },
		],
	},
	{
		transition: 0.5,
		baseTop: 58,
		center: false,
		image: [
			{ src: Img1Left1, alt: "" },
			{ src: Img1Left2, alt: "" },
		],
	},
	{
		transition: 0,
		baseTop: 48,
		center: true,
		image: [{ src: ImgCenter, alt: "" }],
	},
	{
		transition: 0.6,
		baseTop: 54,
		center: false,
		image: [
			{ src: Img1Right1, alt: "" },
			{ src: Img1Right2, alt: "" },
		],
	},
	{
		transition: 0.8,
		baseTop: 65,
		center: false,
		image: [
			{ src: Img2Right1, alt: "" },
			{ src: Img2Right2, alt: "" },
			{ src: Img2Right3, alt: "" },
		],
	},
	{
		transition: 0,
		baseTop: 56,
		center: true,
		image: [
			{ src: Img3Right1, alt: "" },
			{ src: Img3Right2, alt: "" },
		],
	},
];
