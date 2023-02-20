'use client';
import Button from '@/components/Button/Button';
import styles from './RegisterForm.module.css'
import { useState } from 'react';
import usersService from '@/services/users.service';

type RegisterForm = {
    username: string;
    surname: string;
    email: string;
}

const RegisterForm: React.FC<any> = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((state): any => ({ ...state, [event.target.name]: event.target.value }))
        console.log(state);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state);
        usersService.create(state).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
        console.log("a");
    };

    return (
        <form className={styles.formRegister} onSubmit={handleSubmit}>
            <input name='username' placeholder='Nombre' value={state.username} onChange={handleChange}></input>
            <input name='email' placeholder='Email' value={state.email} onChange={handleChange}></input>
            <input name='password' placeholder='Contraseña' value={state.password} onChange={handleChange}></input>
            <Button type='submit' text='Crear' className='btn-2' />
        </form>
    )
}

export default RegisterForm;