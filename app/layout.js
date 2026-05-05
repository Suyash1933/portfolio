import './globals.css'

export const metadata = {
  title: 'Suyash Mishra — Software Developer & AI Enthusiast',
  description: 'Full-Stack Developer & Software Engineer based in Prayagraj, India. Building scalable web applications and AI-powered systems.',
  keywords: 'Suyash Mishra, Software Engineer, Full Stack Developer, React, Next.js, Node.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
