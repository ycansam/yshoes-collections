'use client';
import styles from './page.module.css'
import Authorization from '@/utils/Authorization.component'
import ROLES from '@/utils/roles.variables';


function Admin() {

  return (
    <section className={styles.mainContainer}>
      <h1>Zona de Administrador</h1>
    </section>
  )
}

export default Authorization(Admin, ROLES.ADMIN);