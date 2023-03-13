'use client';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import userCheckoutCacheService from '@/services/cache/user-checkout.service-cache';
import FormPayment from '@/components/Forms/FormStripe/FormStripe';

const Payment: React.FC = (): JSX.Element => {

  const [userCheckoutInfo, setUserCheckoutInfo] = useState<any>({})

  useEffect(() => {
    setUserCheckoutInfo(userCheckoutCacheService.getCheckout());
  }, [])

  console.log(userCheckoutInfo);
  if (!userCheckoutInfo) return <></>

  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>Pago</h1>
        <h2>Envios</h2>
        <p>Standart - Gratis</p>
        <FormPayment />
      </div>
      <div>
        {/* Summary Content */}
      </div>
    </div>
  )
}

export default Payment;