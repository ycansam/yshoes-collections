import styles from './page.module.css'
import Link from 'next/link';



export default function Login() {
  return (
    <section >
      <Link href="/register"> <p>Crear cuenta</p></Link>
    </section>
  )
}
