import sidebar from './sidebar'
import head from './head'
import nav from './nav'
import markdown from './markdown'
// import lang from './lang'
import { footer } from './footer'
const config = {
	title: 'Printf200论',
	description: '一起学习，一起努力',
	head,
	markdown,
	themeConfig: {
		search: {
			provider: 'local',
		},
		sidebar,
		nav,
		// demoblock: lang,
		logo: 'logo.png', // 网站nav栏logo
		lastUpdated: 'Last Updated',
		author: 'printf200', //  作者
		authorAvatar: 'logo.png', //  作者头像
		record: '辽ICP备19004191号-2',
		footer: footer,
		editLink: {
			pattern: 'https://github.com/printf200/printf200-blog/tree/master',
			text: 'Edit this page on GitHub',
		},
	},
	// appearance: 'dark', // dark theme
}

export default config
