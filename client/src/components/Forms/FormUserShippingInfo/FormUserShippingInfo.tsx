'use client';
import styles from './FormCheckout.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PATHS from '@/utils/PAGE_PATHS';
import Button from '@/components/Button/Button';
import UserCheckoutCacheService from '@/services/cache/user-checkout.service-cache';
import UserShipping from './models/UserShipping.interface';
const FormCheckout: React.FC = () => {
    const router = useRouter();

    const [state, setState] = useState<UserShipping>({
        country: '',
        name: '',
        surnames: '',
        address: '',
        houseAddress: '',
        postalCode: 0,
        city: '',
        state: '',
        phone: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((state) => ({ ...state, [event.target.name]: event.target.value }))
    }

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        UserCheckoutCacheService.storeUserCheckoutInformation(state);
        router.push(PATHS.USER.PAYMENT)
    }

    return (
        <form className={styles.formLogin} onSubmit={onSubmit} >
            <h1>Direcciones de envío</h1>
            <input name='country' placeholder='Pais / Region' value={state.country} onChange={handleChange}></input>
            <div>
                <input name='name' placeholder='Nombre' value={state.name} onChange={handleChange}></input>
                <input name='surnames' placeholder='Apellidos' value={state.surnames} onChange={handleChange}></input>
            </div>
            <input name='houseAddress' placeholder='Casa, Apartamento, etc..' value={state.houseAddress} onChange={handleChange}></input>
            <div>
                <input name='postalCode' placeholder='Codigo Portal' value={state.postalCode} onChange={handleChange}></input>
                <input name='city' placeholder='Ciudad' value={state.city} onChange={handleChange}></input>
                <input name='state' placeholder='Provincia / Estado' value={state.state} onChange={handleChange}></input>
            </div>
            <input name='phone' placeholder='Telefono (opcional)' value={state.phone} onChange={handleChange}></input>
            <div>
                <Link href={PATHS.USER.CART}>Volver al carrito</Link>
                <Button text='Continuar con envios' className='btn-2' type='submit' />
            </div>
        </form>
    )
}

export default FormCheckout;