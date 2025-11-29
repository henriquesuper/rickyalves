import { Inter } from 'next/font/google';
import '../styles/globals.css';
import LayoutContentRenderer from '../components/LayoutContentRenderer';
import NeuralCursor from '../components/ui/NeuralCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ricky\'s Code Chronicles',
  description: 'Ricky\'s Code Chronicles - Personal portfolio and blog',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="cursor-none">
      <body className={`${inter.className} bg-black`}>
        <NeuralCursor />
        <LayoutContentRenderer>{children}</LayoutContentRenderer>
      </body>
    </html>
  );
} 