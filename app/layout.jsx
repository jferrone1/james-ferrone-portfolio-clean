import './globals.css'
import React from 'react'

export const metadata = {
  title: 'James Ferrone — Portfolio',
  description: 'Resume and portfolio of James Ferrone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Resume and portfolio of James Ferrone" />
        <meta property="og:title" content="James Ferrone — Portfolio" />
        <meta property="og:description" content="Senior Training & Development leader — portfolio and resume." />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="James Ferrone — Portfolio" />
        <meta name="twitter:description" content="Senior Training & Development leader — portfolio and resume." />
        <meta name="twitter:image" content="/og-image.svg" />
        <title>James Ferrone — Portfolio</title>
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="container">
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
              <h1 style={{margin:0}}>James Ferrone</h1>
              <div className="header-contact"><a href="mailto:Jferrone1@gmail.com">Jferrone1@gmail.com</a></div>
            </div>
            <nav aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        <div className="hero"><div className="hero-banner" role="img" aria-label="Decorative abstract banner"></div></div>
        <main id="main" className="container" tabIndex={-1}>{children}</main>
      </body>
    </html>
  )
}
