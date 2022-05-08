import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Nav.scss';

const data = {
  links: [
    {
      text: 'About',
      title: 'About',
      url: '#about-book',
    },
    {
      text: 'Reviews',
      title: 'Reviews',
      url: '#reviews',
    },
    {
      text: 'FAQ',
      title: 'FAQ',
      url: '#faq',
    },
  ]
}

const Nav = (footer = false) => {
  return (
    <nav className={`nav d-none d-md-flex ${footer && 'nav--footer'}`}>
      {data.links.map(link => (
        <AnchorLink
          href={link.url}
          offset={() => 100}
          className="nav__link"
          key={link.url}
        >
          {link.text}
        </AnchorLink>
      ))}
    </nav>
  )
}

export default Nav;
