import LoginForm from '@/components/Forms/FormLogin/LoginForm';
import styles from './page.module.css'
import Link from 'next/link';



export default function Login() {
  return (
    <section className={styles.mainContainer}>
      <h1>Inicio de sesión</h1>
      <LoginForm/>
      <Link href="/register"> <p>Crear cuenta</p></Link>
    </section>
  )
}
