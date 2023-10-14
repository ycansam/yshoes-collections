'use client';
import styles from './page.module.css'
import FormCheckout from '@/components/Forms/FormUserShippingInfo/FormUserShippingInfo';
import { useEffect, useState } from 'react';
import userCheckoutCacheService from '@/services/cache/user-checkout.service-cache';
const Checkout: React.FC = (): JSX.Element => {

  const [cartData, setCartData] = useState<any>({})

  useEffect(() => {
    setCartData(userCheckoutCacheService.getCheckout());
  }, [])

  if(!cartData) return <></>


  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Checkout</h1>
        <FormCheckout />
      </div>
      <div>
        {/* Summary Content */}
      </div>
    </div>
  )
}

export default Checkout;