export const utils = {
	checkAgent: () => {
		const userAgent: string = navigator.userAgent.toLowerCase();
		type BrowserType = "EDGE" | "WHALE" | "CHROME" | "FIREFOX" | "IE";
		let browser: BrowserType;

		if (userAgent.indexOf("edge") > -1) {
			browser = "EDGE";
		} else if (userAgent.indexOf("whale") > -1) {
			browser = "WHALE";
		} else if (userAgent.indexOf("chrome") > -1) {
			browser = "CHROME";
		} else if (userAgent.indexOf("firefox") > -1) {
			browser = "FIREFOX";
		} else {
			browser = "IE";
		}
		return browser;
	},
	isMobile: () => {
		if (window.innerWidth < 640) {
			return true;
		} else {
			return false;
		}
	},
};
