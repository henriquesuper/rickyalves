import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import AnimatedLayout from '../components/AnimatedLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ricky\'s Code Chronicles',
  description: 'Ricky\'s Code Chronicles - Personal portfolio and blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-50 to-gray-100`}>
        <Navbar />
        <AnimatedLayout>
          {children}
        </AnimatedLayout>
        <Footer />
      </body>
    </html>
  );
} 