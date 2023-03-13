
import CheckoutsService from '@/services/checkouts.service';
import userCheckoutCacheService from '@/services/cache/user-checkout.service-cache';
import UserCheckout from '@/models/user-checkout.interface';

const proccedCheckout = (paymentMethod: any) => {

    const checkout = userCheckoutCacheService.getCheckout() as UserCheckout;

    if (userCheckoutCacheService)
        CheckoutsService.addCheckout({ id: paymentMethod.id, cart: checkout.cart, amount: checkout.amount, currency: checkout.currency, userInfo: checkout.userInfo }).then(res => {
            console.log(paymentMethod);
        }).catch(err => {
            console.log(err);
        })
}

export default proccedCheckout;