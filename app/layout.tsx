import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Sanni Aliyat Semilore | Web Designer & Developer',
  description: 'Professional web designer creating stunning digital experiences. Specializing in modern, responsive web design and development.',
  keywords: 'Aliyat, Web Designer, UI/UX Designer, Front-End Developer, HTML, CSS, JavaScript, React, Web Development, Portfolio, Nigeria, Responsive Design, Modern Web Design',
  authors: [{ name: 'Sanni Aliyat Semilore' }],
  openGraph: {
    title: 'Sanni Aliyat Semilore | Web Designer & Developer',
    description: 'Professional web designer creating stunning digital experiences. Specializing in modern, responsive web design and development.',
    type: 'website',
    url: 'https://your-portfolio-link.com',
    images: ['/assets/semilore.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Early apply saved theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') { document.documentElement.classList.add('dark'); }
              } catch (e) {}
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  )
}
