import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import LandingPage from '@/components/LandingPage/LadingPage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <LandingPage />
    </main>
  )
}
