import Button from "@/components/Button/Button";
import CartProduct from "@/models/cart-product.interface";
import PATHS from "@/utils/PAGE_PATHS";
import { useRouter } from "next/navigation";
import UserCheckoutCacheService from "@/services/cache/user-checkout.service-cache";
interface PayContainerProps {
    subtotal: number;
    currency: string;
    cart: CartProduct[];
}

const PayContainer: React.FC<PayContainerProps> = ({ subtotal, currency, cart }): JSX.Element => {

    const router = useRouter();

    const redirectToCheckout = () => {

        const data = { cart, saved_at: new Date() };
        UserCheckoutCacheService.storeCheckout(data)

        router.push(PATHS.USER.CHECKOUT);
    }

    return (
        <div>
            <p>Subtotal: {subtotal} {currency}</p>
            <p>Los impuestos y gastos de envio se calculan en la pantalla de pago</p>
            <Button text={'Pagar pedido'} className='btn-2' type="button" onClick={redirectToCheckout} />
            <button>Boton paypal</button>
        </div>
    )

}

export default PayContainer;