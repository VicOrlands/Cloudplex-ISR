/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://cloudplexo.com",
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    transform: async (config, path) => {
        const isNewsPath = path.includes("/news");
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
            images: isNewsPath ? [{ loc: "https://cloudplexo.com/image.jpg" }] : [],
            news: isNewsPath
                ? {
                    title: "Article 1",
                    publicationName: "Google Scholar",
                    publicationLanguage: "en",
                    date: new Date(),
                }
                : undefined,
        }
    },
    additionalPaths: async (config) => [
        await config.transform(config, '/additional-page'),
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: 'test-bot',
                allow: ['/path', '/path-2'],
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/sub-path-1', '/path-2'],
            },
        ],
    },
}