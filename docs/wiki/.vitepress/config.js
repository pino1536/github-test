export default {
  lang: 'en-US',
  title: "Rustycore",
  description: "Rustycore Documentation",
  lastUpdated: false,
  head: [['link', { rel: 'icon', href: 'assets/logo.svg' }]],
  appearance: 'force-dark',
  base: '/blog/',
  cleanUrls: true,
  themeConfig: {
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Client', link: '/client/', activeMatch: '/client/' },
      { text: 'Server', link: '/server/', activeMatch: '/server/' },
      { text: 'Develop', link: '/develop/', activeMatch: '/develop/' },
      { text: 'Reference', link: '/reference/', activeMatch: '/reference/' },

    ],
    sidebar: [
      {
        text: 'Client',
        collapsed: false,
        base: '/client/',
        items: [
          { text: 'Overview', link: 'index' },
          { text: 'Setup', link: 'setup' },
        ]
      },
      {
        text: 'Server',
        collapsed: false,
        base: '/server/',
        items: [
          { text: 'Overview', link: 'index' },
          { text: 'Setup', link: 'setup' },
        ]
      },
      {
        text: 'Develop',
        collapsed: false,
        base: '/develop/',
        items: [
          { text: 'Overview', link: 'index' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: 'Client',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Client',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
        ]
      },
            {
        text: 'Reference',
        collapsed: false,
        base: '/reference/',
        items: [
          { text: 'Overview', link: 'index' },
          { text: 'Config', link: 'config' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alseif0x/rustycore' },
      { icon: 'discord', link: 'https://discord.gg/mH6ACpGPb2' }
    ],
    editLink: {
      pattern: 'https://github.com/alseif0x/rustycore/docs/wiki/:path',
      text: 'Edit this page on GitHub'
    },
  }
}
