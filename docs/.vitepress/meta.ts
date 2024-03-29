/** basic site info */
export const name = "ilosrim";
export const site = "https://ilosrim.uz";
export const siteCN = "https://ilosrim.uz/uz/";
export const logo =
	"https://raw.githubusercontent.com/ilosrim/blog/main/docs/public/logo.png";
export const keywords = [
	"javascript",
	"typescript",
	"angular",
	"reactjs",
	"nextjs",
];
export const descriptionEN = "Website with news in programming";
export const descriptionUZ = "Dasturlash yangiliklari veb-sayti";

/** social links */
export const ogTitle = "ilosrim";
export const ogImg =
	"https://raw.githubusercontent.com/ilosrim/blog/main/docs/public/logo.png";
export const ogImgUZ =
	"https://raw.githubusercontent.com/ilosrim/blog/main/docs/public/logo.png";
export const github = "https://github.com/ilosrim";
export const twitter = "https://twitter.com/ilosrim";

/** site search console  */
export const googleVerify = "j6cNWewUj3QcJBpdv48t67XoDxdlKPQ6dwKgXg9Nigo";
export const baiduVerify = "code-GZMUSi21Xe";

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp(
	"^https://(((raw|user-images|camo).githubusercontent.com))/.*",
	"i"
);
export const googleFontRegex = new RegExp(
	"^https://fonts.googleapis.com/.*",
	"i"
);
export const googleStaticFontRegex = new RegExp(
	"^https://fonts.gstatic.com/.*",
	"i"
);
export const jsdelivrCDNRegex = new RegExp("^https://cdn.jsdelivr.net/.*", "i");
