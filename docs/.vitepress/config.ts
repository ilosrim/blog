import { getPosts, getPostLength } from "./utils/page";
import { SearchPlugin } from "vitepress-plugin-search";

async function config() {
	return {
		title: "ilosrim",
		description: "ilosrim web page",
		base: "/",
		head: head(),
		lang: "en-US",
		lastUpdated: true,

		themeConfig: {
			posts: await getPosts(),
			pageSize: 5,
			postLength: await getPostLength(),
			// logo: "/logo.svg",
			siteTitle: "ilosrim",
			outlineTitle: "Outline title",
			repo: "ilosrim/blog",
			nav: nav(),
			// sidebar: {
			// 	"/posts/": sidebarArticles(),
			// },
			lastUpdatedText: "Last updated",
			socialLinks: [
				{ icon: "github", link: "https://github.com/ilosrim" },
				{ icon: "twitter", link: "https://twitter.com/ilosrim" },
			],
			editLink: {
				pattern: "https://github.com/ilosrim/blog/blob/main/docs/:path",
				text: "Edit this page on GitHub",
			},
			docFooter: {
				prev: "Prev",
				next: "Next",
			},
			footer: {
				message: "Released under the MIT License.",
				copyright: `Copyright © 2022-${new Date().getFullYear()} ilosrim`,
			},
		},
		vite: {
			plugins: [SearchPlugin()],
			build: {
				ssr: false,
			},
		},
		srcExclude: ["README.md"],
		markdown: {
			// shiki code theme
			theme: {
				light: "vitesse-light",
				dark: "vitesse-dark",
			},
		},
	};
}

function head() {
	return [
		["link", { rel: "icon", type: "image/ico", href: "/favicon.ico" }],
		// ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
		[
			"meta",
			{
				name: "viewport",
				content:
					"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
			},
		],
		// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
		[
			"meta",
			{
				property: "Content-Security-Policy",
				content: "upgrade-insecure-requests",
			},
		],
		["meta", { name: "author", content: "ilosrim.uz" }],
		["meta", { property: "og:title", content: "Home" }],
	];
}

function nav() {
	return [
		{ text: "Archive", link: "/pages/archive" },
		{ text: "Tag", link: "/pages/tags" },
		// { text: "Category", link: "/pages/category" },
		{ text: "Contact", link: "/pages/contact" },
	];
}

function sidebarArticles() {
	return [
		{
			text: "Menu",
			collapsible: true,
			collapsed: true,
			items: [
                {
                    text: "- Nvim + LazyVim Laravel Development Environment",
                    link: "/posts/2024-09-01-nvim-lazyvim-laravel-development-environment.md",
                },
				{
					text: "- Containerization of Laravel PHP8.3-fpm, MySQL, Nginx in Docker",
					link: "/posts/2024-07-17-containerization-of-laravel.md",
				},
				{
					text: "- How to Setup Yii2 Project with Nginx on Ubuntu",
					link: "/posts/2024-06-07-how-to-setup-yii2-project-with-nginx-on-ubuntu.md",
				},
				{
					text: "- Internal server error SQLSTATE[22001]",
					link: "/posts/2024-05-20-internal-server-error.md",
				},
				{
					text: "- Use Gitalk in Vitepress",
					link: "/posts/2023-05-06-use-gitalk-in-vitepress",
				},
				{
					text: "- Creating markdown blog with NextJS",
					link: "/posts/2022-03-07-creating-markdown-blog-with-nextjs",
				},
				{
					text: "- How to build modern docs with vitepress",
					link: "/posts/2022-01-05-how-to-build-modern-docs-with-vitepress",
				},
			],
		},
	];
}

export default config();
