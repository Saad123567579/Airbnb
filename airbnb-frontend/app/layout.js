// RootLayout.js
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar';
import Header from './components/Header';
import getCurrentUser from './actions/getCurrentUser';
const inter = Inter({ subsets: ['latin'] });
const font = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Hotel Booking App',
};

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar currentUser={currentUser} />
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
