'use client';
import UserCartService from '@/services/user-cart.service';
import { useEffect, useState } from 'react';
import userTokenCacheService from '@/services/cache/user-token.service-cache';
import Token from '@/models/token.interface';
import CartProduct from '@/models/cart-product.interface';
import CartReturns from '../models/return.interface';

const CartHooks = (): CartReturns => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [subtotal, setSubTotal] = useState<number>(0);

    useEffect(() => {
        getUserCart();
    }, [])

    const getUserCart = () => {
        const token = userTokenCacheService.getToken() as Token;
        UserCartService.getByUser(token.id).then(res => {
            const content = res.data.content as CartProduct[];
            setCart(content);

            const amount = content.reduce((a: any, b: CartProduct) => {
                return a + (b.id_product.price * b.quantity);
            }, 0)
            setSubTotal(amount);

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return { cart, isLoading, subtotal }
}

export default CartHooks;