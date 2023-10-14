import styles from './page.module.css'
import RegisterForm from '@/components/Forms/FormRegister/RegisterForm'


export default function Register() {




  return (
    <section className={styles.mainContainer} >
      <h1>Crear cuenta</h1>
      <RegisterForm />
    </section>
  )
}
