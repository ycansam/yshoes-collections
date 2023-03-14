
import CheckoutsService from '@/services/checkouts.service';
import userCheckoutCacheService from '@/services/cache/user-checkout.service-cache';
import UserCheckout from '@/models/user-checkout.interface';
import userTokenCacheService from '@/services/cache/user-token.service-cache';
import Token from '@/models/token.interface';

const proccedCheckout = (paymentMethod: any) => {
    const checkout = userCheckoutCacheService.getCheckout() as UserCheckout;
    const userData = userTokenCacheService.getToken() as Token;
    if (userCheckoutCacheService)
        CheckoutsService.addCheckout({ ...paymentMethod, id_user: userData.id, ...checkout })
            .then(res => {
                console.log({ ...paymentMethod, id_user: userData.id, ...checkout });
            }).catch(err => {
                console.log(err);
            })
}

export default proccedCheckout;