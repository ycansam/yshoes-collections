'use client';
import styles from './page.module.css'
import Authorization from '@/utils/Authorization.component'
import ROLES from '@/utils/constants/roles.constants';
import TableCartProducts from '@/components/Pages/Cart/TableCartProducts/TableCartProducts';
import CartHooks from './hooks/page.hooks';
import PayContainer from '@/components/Pages/Cart/PayContainer/PayContainer';

function Cart() {
  const { isLoading, cart, subtotal } = CartHooks();

  if (isLoading) return <p>Loading cart...</p>

  return (
    <div className={styles.mainContainer}>
      <h1>Tu carrito</h1>
      <TableCartProducts products={cart} />
      <PayContainer subtotal={subtotal} currency='EUR' cart={cart} />
    </div>
  )
}

export default Authorization(Cart, ROLES.USER);