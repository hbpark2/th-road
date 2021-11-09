export const utils = {
	checkAgent: () => {
		var userAgent = navigator.userAgent.toLowerCase();
		let browser;

		if (userAgent.indexOf("edge") > -1) {
			browser = "익스플로러 엣지";
		} else if (userAgent.indexOf("whale") > -1) {
			browser = "네이버 웨일";
		} else if (userAgent.indexOf("chrome") > -1) {
			browser = "크롬";
		} else if (userAgent.indexOf("firefox") > -1) {
			browser = "파이어폭스";
		} else {
			browser = "익스플로러";
		}
		return browser;
	},
};
