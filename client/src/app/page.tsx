import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from '@/components/NavBar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
        <NavBar/>
    </main>
  )
}
