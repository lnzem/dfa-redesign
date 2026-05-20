import { Newsreader, Public_Sans, Inter, Roboto } from 'next/font/google'
import './globals.css'

const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-headline' })
const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-body' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400'], variable: '--font-roboto' })

export const metadata = {
  title: 'DFA Redesign',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${publicSans.variable} ${inter.variable} ${roboto.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}