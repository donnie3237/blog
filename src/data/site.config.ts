interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'dose', // Site author
	title: 'Dose', // Site title.
	description: 'DXSE Blog is a website that covers topics such as programming, energy, and environment. It features articles written by Dose creater of Dose3 and many more, a passionate coder and blogger who shares his insights and opinions on various technologies and issues. Whether you are interested in learning about server API, wireless energy, nuclear fusion, or the end of humanity, DXSE Blog has something for you. Visit DXSE Blog today and discover a world of knowledge and inspiration.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
