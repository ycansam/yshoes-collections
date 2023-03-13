'use client';
import styles from './page.module.css'
import Authorization from '@/utils/Authorization.component'
import ROLES from '@/utils/constants/roles.constants';
import TableCartProducts from '@/components/Pages/Cart/TableCartProducts/TableCartProducts';
import CartHooks from './hooks/page.hooks';
import PayContainer from '@/components/Pages/Cart/PayButtons/PayContainer';
import PATHS from "@/utils/PAGE_PATHS";
import { useRouter } from "next/navigation";


function Cart() {
  const router = useRouter();
  const { isLoading, cart } = CartHooks();

  if (isLoading) return <p>Loading cart...</p>


  return (
    <div className={styles.mainContainer}>
      <h1>Tu carrito</h1>
      <TableCartProducts products={cart} />
      <PayContainer subtotal={120} currency='EUR' cart={cart} />
    </div>
  )
}

export default Authorization(Cart, ROLES.USER);