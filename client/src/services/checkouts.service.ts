
import UserShipping from "@/components/Forms/FormUserShippingInfo/models/UserShipping.interface";
import CartProduct from "@/models/cart-product.interface";
import router from "@/services/service-router";

interface PostCheckoutBody {
    id: string;
    id_user: string;
    cart: CartProduct[];
    amount: number;
    currency: string;
    userInfo: UserShipping;
    card: {
        brand: string;
        checks: object;
        country: string;
        exp_month: number;
        exp_year: number;
        last4: string;
    }
}

export default class CheckoutsService {

    static addCheckout({ id, id_user, cart, amount, currency, userInfo, card }: PostCheckoutBody) {
        return router.post(`/checkout/`, { id, id_user, cart, amount, currency, userInfo, card });
    }
}