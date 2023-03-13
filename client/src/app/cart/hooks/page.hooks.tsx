'use client';
import UserCartService from '@/services/user-cart.service';
import { useEffect, useState } from 'react';
import userTokenCacheService from '@/services/cache/user-token.service-cache';
import Token from '@/models/token.interface';
import CartProduct from '@/models/cart-product.interface';
import CartReturns from '../models/return.interface';

const CartHooks = (): CartReturns => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [cart, setCart] = useState<CartProduct[]>([])

    useEffect(() => {
        getUserCart();
    }, [])

    const getUserCart = () => {
        const token = userTokenCacheService.getToken() as Token;
        UserCartService.getByUser(token.id).then(res => {
            setCart(res.data.content);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return { cart, isLoading }
}

export default CartHooks;