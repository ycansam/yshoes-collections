'use client';
import styles from './page.module.css'
import Authorization from '@/utils/Authorization.component'
import ROLES from '@/utils/constants/roles.constants';
import TableCartProducts from '@/components/TableCartProducts/TableCartProducts';
import CartHooks from './hooks/page.hooks';
function Cart() {
  const { isLoading, cart } = CartHooks();

  if(isLoading) return <p>Loading cart...</p>

  return (
    <div className={styles.mainContainer}>
      <h1>Tu carrito</h1>
      <TableCartProducts products={cart} />
    </div>
  )
}

export default Authorization(Cart, ROLES.USER);