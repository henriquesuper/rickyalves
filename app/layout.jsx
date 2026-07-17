import { Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';
import LayoutContentRenderer from '../components/LayoutContentRenderer';
import NeuralCursor from '../components/ui/NeuralCursor';

const inter = Inter({ subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteDescription =
  'Ricky Alves is a full-stack software engineer based in Los Angeles, building web and mobile apps with React, Next.js, Node, Swift, and Flutter. Explore his projects and get in touch.';

export const metadata = {
  metadataBase: new URL('https://www.rickyalves.com'),
  title: {
    default: 'Ricky Alves — Software Engineer in Los Angeles',
    template: '%s | Ricky Alves',
  },
  description: siteDescription,
  keywords: [
    'Ricky Alves',
    'software engineer',
    'full-stack developer',
    'Los Angeles',
    'React',
    'Next.js',
    'Node.js',
    'Swift',
    'Flutter',
    'web developer',
    'mobile developer',
  ],
  authors: [{ name: 'Ricky Alves', url: 'https://www.rickyalves.com' }],
  creator: 'Ricky Alves',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Ricky Alves — Software Engineer in Los Angeles',
    description: siteDescription,
    url: 'https://www.rickyalves.com',
    siteName: "Ricky's Code Chronicles",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricky Alves — Software Engineer in Los Angeles',
    description: siteDescription,
    creator: '@henriquesuper',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ricky Alves',
  url: 'https://www.rickyalves.com',
  jobTitle: 'Software Engineer',
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  knowsAbout: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Python', 'Swift', 'Flutter'],
  sameAs: [
    'https://github.com/henriquesuper',
    'https://twitter.com/henriquesuper',
    'https://linkedin.com/in/rickyalves/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`cursor-none ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <NeuralCursor />
        <LayoutContentRenderer>{children}</LayoutContentRenderer>
      </body>
    </html>
  );
}