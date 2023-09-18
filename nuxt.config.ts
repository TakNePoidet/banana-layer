// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		// https://nuxt.studio
		'@nuxthq/studio',
		// // https://content.nuxtjs.org
		'@nuxt/content',
		// https://nuxtseo.com/sitemap
		'nuxt-simple-sitemap',
		// https://nuxtseo.com/robots
		'nuxt-simple-robots',
		// https://github.com/TakNePoidet/nuxt-yandex-metrika
		'nuxt-yandex-metrika'
	],
	devtools: { enabled: true },
	content: {
		documentDriven: true
	},
	typescript: {
		includeWorkspace: true
	},
	robots: {
		disallow: ['/api']
	},
	site: {
		url: import.meta.env.NUXT_PUBLIC_SITE_URL
	}
});
