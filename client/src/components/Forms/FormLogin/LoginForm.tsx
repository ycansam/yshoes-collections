'use client';
import Button from '@/components/Button/Button';
import styles from './LoginForm.module.css'
import { useState } from 'react';
import usersService from '@/services/users.service';
import notify from '@/utils/Notify';
import userTokenCacheService from '@/services/cache/user-token.service-cache';
import { useRouter } from 'next/navigation';
import PATHS from '@/utils/PAGE_PATHS';
type TLogin = {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const router = useRouter();

    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((state): TLogin => ({ ...state, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        usersService.login(state).then(res => {
            notify.Toast(res.data.message, notify.ToastTypes.SUCCESS);
            const { token } = res.data.content;
            router.push(PATHS.USER.ACCOUNT)
            userTokenCacheService.storageToken(token);
        }).catch(err => {
            console.log(err.response.data)
            notify.Toast(err.response.data.message, notify.ToastTypes.ERROR);
        })
    };

    return (
        <form className={styles.formLogin} onSubmit={handleSubmit}>
            <input name='username' placeholder='Usuario/Email' value={state.username} onChange={handleChange}></input>
            <input name='password' placeholder='Contraseña' value={state.password} onChange={handleChange}></input>
            <Button type='submit' text='Iniciar Sesión' className='btn-2' />
        </form>
    )
}

export default LoginForm;