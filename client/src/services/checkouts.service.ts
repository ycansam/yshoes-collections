
import UserShipping from "@/components/Forms/FormUserShippingInfo/models/UserShipping.interface";
import CartProduct from "@/models/cart-product.interface";
import router from "@/services/service-router";

interface PostCheckoutBody {
    id: string;
    cart: CartProduct[];
    amount: number;
    currency: string;
    userInfo: UserShipping;
}

export default class CheckoutsService {

    static addCheckout({ id, cart, amount, currency, userInfo }: PostCheckoutBody) {
        return router.post(`/checkout/`, { id, cart, amount, currency, userInfo });
    }
}