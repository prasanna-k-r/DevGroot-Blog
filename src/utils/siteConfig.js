module.exports = {
    siteUrl: `https://devgroot.netlify.app/`, // Site domain. Do not include a trailing slash!

    postsPerPage: 6, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    title: `DevGroot`,
    siteTitleMeta: `DevGroot`, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `DevGroot blog`, // This allows an alternative site description for meta data for pages.
    siteTwitterHandle: `@prasannakr1998`,
    siteFacebookHandle: `k.prasanna.9`,
    language: `en`,

    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image

    shortTitle: `Personal Blog`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#15171A`, // Used for Offline Manifest
    cover_image: ``,

    logo: `/images/logo.png`,

    navigation: [
        {
            label: `Home`,
            url: `/`,
        },
        {
            label: `About me`,
            url: `/about`,
        },
    ],

    googleAnalyticsId: "UA-174220330-1", // ADD_COMPLETE_TRACKING_ID => UA-151385213-1

    disqusShortname: "devgroot" // ADD_SHORT_NAME => https://help.disqus.com/en/articles/1717111-what-s-a-shortname
}
