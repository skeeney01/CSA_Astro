import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Experience',
          href: getPermalink('/services'),
        },
        {
          text: 'Industries',
          href: getPermalink('/about'),
        },
        {
          text: 'Services',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Careers',
          href: getPermalink('/careers'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Home', href: '/' },
        
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Industries', href: '/about' },
        { text: 'Services', href: '/pricing' },
        { text: 'Experience', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Careers', href: '/careers' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // footNote: `
  //   Here
  // `,
};
