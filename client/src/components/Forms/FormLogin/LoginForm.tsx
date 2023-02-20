'use client';
import Button from '@/components/Button/Button';
import styles from './LoginForm.module.css'
import { useState } from 'react';
import usersService from '@/services/users.service';
import LOCAL_STORAGE_VARIABLES from '@/utils/localstoragevariables';

type TLogin = {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
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
            const { token } = res.data.content;
            localStorage.setItem(LOCAL_STORAGE_VARIABLES.TOKEN, token)
        }).catch(err => {
            console.log(err.response.data)
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